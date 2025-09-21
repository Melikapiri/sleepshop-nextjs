import connectToDB from "@/configs/db";
import React from 'react';
import Product from "@/models/Product";
import Category from "@/models/Category";
import FilterSideBarProduct from "@/src/components/Templates/Products/FilterSideBarProduct";
import SortIcon from "@/src/components/Icons/SortIcon";
import ChevronLeft from "@/src/components/Icons/ChevronLeft";
import OfferCard from "@/src/components/modules/OfferCard/OfferCard";

async function Page(props) {
    await connectToDB()
    const products = await Product.find({}).select('-__v');
    const categories = await Category.find({}).select('-__v');
    console.log("category =>>>>", categories)
    console.log("products =>>>>", products)


    return (
        <div className="  my-10 ">
            <div className=" flex items-start  flex-col lg:flex-row container xl:max-w-[94.52%] mx-auto gap-4 ">
                <FilterSideBarProduct categories={JSON.parse(JSON.stringify(categories))}/>
                <section className="flex flex-col w-full  gap-4">

                    <div
                        className="hidden md:flex items-center justify-between gap-x-6 h-14 px-8   bg-lightGray3 rounded-2xl ">
                        <div className="flex items-center gap-x-2">
                            <span className="flex items-center gap-2 font-Yekan-Medium text-base  ">
                                <SortIcon className="w-5 h-5"/>مرتب سازی  </span>
                        </div>
                        <div
                            className=" flex items-center divide-x-reverse divide-x-2   divide-[#DFDFDF] gap-4 font-Yekan-Medium text-sm text-[#404040] h-full">
                            <a
                                href="#"
                                // onClick={() => setArchiveSort("default", "همه دوره‌ها")}
                                data-id="default"
                                className=" sort-btn sort-btn--active px-4 "
                                role="button"
                            >
                                جدیدترین
                            </a>
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
                        </div>

                        <span
                            className="hidden xl:block font-Yekan-Medium text-sm text-[#404040]"> 3150 محصول موجود است</span>
                    </div>

                    <div
                        className="grid gap-4 sm:gap-6 xl:gap-10 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.slice(0,8).map(product => <OfferCard products={JSON.parse(JSON.stringify(product))}
                                                            key={product.id}/>)}
                        {/*<OfferCard/>*/}
                        {/*<OfferCard/>*/}
                        {/*<OfferCard/>*/}
                        {/*<OfferCard/>*/}
                        {/*<OfferCard/>*/}
                        {/*<OfferCard/>*/}
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
        </div>
    );
}

export default Page;