import React from 'react';
import RemoveAllFilter from "@/src/components/Templates/Products/RemoveAllFilter";
import PriceRangeSelector from "@/src/components/Templates/Products/PriceRangeSelector";
import ProductInventory from "@/src/components/Templates/Products/ProductInventory";
import ProductCategory from "@/src/components/Templates/Products/ProductCategory";

function FilteringProductWrapper({categories}) {
    return (
        <form id="archive_filters" className="space-y-6">
            <div className="flex flex-col gap-4 lg:gap-6 ">
                <RemoveAllFilter/>
                {/* price */}
                <PriceRangeSelector/>
                <ProductInventory/>
                <ProductCategory categories={categories}/>
            </div>
        </form>    );
}

export default FilteringProductWrapper;