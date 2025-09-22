"use client";
import React, { useState, useEffect } from 'react';
import ChevronLeft from "@/src/components/Icons/ChevronLeft";

function PaginationComponent({ allProduct, itemCount, currentPageNumber, setAllProduct }) {
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const totalPage = Math.ceil(allProduct.length / itemCount);
    const indexOfFirstProduct = (currentPage - 1) * itemCount;
    const indexOfLastProduct = currentPage * itemCount - 1;

    useEffect(() => {
        const resultPagination = allProduct.slice(indexOfFirstProduct, indexOfLastProduct + 1);
        setAllProduct(resultPagination);
        console.log("Pagination result:", resultPagination);
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center items-center gap-4 mt-6">
            <button
                className="rounded-full border border-slate-300 p-1.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                <ChevronLeft className="w-4 h-4 rotate-180" />
            </button>
            <b className="text-slate-600">
                {currentPage} از {totalPage}
            </b>
            <button
                className="rounded-full border border-slate-300 p-1.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={handleNextPage}
                disabled={currentPage === totalPage}
            >
                <ChevronLeft className="w-4 h-4" />
            </button>
        </div>
    );
}

export default PaginationComponent;