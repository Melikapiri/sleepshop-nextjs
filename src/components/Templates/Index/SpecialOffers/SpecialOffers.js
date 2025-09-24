import React from 'react';
import Timer from "@/src/components/Templates/Index/SpecialOffers/Timer";
import OfferCard from "@/src/components/modules/OfferCard/OfferCard";

function SpecialOffers({products}) {
    console.log("produxct server ", products)
    return (
        <section className="amazing-offers mb-12 sm:mb-20">
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-6">
                    <Timer/>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

                        {
                            products.filter(item => item.discount).slice(0, 4).map(product => <OfferCard
                                key={product._id} products={product}/>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialOffers;