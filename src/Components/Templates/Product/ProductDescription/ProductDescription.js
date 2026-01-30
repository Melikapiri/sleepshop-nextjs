import React from "react";
import SectionTitle from "@/src/Components/Modules/Ui/SectionTitle/SectionTitle";
import WaveLine from "@/src/Components/Icons/WaveLine";

const ProductDescription = ({description}) => {
    return (
        <div className="  px-4 mt-16">
            <div className="hidden sm:block"><SectionTitle title={"درباره محصول"}/>
            </div>
            <div className="flex items-center justify-center flex-col sm:hidden">
                <p>درباره محصول</p>
                <WaveLine/>
            </div>
            <p className=" text-center font-Yekan-Regula   my-8 sm:mt-0">{description}
            </p>


        </div>
    );
};

export default ProductDescription;