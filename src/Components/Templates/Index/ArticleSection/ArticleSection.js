import React from 'react';
import SectionTitle from "@/src/Components/Modules/Ui/SectionTitle/SectionTitle";
import ArticleItem from "@/src/Components/Templates/Index/ArticleSection/ArticleItem";

function ArticleSection(props) {
    return (
        <section className="mb-12 sm:mb-20">
            <div className="container">
                <div>
                    <SectionTitle title="وبلاگ و مقالات آرامیس"/>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-7 md:gap-11 lg:gap-[76px]">
                        <ArticleItem/>
                        <ArticleItem/>
                        <ArticleItem/>
                    </div>
                    <div className=" flex items-center justify-center mt-8 md:mt-12">
                        <a className=" inline-flex items-center py-2 px-3 mx-auto bg-lightBlue text-white rounded-lg gap-2 font-Yekan-Medium text-base"
                           href="#">مقالات بیشتر
                            <svg className="w-4 h-4">
                                <use xlinkHref="#chevron-left"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticleSection;