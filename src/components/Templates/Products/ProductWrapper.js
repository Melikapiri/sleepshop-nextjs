"use client"
import React, {useState, useEffect} from 'react';
import FilterSideBarProduct from "@/src/components/Templates/Products/FilterSideBarProduct";
import SortIcon from "@/src/components/Icons/SortIcon";
import OfferCard from "@/src/components/modules/OfferCard/OfferCard";
import ChevronLeft from "@/src/components/Icons/ChevronLeft";
import {useFilterProduct} from "@/src/Context/FilterProductContext";


function ProductWrapper() {

    const {allProduct, setAllProduct} = useFilterProduct()

    const [allCategories, setCategories] = useState([])

    useEffect(() => {


        const getCategories = async () => {
            const res = await fetch(`http://localhost:3000/api/categories`)
            const data = await res.json()
            setCategories(data)
        }
        getCategories()
    }, [])


    return (
        <>
            <div className=" flex items-start  flex-col lg:flex-row container xl:max-w-[94.52%] mx-auto gap-4 ">
                <FilterSideBarProduct categories={allCategories}/>
                <section className="flex flex-col w-full  gap-4">
                    <div
                        className="relative hidden md:flex items-center justify-between gap-x-6 h-14 px-8   bg-lightGray3 rounded-2xl ">
                        <div className="flex items-center gap-x-2">
                            <span className="flex items-center gap-2 font-Yekan-Medium text-base  ">
                                <SortIcon className="w-5 h-5"/>مرتب سازی  </span>
                        </div>
                        <ul className=" relative flex items-center divide-x-reverse divide-x-2   divide-[#DFDFDF] gap-4 font-Yekan-Medium text-sm text-[#404040] h-full">
                            <li data-id="default"
                                className=" sort-btn sort-btn--active px-4 "
                                role="button">
                                <a
                                    href="#"
                                    // onClick={() => setArchiveSort("default", "همه دوره‌ها")}
                                >
                                    جدیدترین
                                </a>
                            </li>
                            <a
                                href="#"
                                // onClick={() => setArchiveSort("cheapest", "ارزان‌ترین")}
                                data-id="cheapest"
                                className="sort-btn px-4"
                                role="button"
                            >
                                قدیمی‌ترین
                            </a>
                            <a
                                href="#"
                                // onClick={() => setArchiveSort("expensive", "گران‌ترین")}
                                data-id="expensive"
                                className="sort-btn px-4"
                                role="button"
                            >
                                گران‌ترین
                            </a>
                            <a
                                href="#"
                                // onClick={() => setArchiveSort("popular", "پرمخاطب‌ها")}
                                data-id="popular"
                                className="sort-btn px-4"
                                role="button"
                            >
                                ارزان‌ترین
                            </a>
                            <a
                                href="#"
                                // onClick={() => setArchiveSort("popular", "پرمخاطب‌ها")}
                                data-id="popular"
                                className="sort-btn px-4"
                                role="button"
                            >
                                محبوب‌ترین
                            </a>
                        </ul>

                        <span
                            className="hidden xl:block font-Yekan-Medium text-sm text-[#404040]"> 3150 محصول موجود است</span>
                    </div>

                    <div
                        className="grid gap-4 sm:gap-6 xl:gap-10 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {allProduct.map(product => <OfferCard products={product} key={product.id}/>)}
                    </div>


                </section>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    className="rounded-full border border-slate-300 p-1.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <ChevronLeft className="w-4 h-4 rotate-180"/>
                </button>
                <b className="text-slate-600">
                    1 از 10
                </b>
                <button disabled
                        className="rounded-full border border-slate-300 p-1.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                    <ChevronLeft className="w-4 h-4"/>
                </button>
            </div>
        </>);
}

export default ProductWrapper;