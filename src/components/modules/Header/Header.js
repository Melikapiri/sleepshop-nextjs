import React from 'react';
import ArrowLeft from "@/src/components/Icons/ArrowLeft";
import Search from "@/src/components/Icons/Search";
import HeaderBody from "@/src/components/modules/Header/HeaderBody/HeaderBody";
import connectToDB from "@/configs/db";
import {authUser} from "@/src/utils/AuthServer";

async function Header(props) {
    await connectToDB()
    const user = await authUser();
    return (
        <header className="header  md:mt-4">
            {/*  top header  */}
            <div
                className=" relative hidden md:flex-center w-[94.52%] p-2.5 text-center mx-auto bg-lightBlue rounded-lg font-Yekan-Medium text-base text-white">
                <div className="flex-center gap-2.5 cursor-pointer">
                    <a href="#">تخفیف ها شروع شده همین الان خرید کن</a>
                    <ArrowLeft className="w-5 h-5"/>

                </div>
                <div className="absolute left-2.5 cursor-pointer">
                    <svg className="w-5 h-5">
                        <use xlinkHref="#x-mark"/>
                    </svg>
                </div>
            </div>
            {/* Header Body*/}
            <div className="mx-auto w-[94.52%]">

                <HeaderBody username={user && user.name} isLogin={user ? true : false}/>
                <div
                    className="sm:hidden mt-6 sm:mt-0 flex items-center justify-between bg-[#F7F7F7] py-3.5 px-4 rounded-lg">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="جستجو ..."
                        className="outline-0 bg-transparent border-none"
                    />
                    <Search className="w-5 h-5"/>

                </div>
            </div>
        </header>
    );
}

export default Header;