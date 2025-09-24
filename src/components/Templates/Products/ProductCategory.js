"use client"
import React, {useState} from 'react';
import ChevronDown from "@/src/components/Icons/ChevronDown";
import ToggleSection from "@/src/components/modules/ToggleSection/ToggleSection";

function ProductCategory({categories}) {

    return (
        <ToggleSection title="دسته بندی">
            {
                categories.data?.map((category, index) => (
                    <label key={index} htmlFor={`category-${index}`}
                           className="flex flex-row items-center gap-2 font-Yekan-Regula text-dark">
                        <input id={`category-${index}`} type="checkbox"
                               className="peer hidden"/>
                        <div htmlFor={`category-${index}`}
                             className="h-4 w-4 flex rounded-md border border-gray-600 light:bg-[#e8e8e8]  peer-checked:border-0 peer-checked:bg-lightBlue transition">
                            <svg fill="none" viewBox="0 0 24 24"
                                 className="w-4 h-4 "
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12.6111L8.92308 17.5L20 6.5" strokeWidth={2}
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        {category.displayName}
                    </label>
                ))
            }
        </ToggleSection>
    );
}

export default ProductCategory;