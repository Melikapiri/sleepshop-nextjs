import React from 'react';
import FilterIcon from "@/src/components/Icons/FilterIcon";
import XMark from "@/src/components/Icons/X-mark";
import PriceRangeSelector from "@/src/components/Templates/Products/PriceRangeSelector";
import ProductCategory from "@/src/components/Templates/Products/ProductCategory";

function FilterSideBarProduct({categories}) {
    return (
        <aside className="col-span-full sm:col-span-4 lg:col-span-3 lg:sticky top-6 space-y-6">
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
                    <div
                        className="flex justify-between gap-x-6 h-full rounded-2xl p-4.5 bg-lightGray3 font-Yekan-Medium text-sm">

                        نمایش کالاهای موجود
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultValue/>
                            <div
                                className="group peer bg-white rounded-full duration-300 w-10 h-5 ring-2 ring-primaryColor after:duration-300 after:bg-primaryColor peer-checked:after:bg-lightBlue peer-checked:ring-lightBlue after:rounded-full after:absolute after:h-4 after:w-4 after:top-0.5 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-4 peer-hover:after:scale-95"/>
                        </label>
                    </div>
                    <ProductCategory categories={categories}/>
                </div>
            </form>
        </aside>
    );
}

export default FilterSideBarProduct;