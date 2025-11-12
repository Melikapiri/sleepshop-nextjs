import React from 'react';
import Image from 'next/image'
import Link from "next/link";
function PopularCard({title,price,image,id}) {
    return (
        <div className="flex sm:flex-col sm:justify-between gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
            <div className="w-32 sm:h-52 lg:h-40 xl:h-[218px] sm:w-auto">
                <Image
                    width={700}
                    height={700}
                    className="block w-full h-full object-cover rounded-lg"
                    src={image}
                    alt={title}
                />

            </div>
            <Link
                href={`/products/${id}`}
                className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"
            >
                {" "}
                {title}            </Link>
            <div className=" bg-white rounded-lg  p-2 w-full">
                <Link
                    href={`/products/${id}`}
                    className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "
                >
                    {" "}
                    {title}                 </Link>
                <div className="flex items-end justify-between">
                    <div className="flex items-center gap-2">
                        <p className="text-sm sm:text-base">{price.toLocaleString()}</p>
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