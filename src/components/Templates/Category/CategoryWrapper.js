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

function CategoryWrapper(props) {
    const [pathname, setPathname] = useState(usePathname().split("/"))
    const [filterProduct, setFilterProduct] = useState([])


    const {
        allProduct,              // Filtered list
        paginatedProducts,       // Paginated list
        setPaginatedProducts,
        loading,
    } = useFilterProduct();

    const [category, setCategory] = useState([]);
    const [categoryName, setCategoryName] = useState([]);

    const findCategoryName = async () => {
        const res = await fetch(`/api/categories`)
        const data = await res.json()
        console.log(data)
        setCategory(data)
    }


    useEffect(() => {
        console.log(category)
        setCategoryName(category.data?.find(item => item.name === pathname[pathname.length - 1]).displayName)
    }, [category]);

    useEffect(() => {
        console.log("categoryName => ", categoryName)
    }, [categoryName]);
    const filterProductHandler = async () => {
        const filtered = allProduct.filter(product => product.category.name === pathname[pathname.length - 1]);
        setFilterProduct(filtered);

    }


    useEffect(() => {
        findCategoryName()
        filterProductHandler()
    }, [pathname]);

    useEffect(() => {
        filterProductHandler()
    }, [allProduct]);


    return (
        <>
            <div className="flex items-start flex-col lg:flex-row container xl:max-w-[94.52%] mx-auto gap-4 lg:gap-6">

                <section className="flex flex-col w-full gap-4 lg:gap-6">
                    {
                        loading && <SectionTitle title={categoryName}/>
                    }
                    <div
                        className={`grid gap-4 sm:gap-6 grid-cols-1${!loading && `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`} ${paginatedProducts.length === 0 ? `grid-cols-1` : `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}  `}>

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
                                    : <motion.div initial={{opacity: 0, y: 10}}
                                                  animate={{opacity: 1, y: 0}}
                                                  transition={{ease: "easeOut", duration: 0.3}}>
                                        <EmptyProductsMessage
                                            message={"محصولی برای این دسته بندی یافت نشد :( "}/>
                                    </motion.div>) : Array(4).fill(0).map((_, id) =>
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