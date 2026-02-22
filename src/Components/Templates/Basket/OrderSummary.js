import React, {useState, useEffect} from "react";

const OrderSummary = ({cartOriginalPrice, cartDiscountedPrice, saving}) => {

    return (
        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div
                className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-sm font-bold font-Yekan-Regula text-gray-500 ">
                                قیمت کالاها:
                            </dt>
                            <dd className="text-sm font-medium text-gray-900 ">{cartOriginalPrice?.toLocaleString()} تومان</dd>
                        </dl>
                        <dl className="flex items-center justify-between gap-4">
                            <dt className=" text-sm font-bold text-gray-800 ">جمع سبد خرید:</dt>
                            <dd className="text-base  text-gray-800">{cartDiscountedPrice?.toLocaleString()} تومان</dd>
                        </dl>
                        {saving > 0 && (<dl className="flex items-center justify-between gap-4">
                            <dt className="text-sm font-bold text-green-500 dark:text-gray-400">
                                سود شما :
                            </dt>
                            <dd className="text-sm font-medium text-green-900 ">{saving?.toLocaleString()} تومان</dd>
                        </dl>)}
                        <dl className="flex items-center justify-between gap-4">
                            <dt className=" text-sm font-bold text-gray-500 ">هزینه پیک:</dt>
                            <dd className="text-sm  text-gray-800">80,000 تومان</dd>
                        </dl>

                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt className="text-base font-bold text-gray-500 ">مجموع</dt>
                        <dd className="text-base font-bold text-gray-900 ">{(cartDiscountedPrice+80000).toLocaleString()} تومان </dd>
                    </dl>
                </div>

            </div>

        </div>

    );
};

export default OrderSummary;