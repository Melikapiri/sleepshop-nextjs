"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

const FilterProduct = createContext();

export function FilterProductProvider({ children }) {
    const [originalProducts, setOriginalProducts] = useState([]);
    const [allProduct, setAllProduct] = useState([]);
    const [paginatedProducts, setPaginatedProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(`http://localhost:3000/api/products`);
            const data = await res.json();
            setOriginalProducts(data);
            setAllProduct(data);
            setLoading(true);
        };
        getProducts();
    }, []);

    return (
        <FilterProduct.Provider
            value={{
                originalProducts,
                allProduct,
                setAllProduct,
                paginatedProducts,
                setPaginatedProducts,
                loading,
                setLoading,
            }}
        >
            {children}
        </FilterProduct.Provider>
    );
}

export function useFilterProduct() {
    return useContext(FilterProduct);
}
