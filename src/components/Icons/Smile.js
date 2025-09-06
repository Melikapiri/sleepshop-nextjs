import React from 'react';

function Smile({className}) {
    return (
        <svg
            className={className}
            id="smile"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 35 35"
            fill="none"
        >
            <path
                d="M27.8104 7.21878C33.6 13.0084 33.4979 22.4583 27.5187 28.1312C21.9916 33.3666 13.0229 33.3666 7.48124 28.1312C1.48749 22.4583 1.38538 13.0084 7.18955 7.21878C12.8771 1.51669 22.1229 1.51669 27.8104 7.21878Z"
                stroke="#121111"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23.1 23.4354C20.0083 26.3521 14.9917 26.3521 11.9146 23.4354"
                stroke="#5EB5F8"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Smile;