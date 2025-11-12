import React from 'react';

function MobileMenu({menuItem}) {
    return (
        <ul className="sm:hidden  flex flex-col gap-4 sm:gap-6 lg:gap-9 pt-4 border-t border-r-white ">
            <li className="  text-base text-secondPrimaryColor  ">
                <a href="/">صفحه اصلی </a>
            </li>
            {
                menuItem.data?.map(item => (
                    <li key={item._id} className="  text-base text-secondPrimaryColor">
                        <a href={`/category/${item.name}`}>  {item.displayName}  </a>
                    </li>
                ))
            }
        </ul>

    );
}

export default MobileMenu;