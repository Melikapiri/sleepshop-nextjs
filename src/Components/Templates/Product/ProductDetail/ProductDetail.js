"use client"
import React, {useState} from "react";
import Breadcrumb from "@/src/Components/Modules/Ui/Breadcrumb/Breadcrumb";
import Image from "next/image";
import Heart from "@/src/Components/Icons/Heart";
import Star from "@/src/Components/Icons/Star";
import Shield from "@/src/Components/Icons/Shield";

const ProductDetail = ({product, userId}) => {
    console.log("product =>   ", product)
    console.log("product =>   ", product.category.displayName)
    console.log("product =>   ", product.category.name)
    console.log("id=> ", userId)
    return (
        <div className="container w-full">
            <Breadcrumb
                items={[
                    {name: "صفحه اصلی", href: '/'},
                    {name: `${product.category.displayName}`, href: `/category/${product.category.name}`},
                    {name: `${product.title}`,},
                ]}
            />


            {/*  product body  */}
            <div className="flex items-start gap-7 mb-8">

                {/* product image wrapper*/}
                <div className="relative w-[400px] h-[380px] rounded-3xl overflow-hidden">
                    <Image className="w-full h-full " width={600}
                           height={600} src={product.img} alt={product.title}/>
                    <div
                        className="absolute flex items-center justify-center top-4 right-4 rounded-full h-8 w-8 bg-white">
                        <Heart className="w-5 h-5 text-dark hover:fill-dark transition-colors"/>
                    </div>
                </div>

                {/*  product detail  */}

                <div className="w-[600px]">
                    {/*  product title  */}


                    <h2 className="font-Modam-SemiBold text-3xl mb-4">{product.title}</h2>
                    <div className="flex flex-col gap-5 ">
                        <div className="flex items-center justify-between gap-5 ">
                            <div>
                                <p className="text-lightTextGray text-sm font-Yekan-Medium">شناسه کالا :
                                    <span className="text-dark mr-1">{product._id.slice(0, 5)}</span>
                                </p>
                            </div>
                            <div>
                                <p className="text-lightTextGray text-sm font-Yekan-Medium">برچسب :
                                    <span
                                        className="text-lightBlue mr-1">{product.tags.map(item => item).join(" , ")}</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            {/*دیدگاه*/}
                            <div className="flex items-center font-Yekan-Medium text-sm">
                                {product.comments.length}
                                {" "}
                                دیدگاه
                                <span className="mx-2 text-lightTextGray">|</span>
                                <div className="flex items-center gap-2">
                                    امتیاز {product.score}
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
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;