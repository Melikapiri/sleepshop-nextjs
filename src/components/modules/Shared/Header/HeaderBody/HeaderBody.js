"use client"
import React, {useEffect, useState} from 'react';
import Search from "@/src/Components/Icons/Search";
import User from "@/src/Components/Icons/User";
import Bag from "@/src/Components/Icons/Bag";
import Logo from "@/src/Components/Icons/Logo";
import MobileMenu from "@/src/Components/Modules/Shared/Header/MobileMenu/MobileMenu";
import DesktopMenu from "@/src/Components/Modules/Shared/Header/DesktopMenu/DesktopMenu";
import ToggleMenuBtn from "@/src/Components/Modules/Shared/Header/ToggleMenuBtn/ToggleMenuBtn";
import Login from "@/src/Components/Icons/Login";
import XMark from "@/src/Components/Icons/X-mark";
import {useMenu} from "@/src/Context/AppContext";
import Signin from "@/src/Components/Icons/SignIn";

function HeaderBody({isLogin, username}) {
    const {isMenuOpen, toggleMenu, setIsMenuOpen} = useMenu()
    const [menuItem, setMenuItem] = useState([])
    useEffect(() => {
        const getCategoryData = async () => {
            const res = await fetch(`/api/categories`)
            const category = await res.json()
            setMenuItem(category.data.slice(0, 3))
        }
        getCategoryData()
    }, []);

    useEffect(() => {
        console.log("menuItem", menuItem)
    }, [menuItem]);
    return (
        <div className="flex justify-between items-center mx-auto mt-3 lg:mt-6 ">
            {/* Open menu Btn*/}
            <ToggleMenuBtn isMenuOpen={isMenuOpen}
                           toggleMenu={toggleMenu}
                           setIsMenuOpen={setIsMenuOpen}/>
            {/* Mobile menu*/}

            <div
                className={`mobile-menu ${isMenuOpen ? `right-0` : `-right-96`} fixed z-40 w-64 top-0  bottom-0 bg-primaryColor p-6 transition-all`}>
                <div
                    onClick={toggleMenu}
                    className="close-btn inline-block rounded-full p-2  border border-white">
                    <XMark className="w-5 h-5  text-white"/>
                </div>


                {
                    username ? (
                        <p className="flex justify-center items-center gap-3 text-white p-1.5 rounded-lg border border-white line-clamp-1  mt-2 mb-6">

                            {username} خوش آمدید
                        </p>
                    ) : (
                        <a href="/login"
                           className="flex justify-center items-center gap-3 text-white p-1.5 rounded-lg border border-white  mt-2 mb-6">

                            ورود/ثبت نام
                            <Login className="w-5 h-5 rotate-180"/>
                        </a>
                    )
                }


                <MobileMenu data={menuItem} />
            </div>
            {/*Logo  desktop*/}
            <div>
                <div className=" font-Yekan-bold text-lg">
                    <a href="#" className="flex items-center gap-3.5">
                        <Logo className="w-[49px] h-[45px]"/>

                        آرامیس
                    </a>
                </div>
            </div>
            {/*Menu*/}
            <DesktopMenu data={menuItem}/>
            {/* Header icons*/}
            <div className="flex items-center sm:gap-3.5">
                <a href="">
                    <Search className="hidden sm:inline-block w-5 h-5 text-dark"/>
                </a>
                <a href=""
                   className="p-2 text-white bg-lightBlue sm:bg-transparent rounded-lg sm:text-dark sm:p-0">
                    <Bag className="  w-5 h-5 "/>
                </a>

                {
                    isLogin ? (
                        <User className="hidden sm:inline-block w-5 h-5 text-dark"/>
                    ) : (
                        <a href="/login">
                            <Signin className=" hidden sm:inline-block  w-5 h-5 text-dark"/>
                        </a>
                    )
                }


            </div>
        </div>
    );
}

export default HeaderBody;