import React from 'react';

import ToggleSection from "@/src/Components/Modules/Features/ToggleSection/ToggleSection";
import FilteringProductWrapper from "@/src/Components/Templates/Products/FilteringProductWrapper";

function FilterSideBarProduct({categories}) {
    return (
        <aside className=" grid w-full  lg:max-w-72 top-6 ">
            <div className="lg:hidden">
                <ToggleSection title="تنظیمات نمایش محصولات">
                    <FilteringProductWrapper categories={categories}/>
                </ToggleSection>
            </div>
            <div className="hidden lg:block">
                <FilteringProductWrapper categories={categories}/>
            </div>
        </aside>
    );
}

export default FilterSideBarProduct;