import React from 'react';

function ArticleItem(props) {
    return (
        <div>
            <div className=" overflow-hidden rounded-xl">
                <img className="w-full h-full rounded-xl " src="/images/article/a1.png" alt="article image"/>
            </div>
            <a href="#"
               className="inline-block font-Yekan-Medium text-lg mb-2 mt-3.5 xs:mb-1 lg:mb-2 xs:text-base lg:text-lg line-clamp-1">
                مزایای خرید اینترنتی
                لوازم تحریر</a>
            <div className="flex items-center justify-between">
                <p className="font-Yekan-Regula text-xs lg:text-sm text-lightGray">دسته بندی:
                    آموزشی</p>
                <a className="inline-block" href="#">
                    <svg className="inline-block w-5 h-5 xs:w-4 xs:h-4 lg:w-5 lg:h-5 text-lightBlue cursor-pointer">
                        <use xlinkHref="#arrow-left"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default ArticleItem;