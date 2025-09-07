import React from 'react';
import Timer from "@/src/components/Templates/Index/SpecialOffers/Timer";
import OfferCard from "@/src/components/modules/OfferCard/OfferCard";

function SpecialOffers(props) {
    return (
        <section className="amazing-offers mb-12 sm:mb-20">
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-6">
                    <Timer/>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                        <OfferCard/>
                        <OfferCard/>
                        <OfferCard/>
                        <OfferCard/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialOffers;