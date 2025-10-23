import React from 'react';
import RemoveAllFilter from "@/src/Components/Templates/Products/RemoveAllFilter";
import PriceRangeSelector from "@/src/Components/Templates/Products/PriceRangeSelector";
import ProductInventory from "@/src/Components/Templates/Products/ProductInventory";
import ProductCategory from "@/src/Components/Templates/Products/ProductCategory";

function FilteringProductWrapper({categories,products}) {
    return (
        <form id="archive_filters" className="space-y-6">
            <div className="flex flex-col gap-4 lg:gap-6 ">
                <RemoveAllFilter products={products}/>
                {/* price */}
                <PriceRangeSelector products={products}/>
                <ProductInventory products={products}/>
                <ProductCategory products={products} categories={categories}/>
            </div>
        </form>    );
}

export default FilteringProductWrapper;