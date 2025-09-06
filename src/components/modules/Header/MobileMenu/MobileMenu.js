import React from 'react';

function MobileMenu() {
    return (
        <ul className="sm:hidden  flex flex-col gap-4 sm:gap-6 lg:gap-9 pt-4 border-t border-r-white ">
            <li className="  text-base text-secondPrimaryColor  ">
                <a href="#">صفحه اصلی </a>
            </li>
            <li className="  text-base text-secondPrimaryColor">
                <a href="#">روتختی ها </a>
            </li>
            <li className="  text-base text-secondPrimaryColor">
                <a href="#">بالش ها </a>
            </li>
            <li className="  text-base text-secondPrimaryColor">
                <a href="#">تشک ها </a>
            </li>
            <li className="  text-base text-secondPrimaryColor">
                <a href="#">درباره ما </a>
            </li>
        </ul>

    );
}

export default MobileMenu;