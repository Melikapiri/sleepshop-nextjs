import React from 'react';
import Sparkles from "@/src/components/Icons/Sparkles";
import Image from 'next/image'
import SkeletonCard from "@/src/components/modules/SkeletonCard/SkeletonCard";

function OfferCard({products}) {
    return products ? (
        <div className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
            <div className="w-32 sm:h-52 lg:h-40 xl:h-[218px] sm:w-auto">
                <Image
                    width={700}
                    height={700}
                    className="block w-full h-full object-cover rounded-lg shadow-md border border-stone-300"
                    src={products.img}
                    alt={products.title || "product image"}
                />
            </div>

            <a
                href="#"
                className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1"
            >
                {products.title}
            </a>

            <div className="bg-white rounded-lg p-2 w-full">
                <a
                    href="#"
                    className="line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4"
                >
                    {products.title}
                </a>

                <div className="flex items-center justify-between h-12">
                    <div>
                        {products.discount ? (
                            <p className="flex items-center text-[12px]/normal tracking-tight sm:text-base gap-2 text-lightGray">
                <span className="line-through">
                  {products.price.toLocaleString()}
                </span>
                                <span className="line-through text-xs">تومان</span>
                            </p>
                        ) : null}

                        <p className="flex items-center gap-1 text-sm sm:text-base">
                            {products.finalPrice.toLocaleString()}{" "}
                            <span className="text-xs">تومان</span>
                        </p>
                    </div>

                    <div className="bg-secondPrimaryColor text-lightBlue py-2 px-2.5 rounded-lg">
                        {!products.discount ? (
                            <Sparkles className="w-4 h-4"/>
                        ) : (
                            <span className="text-sm">{products.discount}%</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <SkeletonCard/>
    );
}

export default OfferCard;