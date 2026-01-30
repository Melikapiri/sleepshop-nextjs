import React, {useState, useEffect} from "react";
import SectionTitle from "@/src/Components/Modules/Ui/SectionTitle/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import OfferCard from "@/src/Components/Modules/Ui/OfferCard/OfferCard";
import WaveSectionTitle from "@/src/Components/Modules/Ui/WaveSectionTitle/WaveSectionTitle";
import {motion} from "framer-motion";


const SuggestedProducts = ({categoryId, productId}) => {
    const [productList, setProductList] = useState([])
    const [otherCategoryProducts, setOtherCategoryProducts] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(() => {

        const relatedProductsHandler = async () => {
            const product = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
            const res = await product.json()
            setProductList(res)

        }

        relatedProductsHandler()

    }, []);

    useEffect(() => {
        const filterProductsByCategory = productList.filter(product => product.category._id == categoryId).filter(item => item._id !== productId)
        setOtherCategoryProducts(filterProductsByCategory)
        setLoader(false)
    }, [productList]);

    return (
        <div className="">
            <div className="hidden sm:block">
                <SectionTitle title="محصولات مرتبط"/>
            </div>
            <div className="block mt-12 mb-8 sm:hidden">
                <WaveSectionTitle title={"محصولات مرتبط"}/>
            </div>
            <div
                className="  bg-primaryColor/90 w-full mb-8 px-2 py-3 sm:py-6 lg:px-20 xl:px-[70px]  "
            >
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="w-full"
                >
                    {
                    otherCategoryProducts.map((product) => <SwiperSlide key={product._id}>
                        <motion.div
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{ease: "easeOut", duration: 0.3}}
                        >
                            {/*<div className="flex flex-row gap-2">*/}
                            {/*    <div className="animate-pulse bg-gray-300 w-14 h-14 rounded-lg"/>*/}
                            {/*    <div className="flex flex-col gap-2">*/}
                            {/*        <div className="animate-pulse bg-gray-300 w-28 h-5 rounded-lg"/>*/}
                            {/*        <div className="animate-pulse bg-gray-300 w-36 h-3 rounded-lg"/>*/}
                            {/*        <div className="animate-pulse bg-gray-300 w-36 h-2 rounded-lg"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <OfferCard products={product}/>
                        </motion.div>
                    </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </div>
    );
};

export default SuggestedProducts;