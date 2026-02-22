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


    const removeProductForBasket = (id) => {
        setProducts((prevProducts) => {
            const updated = prevProducts.filter((item) => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updated));
            return updated;
        });
    };

    const incrementProductQuantity = (id) => {
        setProducts(prev => prev.map(item =>
            item.id === id
                ? { ...item, count: item.count + 1, totalPrice: (item.count + 1) * item.price }
                : item
        ));
    };

    const decrementProductQuantity = (id) => {
        setProducts((prev) => {
            return prev
                .map((item) =>
                    item.id === id
                        ? { ...item, count: item.count - 1, totalPrice: (item.count - 1) * item.price }
                        : item
                )
                .filter((item) => item.count > 0);
        });
    };


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
                            onClick={() => incrementProductQuantity(productDetail.id)}
                            className="inline-flex text-gray-900 p-2.5 h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        +
                    </button>
                    <p
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">{productDetail.count}</p>
                    <button type="button"
                            onClick={() => decrementProductQuantity(productDetail.id)}

                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        -
                    </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                    <p className="text-sm text-gray-400">{productDetail.price.toLocaleString()} تومان </p>
                    <p className="text-base font-bold text-gray-900">{productDetail.totalPrice.toLocaleString()} تومان </p>
                </div>
            </div>
            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <a href={`products/${productDetail.id}`}
                   className="text-base font-medium text-gray-900 ">{productDetail.name}</a>
                <div className="flex justify-between sm:justify-normal items-center gap-4">
                    <button type="button"
                            className="inline-flex justify-center items-center text-sm font-medium text-gray-500  ">
                        علاقه‌مندی

                         <Heart className="h-5 w-5"/>
                    </button>
                    <button type="button"
                            onClick={() => removeProductForBasket(productDetail.id)}
                            className="inline-flex justify-center items-center text-sm font-medium text-red-600 ">
                        حذف {""}
                        <XMark className=" h-5 w-5 text-red-600"/>


                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;