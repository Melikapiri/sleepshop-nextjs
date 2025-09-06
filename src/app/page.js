"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import MoreGridBig from "@/src/components/Icons/MoreGridBig";
import Truk from "@/src/components/Icons/Truk";
import HeadPhone from "@/src/components/Icons/HeadPhone";
import ArrowLeft from "@/src/components/Icons/ArrowLeft";
import Ellipse from "@/src/components/Icons/Ellipse";
import HomeSlider from "@/src/components/Templates/Index/HomeSection/HomeSlider";
import ChevronLeft from "@/src/components/Icons/ChevronLeft";
import HomeSection from "@/src/components/Templates/Index/HomeSection/HomeSection";
import SectionTitle from "@/src/components/modules/SectionTitle/SectionTitle";
import CategorySection from "@/src/components/Templates/Index/CategorySection/CategorySection";

export default function Home() {

    // local
    return (
        <main>
            <HomeSection/>
            {/*Category Product*/}
            <CategorySection/>
            {/*amazing-offers*/}
            <section className="amazing-offers mb-12 sm:mb-20">
                <div className="container">
                    <div className="flex flex-col xl:flex-row gap-6">
                        {/* amazing-offers-elems*/}
                        <div
                            className="relative overflow-hidden flex flex-col items-center justify-center  bg-primaryColor sm:px-7 pt-8 rounded-xl">
                            <div className="flex items-center justify-between flex-row xl:flex-col">
                                <h3 className="font-Modam-SemiBold text-xl sm:text-2xl text-white"> پیشنهــــــــادات </h3>
                                <h3 className="font-Modam-SemiBold text-xl sm:text-2xl text-white"> شگفت انـــگیز </h3>
                            </div>
                            {/*timer*/}
                            <div className="flex items-center gap-2 my-3 xl:my-7">
                                <div className="bg-white/10 inline-block  w-10 p-1.5 text-center rounded">
                                    <p className="text-white font-Yekan-bold text-sm">08</p>
                                    <p className="font-Yekan-Regula text-xs text-lightGray">ثانیه</p>
                                </div>
                                <div className="bg-white/10 inline-block  w-10 p-1.5 text-center rounded">
                                    <p className="text-white font-Yekan-bold text-sm">32</p>
                                    <p className="font-Yekan-Regula text-xs text-lightGray">دقیقه</p>
                                </div>
                                <div className="bg-white/10 inline-block  w-10 p-1.5 text-center rounded">
                                    <p className="text-white font-Yekan-bold text-sm">14</p>
                                    <p className="font-Yekan-Regula text-xs text-lightGray">ساعت</p>
                                </div>
                                <div className="bg-white/10 inline-block w-10  p-1.5 text-center rounded">
                                    <p className="text-white font-Yekan-bold text-sm">2</p>
                                    <p className="font-Yekan-Regula text-xs text-lightGray">روز</p>
                                </div>
                            </div>
                            <div className="xl:mt-3.5">
                                <img className="block relative z-30 mx-auto" src="/images/women.png"
                                     alt=" amazing offer picture"/>
                            </div>
                            <img className="absolute bottom-0" src="/images/svg/waveOffer.svg" alt=""/>
                        </div>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                            <div
                                className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
                                <div className="w-32 sm:w-auto">
                                    <img className="block w-full h-full object-cover rounded-lg"
                                         src="./images/toshak/t-1.png" alt="toshak 1"/>
                                </div>
                                <a href="#"
                                   className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"> تشک
                                    طبی بدون
                                    فنر
                                    پارادوکس</a>
                                <div className=" bg-white rounded-lg  p-2 w-full">
                                    <a href="#" className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "> تشک
                                        طبی بدون
                                        فنر
                                        پارادوکس</a>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="flex items-center text-[12px]/normal sm:text-base gap-2 text-lightGray ">
                                                <span className="line-through">16.500.000</span>
                                                <span className="line-through text-xs">تومان</span>
                                            </p>
                                            <p className="text-sm sm:text-base">15.900.000</p>
                                        </div>
                                        <div
                                            className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base ">
                                            20 %
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
                                <div className="w-32 sm:w-auto">
                                    <img className="block w-full h-full object-cover rounded-lg"
                                         src="./images/toshak/t-1.png" alt="toshak 1"/>
                                </div>
                                <a href="#"
                                   className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"> تشک
                                    طبی بدون
                                    فنر
                                    پارادوکس</a>
                                <div className=" bg-white rounded-lg  p-2 w-full">
                                    <a href="#" className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "> تشک
                                        طبی بدون
                                        فنر
                                        پارادوکس</a>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="flex items-center text-[12px]/normal sm:text-base gap-2 text-lightGray ">
                                                <span className="line-through">16.500.000</span>
                                                <span className="line-through text-xs">تومان</span>
                                            </p>
                                            <p className="text-sm sm:text-base">15.900.000</p>
                                        </div>
                                        <div
                                            className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base ">
                                            20 %
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
                                <div className="w-32 sm:w-auto">
                                    <img className="block w-full h-full object-cover rounded-lg"
                                         src="./images/toshak/t-1.png" alt="toshak 1"/>
                                </div>
                                <a href="#"
                                   className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"> تشک
                                    طبی بدون
                                    فنر
                                    پارادوکس</a>
                                <div className=" bg-white rounded-lg  p-2 w-full">
                                    <a href="#" className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "> تشک
                                        طبی بدون
                                        فنر
                                        پارادوکس</a>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="flex items-center text-[12px]/normal sm:text-base gap-2 text-lightGray ">
                                                <span className="line-through">16.500.000</span>
                                                <span className="line-through text-xs">تومان</span>
                                            </p>
                                            <p className="text-sm sm:text-base">15.900.000</p>
                                        </div>
                                        <div
                                            className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base">
                                            20 %
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
                                <div className="w-32 sm:w-auto">
                                    <img className="block w-full h-full object-cover rounded-lg"
                                         src="./images/toshak/t-1.png" alt="toshak 1"/>
                                </div>
                                <h3 className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"> تشک
                                    طبی بدون
                                    فنر
                                    پارادوکس</h3>
                                <div className=" bg-white rounded-lg  p-2 w-full">
                                    <h3 className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "> تشک طبی
                                        بدون فنر
                                        پارادوکس</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="flex items-center text-[12px]/normal sm:text-base gap-2 text-lightGray ">
                                                <span className="line-through">16.500.000</span>
                                                <span className="line-through text-xs">تومان</span>
                                            </p>
                                            <p className="text-sm sm:text-base">15.900.000</p>
                                        </div>
                                        <div
                                            className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base">
                                            20 %
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Banner*/}
            {/*<section className="Banner mb-12 sm:mb-20">*/}
            {/*    <div className="container">*/}
            {/*        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-7 ">*/}
            {/*            <div data-aos="fade-left" data-aos-duration={700}*/}
            {/*                 className="banner-sleep pb-14 pt-7 sm:py-[73px] pr-4 sm:pr-[38px] rounded-xl lg:rounded-2xl text-[#2F5B7D]">*/}
            {/*                <h3 className="font-Yekan-bold text-base sm:text-xl">با این بالشت ها میری تو ابرا :)</h3>*/}
            {/*                <p className="font-Yekan-Regula text-xs sm:text-base mt-2">بالشت های طبی آرامیس</p>*/}
            {/*            </div>*/}
            {/*            <div data-aos="fade-right" data-aos-duration={700}*/}
            {/*                 className="banner-bed pb-14 pt-7 sm:py-[73px] pr-4 sm:pr-[38px] rounded-2xl text-white">*/}
            {/*                <h3 className="font-Yekan-bold text-base sm:text-xl">دیگه نگران خواب راحتت نباش</h3>*/}
            {/*                <a href="#"*/}
            {/*                   className="inline-flex items-center gap-1 font-Yekan-Regula text-xs sm:text-base mt-2">کالکشن*/}
            {/*                    پاییزه*/}
            {/*                    آرامیس*/}
            {/*                    <svg className="w-3 h-3">*/}
            {/*                        <use xlinkHref="#chevron-left"/>*/}
            {/*                    </svg>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*popular*/}
            <section className="mb-12 sm:mb-20">
                <div className="container">
                    <div>
                        <svg className="mx-auto w-7 h-7">
                            <use xlinkHref="#crown"/>
                        </svg>
                    </div>
                    {/* section title*/}
                    <div
                        className="relative text-center w-[221px] h-[46px] sm:w-auto sm:h-[48px] mx-auto flex items-center justify-center mt-4 mb-8">
                        <svg className="absolute left-0 right-0 w-full h-full" viewBox="0 0 254 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M125.955 5.5L24.5579 1.56511C15.6814 1.22064 7.36668 6.16688 3.33815 14.0841C0.0178452 20.6094 0.0581267 28.4225 3.51154 34.8783C7.48946 42.3147 15.3081 46.8855 23.7396 46.7037L125.955 44.5L229.772 46.6969C238.502 46.8816 246.541 41.9693 250.36 34.1169C253.296 28.0781 253.332 20.9681 250.512 14.8736C246.655 6.5337 238.115 1.22779 228.932 1.57754L125.955 5.5Z"
                                fill="#EDF6FD" stroke="#5EB5F8" strokeWidth="1.2"/>
                        </svg>
                        <h3 className="relative  mx-auto text-xl sm:text-2xl font-Modam-Regular ">
                            پرفروش ترین محصولات
                        </h3>
                    </div>
                    {/*popular button*/}
                    <div className="hidden sm:flex justify-center items-center mx-auto gap-6 mb-6">
                        <div
                            className=" font-Yekan-Medium bg-secondPrimaryColor text-base text-lightGray w-[168px] py-2 text-center rounded-lg cursor-pointer">
                            تشک های طبی
                        </div>
                        <div
                            className=" font-Yekan-Medium bg-secondPrimaryColor text-base text-lightGray w-[168px] py-2 text-center rounded-lg cursor-pointer">
                            روتختی ها
                        </div>
                    </div>
                    {/*popular products*/}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        <div
                            className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
                            <div className="w-32 sm:w-auto">
                                <img className="block w-full h-full object-cover rounded-lg"
                                     src="./images/balesh/b1.png" alt="balesh 1"/>
                            </div>
                            <a href="#"
                               className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"> بالشت
                                طبی
                                آنتی
                                استرس Ivora</a>
                            <div className=" bg-white rounded-lg  p-2 w-full">
                                <a href="#" className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "> بالشت
                                    طبی آنتی
                                    استرس
                                    Ivora</a>
                                <div className="flex items-end justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm sm:text-base">15.900.000</p>
                                        <p className="text-lightBlue font-Yekan-Regula text-[10px]/normal">تومان</p>
                                    </div>
                                    <div
                                        className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base cursor-pointer">
                                        <svg className="w-5 h-5 text-dark">
                                            <use xlinkHref="#bag">
                                            </use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
                            <div className="w-32 sm:w-auto">
                                <img className="block w-full h-full object-cover rounded-lg"
                                     src="./images/balesh/b2.png" alt="balesh 1"/>
                            </div>
                            <a href="#"
                               className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"> بالشت
                                طبی
                                آنتی
                                استرس Ivora</a>
                            <div className=" bg-white rounded-lg  p-2 w-full">
                                <a href="#" className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "> بالشت
                                    طبی آنتی
                                    استرس
                                    Ivora</a>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm sm:text-base">15.900.000</p>
                                        <p className="text-lightBlue font-Yekan-Regula text-[10px]/normal">تومان</p>
                                    </div>
                                    <div
                                        className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base cursor-pointer">
                                        <svg className="w-5 h-5 text-dark">
                                            <use xlinkHref="#bag">
                                            </use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
                            <div className="w-32 sm:w-auto">
                                <img className="block w-full h-full object-cover rounded-lg"
                                     src="./images/balesh/b1.png" alt="balesh 1"/>
                            </div>
                            <a href="#"
                               className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"> بالشت
                                طبی
                                آنتی
                                استرس Ivora</a>
                            <div className=" bg-white rounded-lg  p-2 w-full">
                                <a href="#" className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "> بالشت
                                    طبی آنتی
                                    استرس
                                    Ivora</a>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm sm:text-base">15.900.000</p>
                                        <p className="text-lightBlue font-Yekan-Regula text-[10px]/normal">تومان</p>
                                    </div>
                                    <div
                                        className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base cursor-pointer">
                                        <svg className="w-5 h-5 text-dark">
                                            <use xlinkHref="#bag">
                                            </use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex gap-3 sm:gap-0 sm:block bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto">
                            <div className="w-32 sm:w-auto">
                                <img className="block w-full h-full object-cover rounded-lg"
                                     src="./images/balesh/b2.png" alt="balesh 1"/>
                            </div>
                            <a href="#"
                               className="hidden sm:block text-sm font-Yekan-Medium mb-3 mt-4 line-clamp-1	"> بالشت
                                طبی
                                آنتی
                                استرس Ivora</a>
                            <div className=" bg-white rounded-lg  p-2 w-full">
                                <a href="#" className=" line-clamp-1 sm:hidden text-sm font-Yekan-Medium mb-4 "> بالشت
                                    طبی آنتی
                                    استرس
                                    Ivora</a>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm sm:text-base">15.900.000</p>
                                        <p className="text-lightBlue font-Yekan-Regula text-[10px]/normal">تومان</p>
                                    </div>
                                    <div
                                        className="bg-secondPrimaryColor text-lightBlue p-2 sm:py-2.5 px-2 rounded-lg text-base cursor-pointer">
                                        <svg className="w-5 h-5 text-dark">
                                            <use xlinkHref="#bag">
                                            </use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Follow Instagram id*/}
            <section className="mb-12 sm:mb-20">
                <div className="container">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                         className="follow-instagram overflow-hidden relative text-white rounded-lg flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-center sm:justify-between p-6 sm:p-7">
                        <img className="absolute inset-0 w-full h-full sm:h-auto opacity-10"
                             src="./images/svg/instagramWave.svg" alt=""/>
                        <h3 className="font-Yekan-bold text-xl sm:text-2xl">اینستاگرام مارو دنبال کن حتما ...</h3>
                        <a href="#" className="inline-flex items-center gap-3 font-Yekan-bold text-xl sm:text-2xl">
                            Aramis-Home
                            <svg className="w-7 h-7">
                                <use xlinkHref="#instagram"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            {/*about us*/}
            <section className="mb-12 sm:mb-20">
                <div className="container">
                    <div>
                        {/*about us title*/}
                        <div className="relative mb-12 flex ">
                            <div className="relative bg-lightBlue rounded-xl w-[104px] h-[38px]">
                                <img className="absolute bottom-0 -right-1" src="./images/portrait-smiling-woman-.png"
                                     alt=""/>
                            </div>
                            <p className="absolute right-20 font-Yekan-SemiBold text-xl/10  sm:font-Yekan-bold sm:text-2xl/10 tracking-tighter sm:tracking-tight">
                                بهترین هارا در <span className="text-lightBlue"> کنار ما</span> تجربه خواهید کرد چون ...
                            </p>
                        </div>
                        {/*about us body*/}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 lg:gap-[120px] mt-24 sm:mt-12 ">
                            <div className="flex flex-col gap-3">
                                <div>
                                    <svg className="w-7 h-7">
                                        <use xlinkHref="#wallet"/>
                                    </svg>
                                </div>
                                <h3 className="font-Yekan-bold text-base">پرداخت امن با درگاه امن</h3>
                                <p className="font-Yekan-Regula text-xs/[22px] line-clamp-3 text-lightGray">لورم ایپسوم
                                    متن ساختگی
                                    با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                                    متون بلکه
                                    روزنامه و مجله است</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <svg className="w-7 h-7">
                                        <use xlinkHref="#smile"/>
                                    </svg>
                                </div>
                                <h3 className="font-Yekan-bold text-base">رضایت بیش از ۱ میلیون مشتری</h3>
                                <p className="font-Yekan-Regula text-xs/[22px] line-clamp-3 text-lightGray">لورم ایپسوم
                                    متن ساختگی
                                    با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                                    متون بلکه
                                    روزنامه و مجله است</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <svg className="w-7 h-7">
                                        <use xlinkHref="#support"/>
                                    </svg>
                                </div>
                                <h3 className="font-Yekan-bold text-base">پشتیبانی ۲۴ ساعته</h3>
                                <p className="font-Yekan-Regula text-xs/[22px] line-clamp-3 text-lightGray">لورم ایپسوم
                                    متن ساختگی
                                    با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                                    متون بلکه
                                    روزنامه و مجله است</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Articles*/}
            <section className="mb-12 sm:mb-20">
                <div className="container">
                    <div>
                        {/*article title*/}
                        <div
                            className="relative text-center w-[221px] h-[46px] sm:w-auto sm:h-[48px] mx-auto flex items-center justify-center mt-4 mb-8">
                            <svg className="absolute left-0 right-0 w-full h-full" viewBox="0 0 254 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M125.955 5.5L24.5579 1.56511C15.6814 1.22064 7.36668 6.16688 3.33815 14.0841C0.0178452 20.6094 0.0581267 28.4225 3.51154 34.8783C7.48946 42.3147 15.3081 46.8855 23.7396 46.7037L125.955 44.5L229.772 46.6969C238.502 46.8816 246.541 41.9693 250.36 34.1169C253.296 28.0781 253.332 20.9681 250.512 14.8736C246.655 6.5337 238.115 1.22779 228.932 1.57754L125.955 5.5Z"
                                    fill="#EDF6FD" stroke="#5EB5F8" strokeWidth="1.2"/>
                            </svg>
                            <h3 className="relative  mx-auto text-xl sm:text-2xl font-Modam-Regular ">
                                وبلاگ و مقالات آرامیس
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-7 md:gap-11 lg:gap-[76px]">
                            <div>
                                <div className=" overflow-hidden rounded-xl">
                                    <img className="w-full h-full rounded-xl " src="./images/article/a1.png"
                                         alt="article image"/>
                                </div>
                                <a href="#"
                                   className="inline-block font-Yekan-Medium text-lg mb-2 mt-3.5 xs:mb-1 lg:mb-2 xs:text-base lg:text-lg line-clamp-1">
                                    مزایای خرید اینترنتی
                                    لوازم تحریر</a>
                                <div className="flex items-center justify-between">
                                    <p className="font-Yekan-Regula text-xs lg:text-sm text-lightGray">دسته بندی:
                                        آموزشی</p>
                                    <a className="inline-block" href="#">
                                        <svg
                                            className="inline-block w-5 h-5 xs:w-4 xs:h-4 lg:w-5 lg:h-5 text-lightBlue cursor-pointer">
                                            <use xlinkHref="#arrow-left"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className=" overflow-hidden rounded-xl">
                                    <img className="w-full h-full rounded-xl " src="./images/article/a2.png"
                                         alt="article image"/>
                                </div>
                                <a href="#"
                                   className="inline-block font-Yekan-Medium text-lg mb-2 mt-3.5 xs:mb-1 lg:mb-2 xs:text-base lg:text-lg line-clamp-1">
                                    مزایای خرید اینترنتی
                                    لوازم تحریر</a>
                                <div className="flex items-center justify-between">
                                    <p className="font-Yekan-Regula text-xs lg:text-sm text-lightGray">دسته بندی:
                                        آموزشی</p>
                                    <a className="inline-block" href="#">
                                        <svg
                                            className="inline-block w-5 h-5 xs:w-4 xs:h-4 lg:w-5 lg:h-5 text-lightBlue cursor-pointer">
                                            <use xlinkHref="#arrow-left"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className=" overflow-hidden rounded-xl">
                                    <img className="w-full h-full rounded-xl " src="./images/article/a3.png"
                                         alt="article image"/>
                                </div>
                                <a href="#"
                                   className="inline-block font-Yekan-Medium text-lg mb-2 mt-3.5 xs:mb-1 lg:mb-2 xs:text-base lg:text-lg line-clamp-1">
                                    مزایای خرید اینترنتی
                                    لوازم تحریر</a>
                                <div className="flex items-center justify-between">
                                    <p className="font-Yekan-Regula text-xs lg:text-sm text-lightGray">دسته بندی:
                                        آموزشی</p>
                                    <a className="inline-block" href="#">
                                        <svg
                                            className="inline-block w-5 h-5 xs:w-4 xs:h-4 lg:w-5 lg:h-5 text-lightBlue cursor-pointer">
                                            <use xlinkHref="#arrow-left"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" flex items-center justify-center mt-8 md:mt-12">
                            <a className=" inline-flex items-center py-2 px-3 mx-auto bg-lightBlue text-white rounded-lg gap-2 font-Yekan-Medium text-base"
                               href="#">مقالات بیشتر
                                <svg className="w-4 h-4">
                                    <use xlinkHref="#chevron-left"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>);
}
