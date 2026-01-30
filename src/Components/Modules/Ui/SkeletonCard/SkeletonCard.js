import React from 'react';

function SkeletonCard(props) {
    return (

        <div
            className="flex sm:flex-col sm:justify-between gap-3 sm:gap-0 bg-lightGray2 p-3.5 rounded-xl h-[118px] sm:h-auto animate-pulse">
            {/* Image Skeleton */}
            <div className="w-32 sm:h-52 lg:h-40 xl:h-[218px] sm:w-auto">
                <div className="w-full h-full rounded-lg shadow-md border border-stone-300 bg-stone-200"/>
            </div>

            {/* Title Skeleton (sm) */}
            <div className="hidden sm:block mb-3 mt-4">
                <div className="h-4 w-3/4 rounded bg-stone-200"/>
            </div>

            <div className="bg-white rounded-lg p-2 w-full">
                {/* Title Skeleton (mobile) */}
                <div className="sm:hidden mb-4">
                    <div className="h-4 w-2/3 rounded bg-stone-200"/>
                </div>

                <div className="flex items-center justify-between h-12">
                    {/* Price Skeleton */}
                    <div className="space-y-2">
                        <div className="h-3 w-24 rounded bg-stone-200"/>
                        <div className="h-4 w-32 rounded bg-stone-200"/>
                    </div>

                    {/* Discount / Icon Skeleton */}
                    <div className="bg-stone-200 py-2 px-2.5 rounded-lg w-9 h-9"/>
                </div>
            </div>
        </div>
    );
}

export default SkeletonCard;