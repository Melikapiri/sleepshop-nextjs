import React from 'react';

function DesktopMenu() {
    return (
        <ul className="hidden sm:flex items-center sm:gap-6 lg:gap-9 child:tracking-tight font-Yekan-Medium">
            <li className="text-base text-dark ">
                <a href="#">صفحه اصلی </a>
            </li>
            <li className="text-base text-lightGray">
                <a href="#">روتختی ها </a>
            </li>
            <li className="text-base text-lightGray">
                <a href="#">بالش ها </a>
            </li>
            <li className="text-base text-lightGray">
                <a href="#">تشک ها </a>
            </li>
            <li className="text-base text-lightGray">
                <a href="#">درباره ما </a>
            </li>
        </ul>

    );
}

export default DesktopMenu;