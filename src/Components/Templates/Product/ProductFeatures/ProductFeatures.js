import React, {useState, useEffect} from "react";
import Image from "next/image";
import Heart from "@/src/Components/Icons/Heart";
import Star from "@/src/Components/Icons/Star";
import Shield from "@/src/Components/Icons/Shield";
import Plus from "@/src/Components/Icons/Plus";
import Minus from "@/src/Components/Icons/Minus";
import {toast} from "react-toastify";

const ProductFeatures = ({img, title, _id, tags, comments, score, material, size, price}) => {
    const [count, setCount] = useState(1);
    const [isInCart, setIsInCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(price);

    // تابع کمکی برای گرفتن وضعیت سبد خرید
    const getCartStatus = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(item => item.id === _id);
        return {
            exists: !!existingItem,
            item: existingItem,
            cart: cart
        };
    };

    useEffect(() => {
        const { exists, item } = getCartStatus();

        if (exists && item) {
            setCount(item.count);
            setIsInCart(true);
            setTotalPrice(item.count * price);
        } else {
            setIsInCart(false);
            setTotalPrice(count * price);
        }
    }, [_id, price, count]);

    // تابع برای محاسبه قیمت کل
    const calculateTotalPrice = (quantity) => {
        return quantity * price;
    };

    const updateCartCount = (newCount) => {
        const { cart, item, exists } = getCartStatus();

        if (exists && item) {
            const itemIndex = cart.findIndex(item => item.id === _id);

            if (newCount <= 0) {
                cart.splice(itemIndex, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                setCount(1);
                setIsInCart(false);
                setTotalPrice(price); // ریست به قیمت یک عدد
                toast.info("محصول از سبد خرید حذف شد");
                return;
            }

            cart[itemIndex].count = newCount;
            localStorage.setItem("cart", JSON.stringify(cart));

            setCount(newCount);
            setTotalPrice(calculateTotalPrice(newCount));

            if (newCount !== item.count) {
                toast.success(`تعداد محصول در سبد خرید به ${newCount} عدد به‌روز شد`);
            }
        } else {
            const newCountValue = Math.max(0, newCount);
            setCount(newCountValue);
            setTotalPrice(calculateTotalPrice(newCountValue));
        }
    };

    const handleCartAction = () => {
        const { cart, exists } = getCartStatus();

        if (exists) {
            if (count === 0) {
                const itemIndex = cart.findIndex(item => item.id === _id);
                cart.splice(itemIndex, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                setIsInCart(false);
                setCount(1);
                setTotalPrice(price);
                toast.info("محصول از سبد خرید حذف شد");
            } else {
                const itemIndex = cart.findIndex(item => item.id === _id);
                cart[itemIndex].count = count;
                cart[itemIndex].totalPrice = totalPrice;
                localStorage.setItem("cart", JSON.stringify(cart));
                toast.success(`تعداد محصول در سبد خرید به ${count} عدد  به‌روز شد`);
            }
        } else {
            if (count > 0) {
                const cartItem = {
                    id: _id,
                    name: title,
                    price: price,
                    count: count,
                    totalPrice: totalPrice,
                    img: img
                };

                cart.push(cartItem);
                localStorage.setItem("cart", JSON.stringify(cart));
                setIsInCart(true);
                toast.success(`${count} عدد از محصول به سبد خرید اضافه شد `);
            } else {
                toast.warning("لطفاً تعداد مورد نظر را انتخاب کنید");
            }
        }
    };

    const decrementCount = () => {
        const { exists } = getCartStatus();

        if (exists) {
            updateCartCount(count - 1);
        } else {
            if (count > 0) {
                const newCount = count - 1;
                setCount(newCount);
                setTotalPrice(calculateTotalPrice(newCount));
            }
        }
    };

    const incrementCount = () => {
        const { exists } = getCartStatus();

        if (exists) {
            updateCartCount(count + 1);
        } else {
            const newCount = count + 1;
            setCount(newCount);
            setTotalPrice(calculateTotalPrice(newCount));
        }
    };

    const getButtonText = () => {
        if (isInCart) {
            if (count === 0) {
                return "حذف از سبد خرید";
            }
            return "به‌روزرسانی سبد خرید";
        }
        return "افزودن به سبد خرید";
    };

    const getButtonStyle = () => {
        if (isInCart && count === 0) {
            return "bg-red-500 hover:bg-red-600";
        }
        return "bg-lightBlue";
    };

    return (
        <div className="flex flex-col lg:flex-row items-start gap-7 mb-8">

            {/* product image wrapper*/}
            <div
                className="relative mx-auto lg:mx-0 w-full xs:w-[450px] lg:w-[400px] h-[330px] xs:h-[380px] rounded-3xl overflow-hidden">
                <Image className="w-full h-full " width={700}
                       height={700} src={img} alt={title}/>
                <div
                    className="absolute flex items-center justify-center top-4 right-4 rounded-full h-8 w-8 bg-white">
                    <Heart className="w-5 h-5 text-dark hover:fill-dark transition-colors"/>
                </div>
            </div>

            {/*  product detail  */}

            <div className="w-full  lg:w-[700px]">
                {/*  product title  */}

                <h2 className="font-Yekan-bold text-xl sm:font-Modam-SemiBold sm:text-3xl mb-4 line-clamp-2">{title}</h2>
                <div className="flex flex-col gap-5 ">
                    <div className="flex items-center justify-between gap-5 ">
                        <div>
                            <p className="text-lightTextGray text-sm font-Yekan-Medium">شناسه کالا :
                                <span className="text-dark mr-1">{_id.slice(0, 5)}</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-lightTextGray text-sm font-Yekan-Medium">برچسب :
                                <span
                                    className="text-lightBlue mr-1">{tags.map(item => item).join(" , ")}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex  xs:items-center justify-between flex-col xs:flex-row">
                        {/*دیدگاه*/}
                        <div className="flex items-center font-Yekan-Medium text-sm">
                            {comments.length}
                            {" "}
                            دیدگاه
                            <span className="mx-2 text-lightTextGray">|</span>
                            <div className="flex items-center gap-2">
                                امتیاز {score}
                                <span className="p-2 inline-block rounded-full bg-amber-100">
                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400"/>
                                    </span>
                            </div>
                        </div>
                        {/*    ضمانت*/}
                        <div className="flex items-center gap-2">
                            ضمانت اصالت و کیفیت کالا
                            <span className="inline-block p-2 rounded-full bg-[#6691FF]/10">
                                    <Shield/>
                                </span>
                        </div>
                    </div>

                </div>

                {/*  Product Features  */}

                <div>
                    <h4 className=" before:bg-lightBlue relative font-Yekan-Medium text-base mr-4 mt-6 mb-4 product__feature-color ">ویژگی
                        های
                        محصول</h4>
                    <ul className="flex flex-col gap-4 border-r border-dashed border-r-gray-200 pr-1">
                        <li className="relative  before:bg-gray-200 text-gray-600 font-Yekan-Medium text-sm mr-4 product__feature-color">
                            جنس : {material}
                        </li>
                        <li className="relative  before:bg-gray-200 text-gray-600 font-Yekan-Medium text-sm mr-4 product__feature-color">
                            اندازه : {size}
                        </li>
                    </ul>
                </div>
                {/*  add to basket  */}
                <div
                    className="flex flex-col-reverse mx-auto md:mx-0 md:flex-row items-center mt-10 md:mt-16 gap-8 md:gap-10">

                    <div
                        className={`w-full md:w-auto inline-flex justify-center items-center gap-4 xs:gap-8 py-4 px-2 sm:px-20 rounded-lg ${getButtonStyle()}`}>
                        <button onClick={handleCartAction} className="text-sm sm:text-lg text-white">
                            {getButtonText()}
                        </button>
                        <span className="block h-5 w-px bg-white"></span>
                        <p className="text-sm sm:text-lg text-white">
                            {totalPrice.toLocaleString()}
                            {" "}
                            تومان
                        </p>
                    </div>
                    <div className="flex items-center ml-auto md:ml-0">
                        <div
                            onClick={incrementCount}
                            className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"
                        >
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>
                        </div>
                        <div
                            className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 text-base sm:font-Yekan-Medium text-xl ">
                            {count}
                        </div>
                        <div
                            onClick={decrementCount}
                            className={`flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg cursor-pointer transition-colors ${
                                count > 0
                                    ? 'bg-gray-100 hover:bg-gray-200'
                                    : 'bg-gray-50 cursor-not-allowed opacity-50'
                            }`}
                        >
                            <Minus className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                count > 0 ? 'text-black' : 'text-gray-400'
                            }`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
};

export default ProductFeatures;