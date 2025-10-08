"use client";
import React, { useEffect, useState } from "react";
import ToggleSection from "@/src/components/modules/ToggleSection/ToggleSection";
import { useFilterProduct } from "@/src/Context/FilterProductContext";

function ProductCategory({ categories }) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { setAllProduct,allProduct, originalProducts } = useFilterProduct();
    console.log(allProduct)
    const handleCheckboxChange = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setAllProduct(originalProducts);
        } else {
            const filtered = originalProducts.filter(product =>
                selectedCategories.includes(product.category.displayName)
            );
            setAllProduct(filtered);
        }
    }, [selectedCategories]);

    return (
        <ToggleSection scrollable={true} className="bg-white lg:bg-lightGray3" title="دسته بندی">
            {categories.data?.map((category, index) => (
                <label
                    key={index}
                    htmlFor={`category-${index}`}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <input
                        id={`category-${index}`}
                        type="checkbox"
                        className="absolute opacity-0 w-4 h-4"
                        checked={selectedCategories.includes(category.displayName)}
                        onChange={() => handleCheckboxChange(category.displayName)}
                    />
                    <div
                        className={`h-4 w-4 rounded-md border border-gray-600 flex items-center justify-center transition
              ${selectedCategories.includes(category.displayName) ? "bg-lightBlue border-0" : "bg-white"}`}
                    >
                    </div>
                    {category.displayName}
                </label>
            ))}
        </ToggleSection>
    );
}

export default ProductCategory;
