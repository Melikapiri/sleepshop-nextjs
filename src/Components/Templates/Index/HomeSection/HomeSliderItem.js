import React from 'react';

function HomeSliderItem({icon, title, description}) {
    return (
        <div className="flex items-center justify-center gap-2.5">
            <div className="inline-block bg-white/10 p-2.5 rounded-lg">
                {icon}
            </div>
            <div>
                <p className="text-base md:text-lg text-white">{title}</p>
                {
                    description && (
                        <p className="font-Yekan-Light text-sm text-lightGray">
                            {description}
                        </p>
                    )
                }

            </div>
        </div>);
}

export default HomeSliderItem;