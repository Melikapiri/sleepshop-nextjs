import React from 'react';
import SectionTitle from "@/src/components/modules/SectionTitle/SectionTitle";
import CategoryItem from "@/src/components/Templates/Index/CategorySection/CategoryItem";

function CategorySection({data}) {
    console.log(" section category => ", data)


    return (
        <section className="category-products mb-20">
            <div className="container">

                <SectionTitle title="دسته بندی محصولات"/>


                <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-10">
                    {
                        data.map(category => (
                            <CategoryItem key={category.id} param={category.name} image={category.img}
                                          title={category.displayName}
                                          description={category.description}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default CategorySection;