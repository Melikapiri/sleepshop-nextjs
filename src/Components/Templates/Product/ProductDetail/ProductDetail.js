"use client"
import React, {useState,useEffect} from "react";
import Select from 'react-select';
import Breadcrumb from "@/src/Components/Modules/Ui/Breadcrumb/Breadcrumb";
import HighlightSlider from "@/src/Components/Templates/Product/HighlightSlider/HighlightSlider";
import ProductDescription from "@/src/Components/Templates/Product/ProductDescription/ProductDescription";
import SuggestedProducts from "@/src/Components/Templates/Product/SuggestedProducts/SuggestedProducts";
import ProductFeatures from "@/src/Components/Templates/Product/ProductFeatures/ProductFeatures";
import StateData from "@/src/Utils/StateData";

// const options = [
//     {value: 'chocolate', label: 'Chocolate'},
//     {value: 'strawberry', label: 'Strawberry'},
//     {value: 'vanilla', label: 'Vanilla'},
// ];
const city=StateData()

const ProductDetail = ({product, userId, isLogin}) => {

    const [selectedOption, setSelectedOption] = useState(null);
    // const [city, setCity] = useState(StateData());

    // useEffect(() => {
    //     console.log(city)
    // }, [city]);


    console.log("id=> ", userId)
    return (
        <>
            <div className="container w-full">
                <Breadcrumb
                    items={[
                        {name: "صفحه اصلی", href: '/'},
                        {name: `${product.category.displayName}`, href: `/category/${product.category.name}`},
                        {name: `${product.title}`,},
                    ]}
                />


                {/*  product body  */}
                <ProductFeatures img={product.img} title={product.title} _id={product._id} tags={product.tags}
                                 comments={product.comments} score={product.score} material={product.material}
                                 size={product.size} price={product.finalPrice}/>
            </div>
            <HighlightSlider/>
            <div className="App">
                <Select
                    instanceId="state-select"
                    id="state-select"
                    placeholder="استان را انتخاب کنید..."
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={city}
                />
            </div>
            <ProductDescription description={product.description}/>
            <SuggestedProducts productId={product._id} categoryId={product.category._id}/>
        </>

    );
};

export default ProductDetail;