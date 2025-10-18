import React from 'react';
import FilterIcon from "@/src/Components/Icons/FilterIcon";
import XMark from "@/src/Components/Icons/X-mark";
import {useFilterProduct} from "@/src/Context/FilterProductContext";

function RemoveAllFilter(props) {

    const {setAllProduct, originalProducts} = useFilterProduct();
    const removeFilteringHandler = () => {
        setAllProduct(originalProducts)
    }
    return (
        <div className="flex justify-between gap-x-6 h-full rounded-2xl p-4.5  bg-white border border-stone-100 lg:bg-lightGray3 ">
            <p className="flex items-center gap-2 font-Yekan-Medium ">
                <FilterIcon className="w-5 h-5"/>
                فیلتر
            </p>
            <button onClick={removeFilteringHandler} className="flex items-center gap-3 text-lightBlue">
                <XMark className="w-4 h-4 "/>
                <span className="font-Yekan-Regula text-sm">
                                        حذف فیلتر
                                    </span>
            </button>
        </div>);
}

export default RemoveAllFilter;