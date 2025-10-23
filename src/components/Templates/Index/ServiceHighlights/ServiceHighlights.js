import React from 'react';
import ServiceItem from "@/src/Components/Templates/Index/ServiceHighlights/ServiceItem";
import Wallet from "@/src/Components/Icons/Wallet";
import Smile from "@/src/Components/Icons/Smile";
import Support from "@/src/Components/Icons/Support";

function ServiceHighlights(props) {
    return (
        <section className="mb-12 sm:mb-20">
            <div className="container">
                <div>
                    <div className="relative mb-12 flex ">
                        <div className="relative bg-lightBlue rounded-xl w-[104px] h-[38px]">
                            <img
                                className="absolute bottom-0 -right-1"
                                src="/images/portrait-smiling-woman-.png"
                                alt=""
                            />
                        </div>
                        <p className="absolute right-20 font-Yekan-SemiBold text-xl/10  sm:font-Yekan-bold sm:text-2xl/10 tracking-tighter sm:tracking-tight">
                            بهترین هارا در <span className="text-lightBlue"> کنار ما</span> تجربه
                            خواهید کرد چون ...
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 lg:gap-[120px] mt-24 sm:mt-12 ">
                        <ServiceItem icon={<Wallet className="w-7 h-7"/>} title="پرداخت امن با درگاه امن"/>
                        <ServiceItem icon={<Smile className="w-7 h-7"/>} title="رضایت بیش از 1 میلیون مشتری"/>
                        <ServiceItem icon={<Support className="w-7 h-7"/>} title="پشتیبانی 24 ساعته"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceHighlights;