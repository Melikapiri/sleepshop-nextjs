"use client";

import React, {createContext, useState, useEffect, useContext} from "react";

const FilterProduct = createContext();

export function FilterProductProvider({children}) {
    const [allProduct, setAllProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [originalProducts, setOriginalProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(`http://localhost:3000/api/products`);
            const data = await res.json();
            setAllProduct(data);
            setOriginalProducts(data);
            setLoading(true)
        };
        getProducts();
    }, []);

    return (
        <FilterProduct.Provider
            value={{
                allProduct,
                setAllProduct,
                originalProducts,
                loading, setLoading
            }}
        >
            {children}
        </FilterProduct.Provider>
    );
}

export function useFilterProduct() {
    return useContext(FilterProduct);
}
