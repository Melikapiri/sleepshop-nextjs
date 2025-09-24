"use client";
import React, {useState} from "react";
import {useFilterProduct} from "@/src/Context/FilterProductContext";

function SortSection() {
    const {setAllProduct, originalProducts} = useFilterProduct();
    const [activeSort, setActiveSort] = useState("جدیدترین");

    const handleSort = (type) => {
        let sorted = [...originalProducts];

        switch (type) {
            case "جدیدترین":
                sorted.sort((a, b) => new Date(b.identifier) - new Date(a.identifier));
                break;
            case "قدیمی‌ترین":
                sorted.sort((a, b) => new Date(a.identifier) - new Date(b.identifier));
                break;
            case "گران‌ترین":
                sorted.sort((a, b) => b.finalPrice - a.finalPrice);
                break;
            case "ارزان‌ترین":
                sorted.sort((a, b) => a.finalPrice - b.finalPrice);
                break;
            case "محبوب‌ترین":
                sorted.sort((a, b) => b.score - a.score);
                break;
            default:
                break;
        }

        setAllProduct(sorted);
        setActiveSort(type);
    };

    const options = ["جدیدترین", "قدیمی‌ترین", "گران‌ترین", "ارزان‌ترین", "محبوب‌ترین"];

    return (
        <ul className="relative flex items-center divide-x-reverse divide-x-2 divide-[#DFDFDF] gap-4 font-Yekan-Medium text-sm text-[#404040] h-full">
            {options.map((option) => (
                <li
                    key={option}
                    role="button"
                    className={`sort-btn px-4 ${
                        activeSort === option ? "sort-btn--active" : ""
                    }`}
                    onClick={() => handleSort(option)}
                >
                    {option}
                </li>
            ))}
        </ul>
    );
}

export default SortSection;
