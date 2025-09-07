import React from 'react';

function ServiceItem({icon, title}) {


    return (
        <div className="flex flex-col gap-3">
            <div>
                {icon}
            </div>
            <h3 className="font-Yekan-bold text-base">{title}</h3>
            <p className="font-Yekan-Regula text-xs/[22px] line-clamp-3 text-lightGray">
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است
            </p>
        </div>
    );
}

export default ServiceItem;