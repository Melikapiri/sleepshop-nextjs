"use client";

import React, {createContext, useState, useContext} from "react";

const MenuContext = createContext();

export function MenuProvider({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <MenuContext.Provider value={{isMenuOpen, toggleMenu, setIsMenuOpen}}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    return useContext(MenuContext);
}
