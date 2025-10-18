import React, {useEffect, useState} from 'react';
import {useFilterProduct} from "@/src/Context/FilterProductContext";

function  ProductInventory() {
    const {allProduct, setAllProduct, originalProducts} = useFilterProduct();
    const [selected, setSelect] = useState(false)


    useEffect(() => {
        if (selected) {
            const productAvailable = allProduct.filter(
                (product) => product.isAvailable
            );
            setAllProduct(productAvailable);
        } else {
            setAllProduct(originalProducts);
        }
    }, [selected, originalProducts, setAllProduct]);


    return (
        <div
            className="flex justify-between gap-x-6 h-full rounded-2xl p-4.5 bg-white border border-stone-100 lg:border-0 lg:bg-lightGray3 font-Yekan-Medium text-sm">

            نمایش کالاهای موجود
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    checked={selected}
                    onChange={() => setSelect(prevState => !prevState)}
                    type="checkbox" className="sr-only peer" defaultValue/>
                <div
                    className="group peer bg-white rounded-full duration-300 w-10 h-5 ring-2 ring-primaryColor after:duration-300 after:bg-primaryColor peer-checked:after:bg-lightBlue peer-checked:ring-lightBlue after:rounded-full after:absolute after:h-4 after:w-4 after:top-0.5 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-4 peer-hover:after:scale-95"/>
            </label>
        </div>
    );
}

export default ProductInventory;