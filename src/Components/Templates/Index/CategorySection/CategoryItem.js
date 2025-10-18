

import React, from 'react';

 function CategoryItem({title, description, image,param,id}) {

    return (
        <div className="flex flex-col items-center sm:items-stretch gap-3   ">



            <div
                className="relative overflow-hidden flex items-center justify-between w-20 h-20 sm:w-40 sm:h-40 md:w-auto md:h-auto p-2 md:p-7 bg-secondPrimaryColor rounded-[20px]">
                <div
                    className=" absolute bottom-4 -left-[72px] sm:left-0 sm:-right-8 sm:bottom-9 sm:mx-auto md:mx-0  md:right-auto md:-left-32 md:-top-[60px] z-10 w-[228px] h-[219px] rounded-full  bg-[#CAE8FF]   "/>
                <div className="hidden md:flex flex-col">
                    <a  href={`/category/${param}`} className="inline-flex items-center gap-1">
                        <h3 className="font-Yekan-bold text-xl/[34px] ">{title}</h3>
                        <svg className="w-4 h-4">
                            <use xlinkHref="#arrow-left-ani"/>
                        </svg>
                    </a>
                    <p className="text-lightGray font-Yekan-Light text-sm">{description}</p>
                </div>
                <div
                    className="absolute mx-auto md:mx-0 z-10 left-0 right-0 md:right-auto md:left-7 w-16 sm:w-24  h-auto">
                    <img className="block mx-auto md:mx-0 w-full h-full"
                         src={image} alt="Category image"/>
                </div>
            </div>
            <a href={`/category/${param}`} className="md:hidden font-Yekan-Medium text-center mx-auto text-sm sm:text-xl  ">
                {title}</a>
        </div>
    );
}

export default CategoryItem;