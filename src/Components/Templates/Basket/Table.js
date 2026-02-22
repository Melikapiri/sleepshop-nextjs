"use client"
import React, {useState, useEffect} from "react";
import Cart from "@/src/Components/Templates/Basket/Cart";
import OrderSummary from "@/src/Components/Templates/Basket/OrderSummary";
import Breadcrumb from "@/src/Components/Modules/Ui/Breadcrumb/Breadcrumb";
import EmptyCart from "@/src/Components/Templates/Basket/EmptyCart";
import Loader from "@/src/Components/Modules/Ui/Loader/Loader";
import {motion} from "framer-motion";

const Table = () => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const [cartOriginalPrice, setCartOriginalPrice] = useState(0)
    const [cartDiscountedPrice, setCartDiscountedPrice] = useState(0)
    let sum = 0

    useEffect(() => {
        const isUserBasket = JSON.parse(localStorage.getItem("cart")) || []
        if (isUserBasket.length) {
            setProducts(isUserBasket)
            setLoader(false)

        }

    }, []);

    useEffect(() => {
        setLoader(false)
        localStorage.setItem("cart", JSON.stringify(products));
        const totalOriginalPrice = products.reduce(
            (sum, item) => sum + item.originalPrice, 0)
        setCartOriginalPrice(totalOriginalPrice)

        const totalDiscountedPrice = products.reduce(
            (sum, item) => sum + item.totalPrice, 0)
        setCartDiscountedPrice(totalDiscountedPrice)
    }, [products]);


    // useEffect(() => {
    //     console.log("cartOriginalPrice=> ", cartOriginalPrice)
    // }, [cartOriginalPrice]);


    return (
        <section className="container  py-4  dark:bg-gray-900 border-dashed ">

            {
                loader ? (<Loader/>) : products.length === 0 ? (
                    <motion.div initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{ease: "easeOut", duration: 0.3}}>
                        <EmptyCart/>
                    </motion.div>) : (
                    <motion.div initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{ease: "easeOut", duration: 0.3}}>
                        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                            <Breadcrumb
                                items={[
                                    {name: "صفحه اصلی", href: '/'},
                                    {name: `سبد خرید`,},
                                ]}
                            />
                            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                    <div className="space-y-6">
                                        {
                                            products?.map((product, index) => <Cart key={index}
                                                                                    setProducts={setProducts}
                                                                                    productDetail={product}/>)
                                        }

                                    </div>
                                </div>
                                <OrderSummary saving={cartOriginalPrice - cartDiscountedPrice}
                                              cartOriginalPrice={cartOriginalPrice}
                                              cartDiscountedPrice={cartDiscountedPrice}/>
                            </div>
                        </div>
                    </motion.div>
                )
            }

        </section>
    );
};

export default Table;