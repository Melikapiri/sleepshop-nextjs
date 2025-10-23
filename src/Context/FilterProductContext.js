"use client";
import React, {createContext, useState, useEffect, useContext, useMemo} from "react";

const FilterProduct = createContext();

export function FilterProductProvider({children}) {
    const [originalProducts, setOriginalProducts] = useState([]);
    const [allProduct, setAllProduct] = useState([]);
    const [paginatedProducts, setPaginatedProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(`http://localhost:3000/api/products`);
            const data = await res.json();
            setOriginalProducts(data);
            setLoading(true);
        };
        getProducts();
    }, []);

    const shuffledProducts = useMemo(() => {
        if (originalProducts.length === 0) return [];
        return [...originalProducts].sort(() => 0.5 - Math.random());
    }, [originalProducts]);

    useEffect(() => {
        if (shuffledProducts.length > 0) {
            setAllProduct(shuffledProducts);
        }
    }, [shuffledProducts]);

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
