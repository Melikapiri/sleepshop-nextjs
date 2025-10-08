import React from 'react';
import Instagram from "@/src/components/Icons/Instagram";

function FollowUs(props) {
    return (
        <section className="mb-12 sm:mb-20">
            <div className="container">
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="follow-instagram overflow-hidden relative text-white rounded-lg flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-center sm:justify-between p-6 sm:p-7"
                >
                    <img
                        className="absolute inset-0 w-full h-full sm:h-auto opacity-10"
                        src="/images/svg/instagramWave.svg"
                        alt=""
                    />
                    <h3 className="font-Yekan-bold text-xl sm:text-2xl">
                        اینستاگرام مارو دنبال کن حتما ...
                    </h3>
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 font-Yekan-bold text-xl sm:text-2xl"
                    >
                        Aramis-Home
                        <Instagram className="w-7 h-7"/>

                    </a>
                </div>
            </div>
        </section>
    );
}

export default FollowUs;