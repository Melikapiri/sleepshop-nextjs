import React from 'react';
import Crown from "@/src/components/Icons/Crown";
import SectionTitle from "@/src/components/modules/SectionTitle/SectionTitle";
import PopularCategories from "@/src/components/Templates/Index/PopularSection/PopularCategories/PopularCategories";
import PopularCard from "@/src/components/modules/PopularCard/PopularCard";

function PopularSection(props) {
    return (
        <section className="mb-12 sm:mb-20">
            <div className="container">
                <div>
                    <Crown className="mx-auto w-7 h-7"/>

                </div>
                {/* section title*/}
                <SectionTitle title="پرفروش ترین محصولات"/>
                {/*popular button*/}
                <div className="hidden sm:flex justify-center items-center mx-auto gap-6 mb-6">

                    <PopularCategories title="تشک های طبی"/>
                    <PopularCategories title="روتختی ها"/>

                </div>
                {/*popular products*/}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

                    <PopularCard/>
                    <PopularCard/>
                    <PopularCard/>
                    <PopularCard/>

                </div>
            </div>
        </section>
    );
}

export default PopularSection;