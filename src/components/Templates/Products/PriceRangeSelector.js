"use client";
import React, { useState } from "react";
import FilterDropdown from "@/src/components/Templates/Products/FilterDropdown";
import { useFilterProduct } from "@/src/Context/FilterProductContext";
import Search from "@/src/components/Icons/Search";
import { toast } from "react-toastify";
import { NumericFormat } from "react-number-format";

function PriceRangeSelector() {
    const { allProduct, setAllProduct, originalProducts } = useFilterProduct();

    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const filterProduct = () => {
        if (minPrice === null && maxPrice === null) {
            setAllProduct(originalProducts);
            return;
        }

        const resultFilterProduct = originalProducts.filter(
            (product) =>
                product.finalPrice >= (minPrice ?? 0) &&
                product.finalPrice <= (maxPrice ?? Infinity)
        );

        setAllProduct(resultFilterProduct);
    };

    const filterPriceHandler = (e) => {
        e.preventDefault();
        filterProduct();
    };

    return (
        <FilterDropdown title={"بازه قیمتی"}>
            <div className="flex gap-1 xl:gap-2 w-full items-center">
                <NumericFormat
                    thousandSeparator=","
                    allowNegative={false}
                    value={minPrice ?? ""}
                    onValueChange={(values) => setMinPrice(values.floatValue ?? null)}
                    className="outline-0 px-3 w-full py-2 rounded-lg placeholder:text-xs shadow focus:border focus:border-lightBlue"
                    placeholder="مثال 200,000 تومان"
                />
            </div>

            <div className="flex gap-1 xl:gap-2 w-full items-center">
                <NumericFormat
                    thousandSeparator=","
                    allowNegative={false}
                    value={maxPrice ?? ""}
                    onValueChange={(values) => setMaxPrice(values.floatValue ?? null)}
                    className="outline-0 px-3 w-full py-2 rounded-lg placeholder:text-xs shadow focus:border focus:border-lightBlue"
                    placeholder="مثال 800,000 تومان"
                />
            </div>

            <button
                onClick={filterPriceHandler}
                className="p-1.5 flex items-center gap-3 text-sm justify-center bg-lightBlue text-white rounded-xl"
            >
                جستجو
                <Search className="w-4 h-4 " />
            </button>
        </FilterDropdown>
    );
}

export default PriceRangeSelector;
