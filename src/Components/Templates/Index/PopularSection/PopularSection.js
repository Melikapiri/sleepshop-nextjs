"use client"
import React, {useState, useEffect} from 'react';
import Crown from "@/src/Components/Icons/Crown";
import SectionTitle from "@/src/Components/Modules/Ui/SectionTitle/SectionTitle";
import PopularCategories from "@/src/Components/Templates/Index/PopularSection/PopularCategories/PopularCategories";
import PopularCard from "@/src/Components/Modules/Ui/PopularCard/PopularCard";
import {motion} from "framer-motion";


function PopularSection({products}) {

    const [showCategory, setShowCategory] = useState([])
    useEffect(() => {
        setShowCategory(products.filter(item => item.category === "68c8f8de4b965941c4b82cab").slice(0, 4))
    }, []);

    const changeCategory = (id) => {
        setShowCategory(products.filter(item => item.category === id).slice(0, 4))
    }


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
                    <PopularCategories changeCategory={changeCategory} categoryId={"68c8f8de4b965941c4b82cab"}
                                       title="تشک های طبی"/>
                    <PopularCategories changeCategory={changeCategory} categoryId={"68c8192d519139597dbcc3c2"}
                                       title="روتختی ها"/>
                </div>
                {/*popular products*/}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                    {
                        showCategory?.map(product => (
                            <motion.div initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{ease: "easeOut", duration: 0.3}} key={product._id}>
                                <PopularCard id={product._id} title={product.title} price={product.price}
                                             image={product.img}/>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default PopularSection;