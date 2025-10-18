import React from 'react';

function SortIcon({className}) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"
             fill="none">
            <path d="M2.5 5.83325H17.5" stroke="#14151B" strokeWidth="1.25" strokeLinecap="round"/>
            <path d="M5 10H15" stroke="#14151B" strokeWidth="1.25" strokeLinecap="round"/>
            <path d="M8.33325 14.1667H11.6666" stroke="#191D31" strokeWidth="1.25" strokeLinecap="round"/>
        </svg>
    );
}

export default SortIcon;