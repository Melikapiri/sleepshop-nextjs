"use client"
import React, {useState} from 'react';
import ChevronDown from "@/src/components/Icons/ChevronDown";

function ToggleSection({children, title, className, scrollable}) {
    const [toggle, setToggle] = useState(false)
    return (
        <div
            className={` ${className}  gap-y-6 h-full rounded-2xl p-4.5 border border-stone-100 bg-lightGray3 `}>
            <div
                onClick={() => setToggle(prevState => !prevState)}
                className={`flex justify-between ${toggle && `mb-4`} `}>
                <p className="font-Yekan-Medium text-sm">{title} </p>
                <ChevronDown className={`${toggle && `-rotate-180`} transition-all w-4 h-4`}/>
            </div>
            <div
                className={` ${!toggle ? `opacity-0 h-0 p-0 invisible` : `${scrollable ? `h-40 overflow-y-auto py-6 mt-2` : `h-auto py-6 opacity-100 visible border-t`} `} transition-all flex flex-col gap-4 text-sm text-lightTextGray`}>
                {children}
            </div>

        </div>);
}

export default ToggleSection;