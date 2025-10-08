import React from 'react';

function Crown({className}) {
    return (
        <svg
            id="crown"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="none"
            className={className}
        >
            <path
                d="M2.5 19.1125V7.13752C2.5 5.47502 3.4625 5.07502 4.6375 6.25002L7.875 9.48752C8.3625 9.97502 9.1625 9.97502 9.6375 9.48752L14.1125 5.00002C14.6 4.51252 15.4 4.51252 15.875 5.00002L20.3625 9.48752C20.85 9.97502 21.65 9.97502 22.125 9.48752L25.3625 6.25002C26.5375 5.07502 27.5 5.47502 27.5 7.13752V19.125C27.5 22.875 25 25.375 21.25 25.375H8.75C5.3 25.3625 2.5 22.5625 2.5 19.1125Z"
                stroke="#1F2732"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Crown;