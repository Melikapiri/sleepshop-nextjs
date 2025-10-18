import React from 'react';

function Logo({className}) {
    return (
        <svg className={className}
             id="logo"
             xmlns="http://www.w3.org/2000/svg"
             width={49}
             height={45}
             viewBox="0 0 49 45"
             fill="none"
        >
            <path
                d="M49 16.5C49 25.6127 41.6127 33 32.5 33C23.3873 33 16 25.6127 16 16.5C16 7.3873 23.3873 0 32.5 0C41.6127 0 49 7.3873 49 16.5Z"
                fill="#363636"
            />
            <circle cx={15} cy={30} r={15} fill="#5EB5F8"/>
        </svg>);
}

export default Logo;