"use client";

import React, {createContext, useState, useContext, useEffect} from "react";

const MenuContext = createContext();

export function MenuProvider({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuItem, setMenuItem] = useState([])

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const getCategoryData = async () => {
            const res = await fetch(`/api/categories`)
            const category = await res.json()
            setMenuItem(category)
        }
        getCategoryData()
    }, []);
    return (
        <MenuContext.Provider value={{isMenuOpen, toggleMenu, setIsMenuOpen, menuItem}}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    return useContext(MenuContext);
}
