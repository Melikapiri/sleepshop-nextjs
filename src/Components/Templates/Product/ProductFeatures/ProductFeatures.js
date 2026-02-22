import React, {useState, useEffect} from "react";
import Image from "next/image";
import Heart from "@/src/Components/Icons/Heart";
import Star from "@/src/Components/Icons/Star";
import Shield from "@/src/Components/Icons/Shield";
import Plus from "@/src/Components/Icons/Plus";
import Minus from "@/src/Components/Icons/Minus";
import {toast} from "react-toastify";

const ProductFeatures = ({img, title, _id, tags, comments, score, material, size, finalPrice, originalPrice}) => {
    const [count, setCount] = useState(0);
    const [isInCart, setIsInCart] = useState(false);

    const totalPrice = count * finalPrice;
    const totalOriginalPrice = count * originalPrice;


    const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

    const getCartItem = () => getCart().find(item => item.id === _id);

    useEffect(() => {
        const cartItem = getCartItem();

        if (cartItem) {
            setCount(cartItem.count);
            setIsInCart(true);
        }
    }, []);

// فقط بخش updateCart رو اصلاح کن
    const updateCart = (newCount) => {
        const cart = getCart();
        const itemIndex = cart.findIndex(item => item.id === _id);

        const itemData = {
            id: _id,
            name: title,
            price: finalPrice,
            originalPrice: originalPrice,
            img: img,
            count: newCount,
            totalPrice: newCount * finalPrice,
        };

        if (newCount <= 0) {
            if (itemIndex !== -1) cart.splice(itemIndex, 1);
            setCount(0);
            setIsInCart(false);
            toast.info("محصول از سبد خرید حذف شد");
        } else {
            if (itemIndex !== -1) {
                cart[itemIndex] = { ...cart[itemIndex], ...itemData };
            } else {
                cart.push(itemData);
                setIsInCart(true);
            }
            setCount(newCount);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };
    const increment = () => {
        const cartItem = getCartItem();
        updateCart(cartItem ? cartItem.count + 1 : count + 1);
    };

    const decrement = () => {
        const cartItem = getCartItem();
        const newCount = (cartItem || {count}).count - 1;

        if (newCount >= 0) {
            updateCart(newCount);
        }
    };

    const handleCartButton = () => {
        if (count === 0) {
            updateCart(0);
        } else {
            updateCart(count);
        }
    };

    const buttonText = isInCart
        ? (count === 0 ? "حذف از سبد خرید" : "به‌روزرسانی سبد خرید")
        : "افزودن به سبد خرید";

    const buttonStyle = (isInCart && count === 0)
        ? "bg-red-500 hover:bg-red-600"
        : "bg-lightBlue";

    return (
        <div className="flex flex-col lg:flex-row items-start gap-7 mb-8">
            {/* product image wrapper */}
            <div
                className="relative mx-auto lg:mx-0 w-full xs:w-[450px] lg:w-[400px] h-[330px] xs:h-[380px] rounded-3xl overflow-hidden">
                <Image className="w-full h-full" width={700} height={700} src={img} alt={title}/>
                <div className="absolute flex items-center justify-center top-4 right-4 rounded-full h-8 w-8 bg-white">
                    <Heart className="w-5 h-5 text-dark hover:fill-dark transition-colors"/>
                </div>
            </div>

            {/* product detail */}
            <div className="w-full lg:w-[700px]">
                <h2 className="font-Yekan-bold text-xl sm:font-Modam-SemiBold sm:text-3xl mb-4 line-clamp-2">{title}</h2>

                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-5">
                        <div>
                            <p className="text-lightTextGray text-sm font-Yekan-Medium">شناسه کالا :
                                <span className="text-dark mr-1">{_id.slice(0, 5)}</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-lightTextGray text-sm font-Yekan-Medium">برچسب :
                                <span className="text-lightBlue mr-1">{tags.join(" , ")}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex xs:items-center justify-between flex-col xs:flex-row">
                        <div className="flex items-center font-Yekan-Medium text-sm">
                            {comments.length} دیدگاه
                            <span className="mx-2 text-lightTextGray">|</span>
                            <div className="flex items-center gap-2">
                                امتیاز {score}
                                <span className="p-2 inline-block rounded-full bg-amber-100">
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400"/>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            ضمانت اصالت و کیفیت کالا
                            <span className="inline-block p-2 rounded-full bg-[#6691FF]/10">
                                <Shield/>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Product Features */}
                <div>
                    <h4 className="before:bg-lightBlue relative font-Yekan-Medium text-base mr-4 mt-6 mb-4 product__feature-color">
                        ویژگی های محصول
                    </h4>
                    <ul className="flex flex-col gap-4 border-r border-dashed border-r-gray-200 pr-1">
                        <li className="relative before:bg-gray-200 text-gray-600 font-Yekan-Medium text-sm mr-4 product__feature-color">
                            جنس : {material}
                        </li>
                        <li className="relative before:bg-gray-200 text-gray-600 font-Yekan-Medium text-sm mr-4 product__feature-color">
                            اندازه : {size}
                        </li>
                    </ul>
                </div>

                {/* add to basket */}
                <div
                    className="flex flex-col-reverse mx-auto md:mx-0 md:flex-row items-center mt-10 md:mt-16 gap-8 md:gap-10">
                    <div
                        className={`w-full md:w-auto inline-flex justify-center items-center gap-4 xs:gap-8 py-4 px-2 sm:px-20 rounded-lg ${buttonStyle}`}>
                        <button onClick={handleCartButton} className="text-sm sm:text-lg text-white">
                            {buttonText}
                        </button>
                        <span className="block h-5 w-px bg-white"></span>
                        <p className="text-sm sm:text-lg text-white">
                            {!totalPrice ? finalPrice.toLocaleString() : totalPrice.toLocaleString()}
                            تومان
                        </p>
                    </div>

                    <div className="flex items-center ml-auto md:ml-0">
                        <div onClick={increment}
                             className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors">
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>
                        </div>

                        <div
                            className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 text-base sm:font-Yekan-Medium text-xl">
                            {count}
                        </div>

                        <div onClick={decrement}
                             className={`flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg cursor-pointer transition-colors ${
                                 count > 0 ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-50 cursor-not-allowed opacity-50'
                             }`}>
                            <Minus className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                count > 0 ? 'text-black' : 'text-gray-400'
                            }`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeatures;