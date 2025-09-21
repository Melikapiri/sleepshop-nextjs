"use client"
import React, {useState} from 'react';
import ChevronDown from "@/src/components/Icons/ChevronDown";

function PriceRangeSelector() {
    const [closeRangePrice, setCloseRangePrice] = useState(false)


    return (
        <div className=" gap-y-6 h-full rounded-2xl p-4.5 bg-lightGray3 ">
            <div
                onClick={() => setCloseRangePrice(prevState => !prevState)}
                className={`flex justify-between ${closeRangePrice && `mb-4`} `}>
                <p className="font-Yekan-Medium text-sm">بازه قیمتی</p>
                <ChevronDown className={`${closeRangePrice && `-rotate-180`}  transition-all w-4 h-4`}/>
            </div>

            <div
                className={`${!closeRangePrice ? `opacity-0 h-0 p-0 invisible` : `h-auto py-6 opacity-100 visible`} transition-all flex flex-col gap-4 text-sm text-lightTextGray`}>
                <div className="flex gap-1 xl:gap-2 w-full items-center">
                    <span className="block ml-2">از :</span>
                    <input
                        className="outline-0 px-3 w-full lg:w-[80%] py-2 rounded-lg placeholder:text-xs shadow focus:border focus:border-lightBlue"
                        type="text" placeholder=" مثال 200,000 تومان   "/>

                </div>
                <div className="flex gap-1 xl:gap-2 w-full items-center">
                    <span className="block ml-2">تا :</span>
                    <input
                        className="outline-0 px-3 w-full lg:w-[80%] py-2 rounded-lg placeholder:text-xs shadow focus:border focus:border-lightBlue"
                        type="text" placeholder="مثال 800,000 تومان "/>
                </div>
            </div>

        </div>);
}

export default PriceRangeSelector;