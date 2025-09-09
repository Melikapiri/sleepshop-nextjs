import React from 'react';

function SectionTitle({title}) {
    return (
        <div
            className="relative text-center w-[221px] h-[46px] sm:w-full sm:h-[48px] mx-auto flex items-center justify-center mt-4 mb-8">
            <svg className="absolute left-0 right-0 w-full h-full" viewBox="0 0 254 48" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M125.955 5.5L24.5579 1.56511C15.6814 1.22064 7.36668 6.16688 3.33815 14.0841C0.0178452 20.6094 0.0581267 28.4225 3.51154 34.8783C7.48946 42.3147 15.3081 46.8855 23.7396 46.7037L125.955 44.5L229.772 46.6969C238.502 46.8816 246.541 41.9693 250.36 34.1169C253.296 28.0781 253.332 20.9681 250.512 14.8736C246.655 6.5337 238.115 1.22779 228.932 1.57754L125.955 5.5Z"
                    fill="#EDF6FD" stroke="#5EB5F8" strokeWidth="1.2"></path>
            </svg>

            <h3 className="relative  mx-auto text-xl sm:text-2xl font-Modam-Regular ">
                {title}
            </h3>
        </div>);
}

export default SectionTitle;