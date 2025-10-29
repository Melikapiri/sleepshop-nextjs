"use client"
import React, {useState} from 'react';

function PopularCategories({title, categoryId, changeCategory}) {
    return (
        <div
            onClick={() => changeCategory(categoryId)}
            className="font-Yekan-Medium bg-secondPrimaryColor text-base text-lightGray w-[168px] py-2 text-center rounded-lg hover:border hover:border-lightBlue transition-all cursor-pointer">
            {title}
        </div>);
}

export default PopularCategories;