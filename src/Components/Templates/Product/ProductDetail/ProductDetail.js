"use client"
import React, {useState} from "react";
import Breadcrumb from "@/src/Components/Modules/Ui/Breadcrumb/Breadcrumb";
import Image from "next/image";
import Heart from "@/src/Components/Icons/Heart";
import Star from "@/src/Components/Icons/Star";
import Shield from "@/src/Components/Icons/Shield";
import Plus from "@/src/Components/Icons/Plus";
import Minus from "@/src/Components/Icons/Minus";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import HomeSliderItem from "@/src/Components/Templates/Index/HomeSection/HomeSliderItem";
import MoreGridBig from "@/src/Components/Icons/MoreGridBig";
import Truk from "@/src/Components/Icons/Truk";
import HeadPhone from "@/src/Components/Icons/HeadPhone";
import LikeShape from "@/src/Components/Icons/LikeShape";
import Discount from "@/src/Components/Icons/Discount";

const ProductDetail = ({product, userId, isLogin}) => {
    console.log("product =>   ", product)
    console.log("product =>   ", product.category.displayName)
    console.log("product =>   ", product.category.name)
    console.log("id=> ", userId)
    return (
        <>
            <div className="container w-full">
                <Breadcrumb
                    items={[
                        {name: "صفحه اصلی", href: '/'},
                        {name: `${product.category.displayName}`, href: `/category/${product.category.name}`},
                        {name: `${product.title}`,},
                    ]}
                />


                {/*  product body  */}
                <div className="flex flex-col lg:flex-row items-start gap-7 mb-8">

                    {/* product image wrapper*/}
                    <div
                        className="relative mx-auto lg:mx-0 w-full xs:w-[450px] lg:w-[400px] h-[330px] xs:h-[380px] rounded-3xl overflow-hidden">
                        <Image className="w-full h-full " width={700}
                               height={700} src={product.img} alt={product.title}/>
                        <div
                            className="absolute flex items-center justify-center top-4 right-4 rounded-full h-8 w-8 bg-white">
                            <Heart className="w-5 h-5 text-dark hover:fill-dark transition-colors"/>
                        </div>
                    </div>

                    {/*  product detail  */}

                    <div className="w-full  lg:w-[700px]">
                        {/*  product title  */}


                        <h2 className="font-Yekan-bold text-xl sm:font-Modam-SemiBold sm:text-3xl mb-4 line-clamp-2">{product.title}</h2>
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

                            <div className="flex  xs:items-center justify-between flex-col xs:flex-row">
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

                        {/*  Product Features  */}

                        <div>
                            <h4 className=" before:bg-lightBlue relative font-Yekan-Medium text-base mr-4 mt-6 mb-4 product__feature-color ">ویژگی
                                های
                                محصول</h4>
                            <ul className="flex flex-col gap-4 border-r border-dashed border-r-gray-200 pr-1">
                                <li className="relative  before:bg-gray-200 text-gray-600 font-Yekan-Medium text-sm mr-4 product__feature-color">
                                    جنس : {product.material}
                                </li>
                                <li className="relative  before:bg-gray-200 text-gray-600 font-Yekan-Medium text-sm mr-4 product__feature-color">
                                    اندازه : {product.size}
                                </li>
                            </ul>
                        </div>
                        {/*  add to basket  */}
                        <div
                            className="flex flex-col-reverse mx-auto md:mx-0 md:flex-row items-center mt-10 md:mt-16 gap-8 md:gap-10">

                            <div
                                className="w-full md:w-auto inline-flex justify-center items-center gap-4 xs:gap-8 py-4  px-2 sm:px-20 rounded-lg bg-lightBlue">
                                <button className="text-sm sm:text-lg text-white">افزودن به سبد خرید</button>
                                <span className="block h-5 w-px bg-white"></span>
                                <p className="text-sm sm:text-lg text-white">
                                    {product.price.toLocaleString()}
                                    {" "}
                                    تومان
                                </p>
                            </div>
                            <div className="flex items-center ml-auto md:ml-0">
                                <div
                                    className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gray-100 cursor-pointer">
                                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>
                                </div>
                                <div
                                    className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 text-base sm:font-Yekan-Medium text-xl ">
                                    5
                                </div>
                                <div
                                    className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gray-100 cursor-pointer">
                                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-black"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block my-10 h-[72px] back  sm:h-24 xl:px-[70px] relative left-0 right-0 ">
                <div
                    className="absolute mb-10 left-0 right-0 top-0 mx-auto  bg-primaryColor/90 w-full  py-3 sm:py-6 lg:px-20 xl:px-[70px] "
                >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1.5}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="w-full"
                    >
                        <SwiperSlide>
                            <HomeSliderItem icon={<MoreGridBig className="w-7 h-7 text-white"/>}
                                            title="تنوع بالای محصولات"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <HomeSliderItem icon={<Truk className="w-7 h-7 text-white"/>}
                                            title="ارسال سریع"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <HomeSliderItem icon={<HeadPhone className="w-7 h-7 text-white"/>}
                                            title="پشتیبانی آنلاین "/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HomeSliderItem icon={<Discount/>}
                                            title="تخفیف خرید بالای 4 محصول"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>

    );
};

export default ProductDetail;