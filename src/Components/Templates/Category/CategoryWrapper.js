"use client"
import React, {useEffect, useState} from 'react';
import {usePathname} from "next/navigation";
import {useFilterProduct} from "@/src/Context/FilterProductContext";
import FilterSideBarProduct from "@/src/Components/Templates/Products/FilterSideBarProduct";
import SortIcon from "@/src/Components/Icons/SortIcon";
import SortSection from "@/src/Components/Templates/Products/SortSection";
import {motion} from "framer-motion";
import OfferCard from "@/src/Components/Modules/Ui/OfferCard/OfferCard";
import SkeletonCard from "@/src/Components/Modules/Ui/SkeletonCard/SkeletonCard";
import PaginationComponent from "@/src/Components/Modules/Features/PaginationComponent/PaginationComponent";
import Search from "@/src/Components/Icons/Search";
import SectionTitle from "@/src/Components/Modules/Ui/SectionTitle/SectionTitle";
import EmptyProductsMessage from "@/src/Components/Modules/Ui/EmptyProductsMessage/EmptyProductsMessage";
import {array} from "yup";

function CategoryWrapper(props) {
    const [pathname, setPathname] = useState(usePathname().split("/"))
    const havingCategories = pathname.includes("category")
    const [filterProduct, setFilterProduct] = useState([])


    const {
        allProduct,              // Filtered list
        paginatedProducts,       // Paginated list
        setPaginatedProducts,
        setAllProduct,
        originalProducts,
        loading,
    } = useFilterProduct();

    const [allCategories, setCategories] = useState([]);


    const filterProductHandler = () => {
        const filtered = allProduct.filter(product => product.category.name === pathname[pathname.length - 1]);
        setFilterProduct(filtered);
    }

    useEffect(() => {

        filterProductHandler()
    }, [pathname]);
    //
    useEffect(() => {
        filterProductHandler()
        console.log(allProduct)
    }, [allProduct]);


    return (
        <>
            <div className="flex items-start flex-col lg:flex-row container xl:max-w-[94.52%] mx-auto gap-4 lg:gap-6">
                {/*<FilterSideBarProduct categories={allCategories}/>*/}

                <section className="flex flex-col w-full gap-4 lg:gap-6">
                    {/*<div*/}
                    {/*    className="relative hidden md:flex items-center justify-between gap-x-6 h-14 px-8 bg-lightGray3 rounded-2xl">*/}
                    {/*    <div className="flex items-center gap-x-2">*/}
                    {/*        <span className="flex items-center gap-2 font-Yekan-Medium text-base">*/}
                    {/*            <SortIcon className="w-5 h-5"/> مرتب سازی*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*    <SortSection/>*/}
                    {/*    <span className="hidden xl:block font-Yekan-Medium text-sm text-[#404040]">*/}
                    {/*        {filterProduct.length} محصول موجود است*/}
                    {/*    </span>*/}
                    {/*</div>*/}

                    {
                        loading && <SectionTitle title={allProduct[0]?.category.displayName}/>
                    }
                    <div className={`grid gap-4 sm:gap-6 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>

                        {
                            loading ?
                                (paginatedProducts.length > 0
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
                                : <EmptyProductsMessage
                                    message={"محصولی برای این دسته بندی یافت نشد "}/>) : Array(4).fill(0).map((_, id) =>
                                <SkeletonCard key={id}/>)
                        }


                    </div>
                </section>
            </div>

            {loading && (
                <PaginationComponent
                    allProduct={filterProduct}
                    setPaginatedProducts={setPaginatedProducts}
                    itemCount={8}
                    currentPageNumber={1}

                />
            )}
        </>);
}

export default CategoryWrapper;