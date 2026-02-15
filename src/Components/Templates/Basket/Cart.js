import React, {useState, useEffect} from "react";
import Image from 'next/image'
import XMark from "@/src/Components/Icons/X-mark";
import Heart from "@/src/Components/Icons/Heart";

const Cart = ({productDetail, setProducts}) => {


    const [allProductBasket, setAllProductBasket] = useState([])


    useEffect(() => {
        setAllProductBasket(getProductFromLocalStorage())
    }, []);

    const getProductFromLocalStorage = () => {
        const getProduct = JSON.parse(localStorage.getItem("cart"))
        return getProduct.length ? getProduct : null
    }

    // useEffect(() => {
    //     console.log("all product =>", allProductBasket)
    // }, [allProductBasket]);


    const removeProductForBasket = (id) => {
        const removeItemBasket = allProductBasket.filter(item => item.id !== id)
        localStorage.setItem("cart", JSON.stringify(removeItemBasket));
        setProducts(removeItemBasket)
    }

    const incrementProductQuantity = () => {

    }

    const decrementProductQuantity = () => {

    }


    return (
        <div
            className="space-y-4 shadow border border-lightGray/10 rounded-xl py-2 px-2.5 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <a href="#" className="shrink-0 md:order-1">
                <Image className="rounded-xl h-20 w-20 dark:hidden"
                       src={productDetail.img}
                       width={500}
                       height={500}
                       alt="imac image"/>
                <Image className="hidden rounded-xl h-20 w-20 dark:block"
                       src={productDetail.img}
                       width={500}
                       height={500}
                       alt="imac image"/>
            </a>
            <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
            <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                    <button type="button"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round"
                                  strokeLinejoin="round" strokeWidth={2} d="M1 1h16"/>
                        </svg>
                    </button>
                    <p
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">{productDetail.count}</p>
                    <button type="button"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round"
                                  strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                    <p className="text-base font-bold text-gray-900 dark:text-white">{productDetail.totalPrice.toLocaleString()} تومان </p>
                </div>
            </div>
            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href={`products/${productDetail.id}`}
                   className="text-base font-medium text-gray-900 ">{productDetail.name}</a>
                <div className="flex  items-center gap-4">
                    <button type="button"
                            className="inline-flex justify-center items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                        اضافه به علاقه مندی ها
                        <Heart className="h-5 w-5"/>
                    </button>
                    <button type="button"
                            onClick={() => removeProductForBasket(productDetail.id)}
                            className="inline-flex justify-center items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                        حذف {""}
                        <XMark className=" h-5 w-5 text-red-600"/>


                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;