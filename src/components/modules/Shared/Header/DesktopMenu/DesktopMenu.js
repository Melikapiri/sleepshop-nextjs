import React from 'react';

function DesktopMenu({data}) {
    return (
        <ul className="hidden sm:flex items-center sm:gap-6 lg:gap-9 child:tracking-tight font-Yekan-Medium">
            <li className="text-base text-dark ">
                <a href="/">صفحه اصلی </a>
            </li>

            {
                data?.map(item => (
                    <li key={item._id} className="text-base text-lightGray">
                        <a href={`/category/${item.name}`}>{item.displayName}  </a>
                    </li>
                ))
            }
            {/*<li className="text-base text-lightGray">*/}
            {/*    <a href="#">روتختی ها </a>*/}
            {/*</li>*/}
            {/*<li className="text-base text-lightGray">*/}
            {/*    <a href="#">بالش ها </a>*/}
            {/*</li>*/}
            {/*<li className="text-base text-lightGray">*/}
            {/*    <a href="#">تشک ها </a>*/}
            {/*</li>*/}
            <li className="text-base text-lightGray">
                <a href="#">درباره ما </a>
            </li>
        </ul>

    );
}

export default DesktopMenu;