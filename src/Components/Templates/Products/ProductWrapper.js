"use client";
import React, {useState, useEffect} from "react";
import {usePathname} from 'next/navigation';
import FilterSideBarProduct from "@/src/Components/Templates/Products/FilterSideBarProduct";
import SortIcon from "@/src/Components/Icons/SortIcon";
import OfferCard from "@/src/Components/Modules/Ui/OfferCard/OfferCard";
import SkeletonCard from "@/src/Components/Modules/Ui/SkeletonCard/SkeletonCard";
import PaginationComponent from "@/src/Components/Modules/Features/PaginationComponent/PaginationComponent";
import {useFilterProduct} from "@/src/Context/FilterProductContext";
import SortSection from "@/src/Components/Templates/Products/SortSection";
import {motion} from "framer-motion";
import Breadcrumb from "@/src/Components/Modules/Ui/Breadcrumb/Breadcrumb";

function ProductWrapper() {
    const {
        allProduct,              // Filtered list
        paginatedProducts,       // Paginated list
        setPaginatedProducts,
        setAllProduct,
        originalProducts,
        loading,
    } = useFilterProduct();

    const [allCategories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch(`http://localhost:3000/api/categories`);
            const data = await res.json();
            setCategories(data);
        };
        getCategories();
    }, []);

    const breadcrumbItems = [
        { name: "صفحه اصلی", href: "/" },
        { name: "دسته‌بندی" },
    ];
    return (
        <div className=" container xl:max-w-[94.52%] mx-auto">
            <Breadcrumb items={breadcrumbItems} />

            <div className="flex items-start flex-col lg:flex-row  mx-auto gap-4 lg:gap-6">
                <FilterSideBarProduct categories={allCategories}/>
                <section className="flex flex-col w-full gap-4 lg:gap-6">
                    <div
                        className="relative hidden md:flex items-center justify-between gap-x-6 h-14 px-8 bg-lightGray3 rounded-2xl">
                        <div className="flex items-center gap-x-2">
                            <span className="flex items-center gap-2 font-Yekan-Medium text-base">
                                <SortIcon className="w-5 h-5"/> مرتب سازی
                            </span>
                        </div>
                        <SortSection/>
                        <span className="hidden xl:block font-Yekan-Medium text-sm text-[#404040]">
                            {originalProducts.length} محصول موجود است
                        </span>
                    </div>

                    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {
                            loading
                                ? paginatedProducts.map((product) => (

                                    <motion.div
                                        key={product.id}
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{ease: "easeOut", duration: 0.3}}
                                    >
                                        <OfferCard products={product}/>
                                    </motion.div>
                                ))
                                : Array(8)
                                    .fill(null)
                                    .map((_, i) => <SkeletonCard key={i}/>)
                        }


                    </div>
                </section>
            </div>

            {loading && (
                <PaginationComponent
                    allProduct={allProduct}
                    setPaginatedProducts={setPaginatedProducts}
                    itemCount={8}
                    currentPageNumber={1}

                />
            )}
        </div>
    );
}

export default ProductWrapper;