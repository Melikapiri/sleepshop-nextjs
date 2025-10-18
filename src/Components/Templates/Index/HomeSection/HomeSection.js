import React from 'react';
import ChevronLeft from "@/src/Components/Icons/ChevronLeft";
import HomeSlider from "@/src/Components/Templates/Index/HomeSection/HomeSlider";
import ArrowLeft from "@/src/Components/Icons/ArrowLeft";
import Ellipse from "@/src/Components/Icons/Ellipse";

function HomeSection(props) {
    return (
        <section className="home mt-6 sm:mt-16 lg:mt-20">
            <div>
                <div
                    className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 sm:gap-1 font-Modam-ExtraBold ">
                    <h1 className="text-dark text-3xl sm:text-4xl lg:text-5xl">خواب آسوده </h1>
                    <div
                        className="relative flex items-center bg-primaryColor text-white rounded-lg text-3xl sm:text-4xl lg:text-5xl w-44 sm:w-[220px] lg:w-[265px] font-Modam-Regular py-1 pl-1.5">
                        با آرامیس
                        <img className="absolute left-0 bottom-0 h-[66px] w-[63px] sm:h-[94px] sm:w-[90px]"
                             src="/images/beauty-tenderness-concep.png" alt="Aramis Ttitle"/>
                    </div>
                </div>
                <p className=" max-w-[517px] font-Modam-light text-lightGray text-center text-sm mx-auto xs:text-lg mt-4">وارد
                    کننده بهترین کالاهای
                    خواب وارداتی از کشور های معتبر در سراسر جهان</p>
                <div className=" flex items-center justify-center mt-6 xs:mt-8">
                    <a className=" inline-flex items-center py-2 px-3 mx-auto bg-lightBlue text-white rounded-lg gap-2 font-Yekan-Medium text-base"
                       href="/products">مشاهده محصولات
                        <ChevronLeft className="w-4 h-4"/>
                    </a>
                </div>
                <HomeSlider/>
            </div>
            <div className="relative mx-auto mt-14 mb-7 flex flex-col items-center justify-center">
                <ArrowLeft className="w-6 h-6 text-dark -rotate-45"/>

                <Ellipse className="absolute -bottom-1.5 w-[42px] h-[17px]"/>

            </div>
        </section>
    );
}

export default HomeSection;