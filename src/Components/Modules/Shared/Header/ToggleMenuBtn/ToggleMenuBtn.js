"use client"
import React, {useState} from 'react';
import Bars from "@/src/Components/Icons/Bars"

function ToggleMenuBtn({isMenuOpen,toggleMenu,setIsMenuOpen}) {

    return (
        <div
            onClick={toggleMenu}
             className={`open-menu block sm:hidden p-2 bg-lightBlue rounded-lg`}>
            <Bars className="w-5 h-5 text-white"/>

        </div>);
}

export default ToggleMenuBtn;