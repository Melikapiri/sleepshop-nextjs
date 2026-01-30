import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import HomeSliderItem from "@/src/Components/Templates/Index/HomeSection/HomeSliderItem";
import MoreGridBig from "@/src/Components/Icons/MoreGridBig";
import Truk from "@/src/Components/Icons/Truk";
import HeadPhone from "@/src/Components/Icons/HeadPhone";
import Discount from "@/src/Components/Icons/Discount";

const HighlightSlider = () => {
    return (
        <div className="block my-10 h-[72px] back  sm:h-24 xl:px-[70px] relative left-0 right-0 ">
            <div
                className="absolute mb-10 left-0 right-0 top-0 mx-auto  bg-primaryColor/90 w-full  py-3 sm:py-6 lg:px-20 xl:px-[70px] "
            >
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1.5}
                    autoplay={{
                        delay: 1000,
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

    );
};

export default HighlightSlider;