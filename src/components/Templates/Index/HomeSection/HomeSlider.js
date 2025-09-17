'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import MoreGridBig from "@/src/components/Icons/MoreGridBig";
import Truk from "@/src/components/Icons/Truk";
import HeadPhone from "@/src/components/Icons/HeadPhone";
import HomeSliderItem from "@/src/components/Templates/Index/HomeSection/HomeSliderItem";

function HomeSlider() {
    return (
        <div className="relative my-8 sm:mt-16">
            <div className="flex flex-col items-center justify-center">
                <img src="/images/Flowerpot-and%20-bed.png" alt="" />

                {/* اسلایدر Swiper با پیکربندی صحیح */}
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    className="absolute left-0 right-0 -bottom-7 xs:-bottom-2 lg:bottom-0 mx-auto bg-primaryColor w-full lg:max-w-[980px] py-3 sm:py-6 lg:px-20 xl:px-[70px] lg:rounded-3xl"
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
                                slidesPerView: 3,
                            },
                        }}
                        className="w-full"
                    >
                        <SwiperSlide>
                            <HomeSliderItem icon={<MoreGridBig className="w-7 h-7 text-white"/>}  description="بیش از ۲۰۰ محصول" title="تنوع بالای محصولات"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <HomeSliderItem icon={<Truk className="w-7 h-7 text-white"/>}  description="ارسال با پست به سراسر کشور"  title="ارسال رایگان به سراسر کشور"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <HomeSliderItem icon={ <HeadPhone className="w-7 h-7 text-white"/>} description="پاسخگوی همیشگی" title="پشتیبانی ۲۴ ساعته"/>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;