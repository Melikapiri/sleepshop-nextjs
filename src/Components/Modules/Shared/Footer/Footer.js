import React from 'react';
import LogoFooter from "@/src/Components/Icons/LogoFooter";
import Call from "@/src/Components/Icons/Call";
import Location from "@/src/Components/Icons/Location";
import Whatsapp from "@/src/Components/Icons/Whatsapp";
import Facebook from "@/src/Components/Icons/Facebook";
import Instagram from "@/src/Components/Icons/Instagram";
import Link from "next/link";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="bg-primaryColor p-9 sm:px-16 py-5 rounded-tr-[40px] rounded-tl-[40px]">
                    <div className="flex flex-col justify-center items-start sm:items-center">
                        <div className=" flex items-center justify-between font-Yekan-bold text-lg mx-auto">
                            <Link href="/"
                               className="text-white inline-flex items-center gap-3.5 mx-auto">
                                <LogoFooter className="w-[49px] h-[45px]"/>
                                آرامیس
                            </Link>
                        </div>
                        <ul className="flex flex-wrap justify-items-start sm:items-center sm:justify-center gap-4 sm:gap-9 mt-9 mb-[18px] child:text-lightGray child:font-Yekan-Medium child:text-base ">
                            <li>
                                <a href="/" >
                                    صفحه اصلی
                                </a>
                            </li>
                            <li>
                                <a href="#">روتختی ها</a>
                            </li>
                            <li>
                                <a href="#">بالشت ها</a>
                            </li>
                            <li>
                                <a href="#">تشک ها</a>
                            </li>
                            <li>
                                <a href="#">درباره ما</a>
                            </li>
                        </ul>
                        <div
                            className="hidden md:block bg-lightGray mx-auto h-px max-w-[640px] min-w-[630px] mb-[18px]"/>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-9 sm:gap-28">
                            <div>
                                <div className="flex items-center gap-2.5 mb-2.5">
                                    <div className="p-3.5 rounded-full bg-white/10">
                                        <Call className="w-4 h-4"/>

                                    </div>
                                    <p className="text-base text-white">098-123-456</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="p-3.5 rounded-full bg-white/10">
                                        <Location className="w-4 h-4"/>

                                    </div>
                                    <p className="text-base text-white">
                                        ایران ، تهران ، خیابان فرشته
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <img src="/images/namad1.png" alt=""/>
                                </div>
                                <div>
                                    <img src="/images/namafd2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-secondPrimaryColor flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-6 sm:px-20 py-6">
                    <p className="text-lightGray text-sm">
                        تمام حقوق این وب سایت متعلق به ملیکا میباشد
                    </p>
                    <div className="flex items-center gap-2">
                        <Whatsapp className="w-6 h-6"/>
                        <Facebook className="w-6 h-6"/>
                        <Instagram className="w-6 h-6"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;