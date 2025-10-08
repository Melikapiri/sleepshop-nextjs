
import React, from 'react';

function Banner(props) {


    return (
        <section className="Banner mb-12 sm:mb-20">

            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-7">
                    <div
                        data-aos="fade-down"
                        data-aos-duration="400"
                        className="banner-sleep pb-14 pt-7 sm:py-[73px] pr-4 sm:pr-[38px] rounded-xl lg:rounded-2xl text-[#2F5B7D]"
                    >
                        <h3 className="font-Yekan-bold text-base sm:text-xl">
                            با این بالشت ها میری تو ابرا :)
                        </h3>
                        <p className="font-Yekan-Regula text-xs sm:text-base mt-2">
                            بالشت های طبی آرامیس
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="400"
                        className="banner-bed pb-14 pt-7 sm:py-[73px] pr-4 sm:pr-[38px] rounded-2xl text-white"
                    >
                        <h3 className="font-Yekan-bold text-base sm:text-xl">
                            دیگه نگران خواب راحتت نباش
                        </h3>
                        <a
                            href="#"
                            className="inline-flex items-center gap-1 font-Yekan-Regula text-xs sm:text-base mt-2"
                        >
                            کالکشن پاییزه آرامیس
                            <svg className="w-3 h-3">
                                <use xlinkHref="#chevron-left"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;