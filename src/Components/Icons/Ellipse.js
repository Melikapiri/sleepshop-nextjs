import React from 'react';

function Ellipse({className}) {
    return (
        <svg
            className={className}
            id="ellipse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 42 17"
            fill="none"
        >
            <path
                d="M42 0.5C42 4.87607 39.7875 9.07291 35.8492 12.1673C31.911 15.2616 26.5695 17 21 17C15.4305 17 10.089 15.2616 6.15076 12.1673C2.2125 9.07291 8.40978e-07 4.87607 0 0.500002H1.39617C1.39617 4.58513 3.46157 8.50295 7.138 11.3916C10.8144 14.2802 15.8007 15.903 21 15.903C26.1993 15.903 31.1856 14.2802 34.862 11.3916C38.5384 8.50295 40.6038 4.58513 40.6038 0.5H42Z"
                fill="#D9D9D9"
            />
        </svg>
    );
}

export default Ellipse;