import React from 'react';
import FilterIcon from "@/src/components/Icons/FilterIcon";
import XMark from "@/src/components/Icons/X-mark";
import PriceRangeSelector from "@/src/components/Templates/Products/PriceRangeSelector";
import ProductCategory from "@/src/components/Templates/Products/ProductCategory";
import ProductInventory from "@/src/components/Templates/Products/ProductInventory";

function FilterSideBarProduct({categories}) {
    return (
        <aside className=" grid w-full  lg:max-w-72 top-6 ">
            {/* SearchBox */}
            <form id="archive_filters" className="space-y-6">
                <div className="flex flex-col gap-4 ">
                    <div className="flex justify-between gap-x-6 h-full rounded-2xl p-4.5 bg-lightGray3 ">
                        <p className="flex items-center gap-2 font-Yekan-Medium ">
                            <FilterIcon className="w-5 h-5"/>
                            فیلتر
                        </p>
                        <button className="flex items-center gap-3 text-lightBlue">
                            <XMark className="w-4 h-4 "/>
                            <span className="font-Yekan-Regula text-sm">
                                        حذف فیلتر
                                    </span>
                        </button>
                    </div>
                    {/* price */}
                    <PriceRangeSelector/>
                    <ProductInventory/>
                    <ProductCategory categories={categories}/>
                </div>
            </form>
        </aside>
    );
}

export default FilterSideBarProduct;