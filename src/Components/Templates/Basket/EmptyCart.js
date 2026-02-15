import React from "react";
import Image from "next/image";

const EmptyCart = () => {
    return (
        <div className=" flex flex-col items-center justify-center">
            <div className=" px-10 sm:px-40">
                <Image className="block w-full h-full" src="/images/empty.png" alt="سبد خرید خالی است" width={500}
                       height={500}/>
                <p className="text-xl font-Yekan-bold text-center text-dark">هنوز سبد خریدت خالیه !
                </p>
            </div>
        </div>
    );
};

export default EmptyCart;