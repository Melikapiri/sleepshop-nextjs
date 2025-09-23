"use client";
import React, {useState, useEffect} from 'react';
import ChevronLeft from "@/src/components/Icons/ChevronLeft";

function PaginationComponent({originalProducts, allProduct, setAllProduct, itemCount, currentPageNumber,productCount}) {


    const [currentPage, setCurrentPage] = useState(currentPageNumber);

    const totalPages = Math.ceil(originalProducts.length / itemCount);

    const indexOfFirstProduct = (currentPage - 1) * itemCount;
    const indexOfLastProduct = currentPage * itemCount;

    useEffect(() => {
        const resultPagination = originalProducts.slice(indexOfFirstProduct, indexOfLastProduct);
        setAllProduct(resultPagination);
    }, [originalProducts, currentPage, itemCount,productCount]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    return originalProducts.length > 0 && (
        <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex justify-center items-center gap-4">
                <button
                    className="rounded-full border border-slate-300 p-1.5 shadow-sm hover:shadow-lg"
                    type="button"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="w-4 h-4 rotate-180"/>
                </button>

                <b className="text-slate-600">
                    {currentPage} از {totalPages || 1}
                </b>

                <button
                    className="rounded-full border border-slate-300 p-1.5 shadow-sm hover:shadow-lg"
                    type="button"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <ChevronLeft className="w-4 h-4"/>
                </button>
            </div>
        </div>
    );
}

export default PaginationComponent;
