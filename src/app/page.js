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
import SpecialOffers from "@/src/components/Templates/Index/SpecialOffers/SpecialOffers";
import Banner from "@/src/components/Templates/Index/Banner/Banner";
import PopularCard from "@/src/components/modules/PopularCard/PopularCard";
import PopularSection from "@/src/components/Templates/Index/PopularSection/PopularSection";
import FollowUs from "@/src/components/Templates/Index/FollowUs/FollowUs";
import ServiceHighlights from "@/src/components/Templates/Index/ServiceHighlights/ServiceHighlights";

export default function Home() {

    // local
    return (
        <main>
            <HomeSection/>
            <CategorySection/>
            <SpecialOffers/>
            <Banner/>
            <PopularSection/>
            <FollowUs/>
            <ServiceHighlights/>
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
