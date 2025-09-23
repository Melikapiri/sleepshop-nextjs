"use client";
import React, { useState, useEffect } from "react";
import ChevronLeft from "@/src/components/Icons/ChevronLeft";

function PaginationComponent({ allProduct, setPaginatedProducts, itemCount, currentPageNumber }) {
    const [currentPage, setCurrentPage] = useState(currentPageNumber || 1);

    const totalPages = Math.ceil(allProduct.length / itemCount) || 1;

    useEffect(() => {
        const start = (currentPage - 1) * itemCount;
        const end = currentPage * itemCount;
        const resultPagination = allProduct.slice(start, end);

        setPaginatedProducts(resultPagination);
    }, [allProduct, currentPage, itemCount, setPaginatedProducts]);

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    if (!allProduct.length) return null;

    return (
        <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex justify-center items-center gap-4">
                <button
                    className="rounded-full border border-slate-300 p-1.5 shadow-sm hover:shadow-lg"
                    type="button"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="w-4 h-4 rotate-180" />
                </button>

                <b className="text-slate-600">
                    {currentPage} از {totalPages}
                </b>

                <button
                    className="rounded-full border border-slate-300 p-1.5 shadow-sm hover:shadow-lg"
                    type="button"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default PaginationComponent;
