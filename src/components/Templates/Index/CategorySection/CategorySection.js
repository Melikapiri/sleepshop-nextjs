import React from 'react';
import SectionTitle from "@/src/components/modules/SectionTitle/SectionTitle";
import CategoryItem from "@/src/components/Templates/Index/CategorySection/CategoryItem";

function CategorySection(props) {

    const categoryArray = [
        {id: 1, image: '/images/category/toshak1.png', title: 'تشک ', description: "بیش از ۱۰۰۰ مدل تشک"},
        {id: 2, image: '/images/category/rotakhti.png', title: 'روتختی ', description: "بیش از ۱۰۰۰ مدل روتختی"},
        {id: 3, image: '/images/category/balesht.png', title: 'بالشت ', description: "بیش از ۱۰۰۰ مدل بالشت"},
        {id: 4, image: '/images/category/hole.png', title: ' حوله تنپوش', description: "بیش از ۱۰۰۰ مدل حوله"},
        {id: 5, image: '/images/category/shal-mobl.png', title: ' شال مبل', description: "بیش از ۱۰۰۰ مدل شال مبل"},
        {id: 6, image: '/images/category/toshak1.png', title: ' محافظ تشک', description: "بیش از ۱۰۰۰ مدل محافظ تشک"},
    ]


    return (
        <section className="category-products mb-20">
            <div className="container">

                <SectionTitle title="دسته بندی محصولات"/>


                <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-10">


                    {
                        categoryArray.map(category => (
                            <CategoryItem key={category.id} image={category.image} title={category.title}
                                          description={category.description}/>
                        ))
                    }

                    {/*<div className="flex flex-col items-center sm:items-stretch gap-3   ">*/}
                    {/*    <div*/}
                    {/*        className="relative overflow-hidden flex items-center justify-between w-20 h-20 sm:w-40 sm:h-40 md:w-auto md:h-auto p-2 md:p-7 bg-secondPrimaryColor rounded-[20px]">*/}
                    {/*        <div*/}
                    {/*            className=" absolute bottom-4 -left-[72px] sm:left-0 sm:-right-8 sm:bottom-9 sm:mx-auto md:mx-0  md:right-auto md:-left-32 md:-top-[60px] z-10 w-[228px] h-[219px] rounded-full  bg-[#CAE8FF]   "/>*/}
                    {/*        <div className="hidden md:flex flex-col">*/}
                    {/*            <a href="#" className="inline-flex items-center gap-1">*/}
                    {/*                <h3 className="font-Yekan-bold text-xl/[34px] ">تشک ها</h3>*/}
                    {/*                <svg className="w-4 h-4">*/}
                    {/*                    <use xlinkHref="#arrow-left-ani"/>*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <p className="text-lightGray font-Yekan-Light text-sm">بیش از ۱۰۰۰ مدل تشک</p>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            className="absolute mx-auto md:mx-0 z-10 left-0 right-0 md:right-auto md:left-7 w-16 sm:w-24  h-auto">*/}
                    {/*            <img className="block mx-auto md:mx-0 w-full h-full"*/}
                    {/*                 src="/images/category/toshak1.png" alt="Category image"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <h3 className="md:hidden font-Yekan-Medium text-center mx-auto text-sm sm:text-xl  ">تشک*/}
                    {/*        ها</h3>*/}
                    {/*</div>*/}


                    {/*<div className="flex flex-col items-center sm:items-stretch gap-3   ">*/}
                    {/*    <div*/}
                    {/*        className="relative overflow-hidden flex items-center justify-between w-20 h-20 sm:w-40 sm:h-40 md:w-auto md:h-auto p-2 md:p-7 bg-secondPrimaryColor rounded-[20px]">*/}
                    {/*        <div*/}
                    {/*            className=" absolute bottom-4 -left-[72px] sm:left-0 sm:-right-8 sm:bottom-9 sm:mx-auto md:mx-0  md:right-auto md:-left-32 md:-top-[60px] z-10 w-[228px] h-[219px] rounded-full  bg-[#CAE8FF]   "/>*/}
                    {/*        <div className="hidden md:flex flex-col">*/}
                    {/*            <a href="#" className="inline-flex items-center gap-1">*/}
                    {/*                <h3 className="font-Yekan-bold text-xl/[34px] ">روتختی ها</h3>*/}
                    {/*                <svg className="w-4 h-4">*/}
                    {/*                    <use xlinkHref="#arrow-left-ani"/>*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <p className="text-lightGray font-Yekan-Light text-sm">بیش از ۱۰۰۰ مدل روتختی</p>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            className="absolute mx-auto md:mx-0 z-10 left-0 right-0 md:right-auto md:left-7 w-16 sm:w-24  h-auto">*/}
                    {/*            <img className="block mx-auto md:mx-0 w-full h-full"*/}
                    {/*                 src="/images/category/rotakhti.png" alt="Category image"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <h3 className="md:hidden font-Yekan-Medium text-center mx-auto text-sm sm:text-xl  ">روتختی*/}
                    {/*        ها</h3>*/}
                    {/*</div>*/}

                    {/*<div className="flex flex-col items-center sm:items-stretch gap-3   ">*/}
                    {/*    <div*/}
                    {/*        className="relative overflow-hidden flex items-center justify-between w-20 h-20 sm:w-40 sm:h-40 md:w-auto md:h-auto p-2 md:p-7 bg-secondPrimaryColor rounded-[20px]">*/}
                    {/*        <div*/}
                    {/*            className=" absolute bottom-4 -left-[72px] sm:left-0 sm:-right-8 sm:bottom-9 sm:mx-auto md:mx-0  md:right-auto md:-left-32 md:-top-[60px] z-10 w-[228px] h-[219px] rounded-full  bg-[#CAE8FF]   "/>*/}
                    {/*        <div className="hidden md:flex flex-col">*/}
                    {/*            <a href="#" className="inline-flex items-center gap-1">*/}
                    {/*                <h3 className="font-Yekan-bold text-xl/[34px] ">بالشت ها</h3>*/}
                    {/*                <svg className="w-4 h-4">*/}
                    {/*                    <use xlinkHref="#arrow-left-ani"/>*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <p className="text-lightGray font-Yekan-Light text-sm">بیش از ۱۰۰۰ مدل بالشت</p>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            className="absolute mx-auto md:mx-0 z-10 left-0 right-0 md:right-auto md:left-7 w-16 sm:w-24  h-auto">*/}
                    {/*            <img className="block mx-auto md:mx-0 w-full h-full"*/}
                    {/*                 src="/images/category/balesht.png" alt="Category image"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <h3 className="md:hidden font-Yekan-Medium text-center mx-auto text-sm sm:text-xl  ">بالشت*/}
                    {/*        ها</h3>*/}
                    {/*</div>*/}

                    {/*<div className="flex flex-col items-center sm:items-stretch gap-3   ">*/}
                    {/*    <div*/}
                    {/*        className="relative overflow-hidden flex items-center justify-between w-20 h-20 sm:w-40 sm:h-40 md:w-auto md:h-auto p-2 md:p-7 bg-secondPrimaryColor rounded-[20px]">*/}
                    {/*        <div*/}
                    {/*            className=" absolute bottom-4 -left-[72px] sm:left-0 sm:-right-8 sm:bottom-9 sm:mx-auto md:mx-0  md:right-auto md:-left-32 md:-top-[60px] z-10 w-[228px] h-[219px] rounded-full  bg-[#CAE8FF]   "/>*/}
                    {/*        <div className="hidden md:flex flex-col">*/}
                    {/*            <a href="#" className="inline-flex items-center gap-1">*/}
                    {/*                <h3 className="font-Yekan-bold text-xl/[34px] ">حوله تنپوش</h3>*/}
                    {/*                <svg className="w-4 h-4">*/}
                    {/*                    <use xlinkHref="#arrow-left-ani"/>*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <p className="text-lightGray font-Yekan-Light text-sm">بیش از ۱۰۰۰ مدل حوله*/}
                    {/*                تنپوش</p>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            className="absolute mx-auto md:mx-0 z-10 left-0 right-0 md:right-auto md:left-7 w-16 sm:w-24  h-auto">*/}
                    {/*            <img className="block mx-auto md:mx-0 w-full h-full"*/}
                    {/*                 src="/images/category/hole.png" alt="Category image"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <h3 className="md:hidden font-Yekan-Medium text-center mx-auto text-sm sm:text-xl  ">حوله*/}
                    {/*        تنپوش</h3>*/}
                    {/*</div>*/}

                    {/*<div className="flex flex-col items-center sm:items-stretch gap-3   ">*/}
                    {/*    <div*/}
                    {/*        className="relative overflow-hidden flex items-center justify-between w-20 h-20 sm:w-40 sm:h-40 md:w-auto md:h-auto p-2 md:p-7 bg-secondPrimaryColor rounded-[20px]">*/}
                    {/*        <div*/}
                    {/*            className=" absolute bottom-4 -left-[72px] sm:left-0 sm:-right-8 sm:bottom-9 sm:mx-auto md:mx-0  md:right-auto md:-left-32 md:-top-[60px] z-10 w-[228px] h-[219px] rounded-full  bg-[#CAE8FF]   "/>*/}
                    {/*        <div className="hidden md:flex flex-col">*/}
                    {/*            <a href="#" className="inline-flex items-center gap-1">*/}
                    {/*                <h3 className="font-Yekan-bold text-xl/[34px] ">شال مبل</h3>*/}
                    {/*                <svg className="w-4 h-4">*/}
                    {/*                    <use xlinkHref="#arrow-left-ani"/>*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <p className="text-lightGray font-Yekan-Light text-sm">بیش از ۱۰۰۰ مدل شال مبل</p>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            className="absolute mx-auto md:mx-0 z-10 left-0 right-0 md:right-auto md:left-7 w-16 sm:w-24  h-auto">*/}
                    {/*            <img className="block mx-auto md:mx-0 w-full h-full"*/}
                    {/*                 src="/images/category/shal-mobl.png" alt="Category image"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <h3 className="md:hidden font-Yekan-Medium text-center mx-auto text-sm sm:text-xl  ">شال*/}
                    {/*        مبل</h3>*/}
                    {/*</div>*/}
                    {/*<div className="flex flex-col items-center sm:items-stretch gap-3   ">*/}
                    {/*    <div*/}
                    {/*        className="relative overflow-hidden flex items-center justify-between w-20 h-20 sm:w-40 sm:h-40 md:w-auto md:h-auto p-2 md:p-7 bg-secondPrimaryColor rounded-[20px]">*/}
                    {/*        <div*/}
                    {/*            className=" absolute bottom-4 -left-[72px] sm:left-0 sm:-right-8 sm:bottom-9 sm:mx-auto md:mx-0  md:right-auto md:-left-32 md:-top-[60px] z-10 w-[228px] h-[219px] rounded-full  bg-[#CAE8FF]   "/>*/}
                    {/*        <div className="hidden md:flex flex-col">*/}
                    {/*            <a href="#" className="inline-flex items-center gap-1">*/}
                    {/*                <h3 className="font-Yekan-bold text-xl/[34px] ">تشک ها</h3>*/}
                    {/*                <svg className="w-4 h-4">*/}
                    {/*                    <use xlinkHref="#arrow-left-ani"/>*/}
                    {/*                </svg>*/}
                    {/*            </a>*/}
                    {/*            <p className="text-lightGray font-Yekan-Light text-sm">بیش از ۱۰۰۰ مدل محافظ تشک</p>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            className="absolute mx-auto md:mx-0 z-10 left-0 right-0 md:right-auto md:left-7 w-16 sm:w-24 h-auto">*/}
                    {/*            <img className="block mx-auto md:mx-0 w-full h-full"*/}
                    {/*                 src="/images/category/mohafez-toshak.png" alt="Category image"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <h3 className="md:hidden font-Yekan-Medium text-center mx-auto text-sm sm:text-xl  ">محافظ*/}
                    {/*        تشک</h3>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
}

export default CategorySection;