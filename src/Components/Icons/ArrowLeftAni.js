import React from 'react';

function ArrowLeftAni({className}) {
    return (
        <svg
            className={className}
            id="arrow-left-ani"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            fill="none"
        >
            <path
                d="M13.5 9.00004V11.0025C13.5 13.485 11.7375 14.505 9.58501 13.26L7.85251 12.255L6.12001 11.25C3.96751 10.005 3.96751 7.97254 6.12001 6.72754L7.85251 5.72254L9.58501 4.71754C11.7375 3.49504 13.5 4.50754 13.5 6.99754V9.00004Z"
                fill="#5EB5F8"
                stroke="#5EB5F8"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>    );
}

export default ArrowLeftAni;