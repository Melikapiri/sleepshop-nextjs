"use client"
import React from 'react';
import {useMenu} from "@/src/Context/AppContext";

function OpacityCover() {
    const {isMenuOpen, toggleMenu} = useMenu()

    return (
        <div
            onClick={toggleMenu}
            className={` ${!isMenuOpen && `invisible opacity-0`}  cover fixed z-10  inset-0 bg-black/20`}></div>
    );
}

export default OpacityCover;