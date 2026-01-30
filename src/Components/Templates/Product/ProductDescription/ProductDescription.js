import React from "react";
import SectionTitle from "@/src/Components/Modules/Ui/SectionTitle/SectionTitle";
import WaveLine from "@/src/Components/Icons/WaveLine";
import WaveSectionTitle from "@/src/Components/Modules/Ui/WaveSectionTitle/WaveSectionTitle";

const ProductDescription = ({description}) => {
    return (
        <div className="  px-4 sm:px-20 lg:px-40 mt-16">
            <div className="hidden sm:block"><SectionTitle title={"درباره محصول"}/>
            </div>
            <WaveSectionTitle title={"درباره محصول"}/>
            <p className=" text-center font-Yekan-Regula   my-8 sm:mt-0">{description}
            </p>
        </div>
    );
};

export default ProductDescription;