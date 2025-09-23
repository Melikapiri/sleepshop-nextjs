"use client";

import React, {createContext, useState, useEffect, useContext} from "react";

const FilterProduct = createContext();

export function FilterProductProvider({children}) {
    const [allProduct, setAllProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [originalProducts, setOriginalProducts] = useState([]);
    const [productCount, setProductCount] = useState();


    const [update, setUpdate] = useState(false)

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


    useEffect(() => {
        setProductCount(allProduct.length)
    }, [allProduct, update]);
    //

    return (
        <FilterProduct.Provider
            value={{
                allProduct,
                setAllProduct,
                originalProducts,
                loading,
                setLoading,
                setOriginalProducts,
                productCount,
                update,
                setUpdate

            }}
        >
            {children}
        </FilterProduct.Provider>
    );
}

export function useFilterProduct() {
    return useContext(FilterProduct);
}
