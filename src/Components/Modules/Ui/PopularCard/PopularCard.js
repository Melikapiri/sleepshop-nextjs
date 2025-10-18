import React from 'react';

function PopularCard(props) {
    return (
        <div className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
            <div className="w-32 sm:w-auto">
                <img
                    className="block w-full h-full object-cover rounded-lg"
                    src="/images/balesh/b1.png"
                    alt="balesh 1"
                />

            </div>
            <a
                href="#"
                className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"
            >
                {" "}
                بالشت طبی آنتی استرس Ivora
            </a>
            <div className=" bg-white rounded-lg  p-2 w-full">
                <a
                    href="#"
                    className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "
                >
                    {" "}
                    بالشت طبی آنتی استرس Ivora
                </a>
                <div className="flex items-end justify-between">
                    <div className="flex items-center gap-2">
                        <p className="text-sm sm:text-base">15.900.000</p>
                        <p className="text-lightBlue font-Yekan-Regula text-[10px]/normal">
                            تومان
                        </p>
                    </div>
                    <div
                        className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base cursor-pointer">
                        <svg className="w-5 h-5 text-dark">
                            <use xlinkHref="#bag"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularCard;