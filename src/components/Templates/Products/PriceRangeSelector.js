"use client";
import React, {useState} from "react";
import ToggleSection from "@/src/Components/Modules/Features/ToggleSection/ToggleSection";
import {useFilterProduct} from "@/src/Context/FilterProductContext";
import Search from "@/src/Components/Icons/Search";
import {NumericFormat} from "react-number-format";

function PriceRangeSelector() {
    const {setAllProduct, originalProducts,allProduct} = useFilterProduct();

    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const filterProduct = () => {
        if (minPrice === null && maxPrice === null) {
            setAllProduct(originalProducts);
            return;
        }

        const resultFilterProduct = [...allProduct].filter(
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
        <ToggleSection className="bg-white lg:bg-lightGray3" title={"بازه قیمتی"}>
            <div className="flex gap-1 xl:gap-2 w-full items-center ">
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
                type="button"
                onClick={filterPriceHandler}
                className="p-1.5 flex items-center gap-3 text-sm justify-center bg-lightBlue text-white rounded-xl"
            >
                جستجو
                <Search className="w-4 h-4 "/>
            </button>
        </ToggleSection>
    );
}

export default PriceRangeSelector;
