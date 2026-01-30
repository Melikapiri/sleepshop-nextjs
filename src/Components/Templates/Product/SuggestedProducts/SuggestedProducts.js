import React, {useState, useEffect} from "react";
import SectionTitle from "@/src/Components/Modules/Ui/SectionTitle/SectionTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {array} from "yup";
import categoryItem from "@/src/Components/Templates/Index/CategorySection/CategoryItem";
import OfferCard from "@/src/Components/Modules/Ui/OfferCard/OfferCard";


const SuggestedProducts = ({categoryId, productId}) => {
    const [productList, setProductList] = useState([])
    const [otherCategoryProducts, setOtherCategoryProducts] = useState([])


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
    }, [productList]);

    return (
        <div>
            <SectionTitle title="محصولات مرتبط"/>
            <div
                className="  bg-primaryColor/90 w-full  py-3 sm:py-6 lg:px-20 xl:px-[70px] "
            >
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1.5}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
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
                            <OfferCard products={product}/>
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </div>
    );
};

export default SuggestedProducts;