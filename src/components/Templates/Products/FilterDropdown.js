"use client"
import React, {useState} from 'react';
import ChevronDown from "@/src/components/Icons/ChevronDown";
function FilterDropdown({children, title}) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className=" gap-y-6 h-full rounded-2xl p-4.5 bg-lightGray3 ">
            <div
                onClick={() => setToggle(prevState => !prevState)}
                className={`flex justify-between ${toggle && `mb-4`} `}>
                <p className="font-Yekan-Medium text-sm">{title} </p>
                <ChevronDown className={`${toggle && `-rotate-180`}  transition-all w-4 h-4`}/>
            </div>
            <div className={`${!toggle ? `opacity-0 h-0 p-0 invisible` : `h-auto py-6 opacity-100 visible border-t`} transition-all flex flex-col gap-4 text-sm text-lightTextGray`}>
                {children}
            </div>

        </div>);
}

export default FilterDropdown;