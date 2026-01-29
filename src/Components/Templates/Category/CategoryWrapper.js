"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import OfferCard from "@/src/Components/Modules/Ui/OfferCard/OfferCard";
import SkeletonCard from "@/src/Components/Modules/Ui/SkeletonCard/SkeletonCard";
import PaginationComponent from "@/src/Components/Modules/Features/PaginationComponent/PaginationComponent";
import EmptyProductsMessage from "@/src/Components/Modules/Ui/EmptyProductsMessage/EmptyProductsMessage";
import Breadcrumb from "@/src/Components/Modules/Ui/Breadcrumb/Breadcrumb";

function CategoryWrapper({ categoryName, products }) {
    const [paginatedProducts, setPaginatedProducts] = useState(products);
    const loading = products.length > 0;

    return (
        <>
            <div className="flex items-start flex-col lg:flex-row container xl:max-w-[94.52%] mx-auto gap-4">
                <section className="flex flex-col w-full">
                    <Breadcrumb
                        items={[
                            { name: "صفحه اصلی", href: "/" },
                            { name: "دسته‌بندی", href: "/products" },
                            { name: categoryName },
                        ]}
                    />

                    <div
                        className={`grid gap-4 sm:gap-6 grid-cols-1${
                            !loading && `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
                        } ${paginatedProducts.length === 0 ? `grid-cols-1` : `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}`}
                    >
                        {loading ? (
                            paginatedProducts.length > 0 ? (
                                paginatedProducts.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ ease: "easeOut", duration: 0.3 }}
                                    >
                                        <OfferCard products={product} />
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ease: "easeOut", duration: 0.3 }}
                                >
                                    <EmptyProductsMessage message={"محصولی برای این دسته بندی یافت نشد :( "} />
                                </motion.div>
                            )
                        ) : (
                            Array(4)
                                .fill(0)
                                .map((_, id) => <SkeletonCard key={id} />)
                        )}
                    </div>
                </section>
            </div>

            {loading && (
                <PaginationComponent
                    allProduct={products}
                    setPaginatedProducts={setPaginatedProducts}
                    itemCount={8}
                    currentPageNumber={1}
                />
            )}
        </>
    );
}

export default CategoryWrapper;
