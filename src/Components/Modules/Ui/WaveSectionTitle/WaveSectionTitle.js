import React from "react";
import WaveLine from "@/src/Components/Icons/WaveLine";

const WaveSectionTitle = ({title}) => {
    return (
        <div className="flex items-center justify-center flex-col sm:hidden">
            <p>{title}</p>
            <WaveLine/>
        </div>
    );
};

export default WaveSectionTitle;