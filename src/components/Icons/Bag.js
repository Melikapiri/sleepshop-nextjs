import React from 'react';

function Bag({className}) {
    return (
        <svg
            className={className}
            id="bag"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
        >
            <path
                d="M7.5 8.17001V7.20001C7.5 4.95001 9.31 2.74001 11.56 2.53001C14.24 2.27001 16.5 4.38001 16.5 7.01001V8.39001"
                stroke="currentColor"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.00001 22.5H15C19.02 22.5 19.74 20.89 19.95 18.93L20.7 12.93C20.97 10.49 20.27 8.5 16 8.5H8.00001C3.73001 8.5 3.03001 10.49 3.30001 12.93L4.05001 18.93C4.26001 20.89 4.98001 22.5 9.00001 22.5Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.4955 12.5H15.5045"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.49451 12.5H8.50349"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Bag;