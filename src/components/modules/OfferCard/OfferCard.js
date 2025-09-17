import React from 'react';
import Sparkles from "@/src/components/Icons/Sparkles";

function OfferCard(props) {
    return (
        <div
            className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
            <div className="w-32 sm:w-auto">
                <img
                    className="block w-full h-full object-cover rounded-lg"
                    src="/images/toshak/t-1.png"
                    alt="toshak 1"
                />
            </div>
            <a
                href="#"
                className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"
            >
                {" "}
                تشک طبی بدون فنر پارادوکس
            </a>
            <div className=" bg-white rounded-lg  p-2 w-full">
                <a
                    href="#"
                    className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "
                >
                    {" "}
                    تشک طبی بدون فنر پارادوکس
                </a>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="flex items-center text-[12px]/normal sm:text-base gap-2 text-lightGray ">
                            <span className="line-through">16.500.000</span>
                            <span className="line-through text-xs">تومان</span>
                        </p>
                        <p className="text-sm sm:text-base">

                            15.900.000</p>
                    </div>
                    <div
                        className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base ">
                        <Sparkles className="w-4 h-4" />
                        {/*20 %*/}
                    </div>
                </div>
            </div>
        </div>    );
}

export default OfferCard;