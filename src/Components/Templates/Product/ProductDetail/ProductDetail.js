"use client"
import React, {useState} from "react";
import Breadcrumb from "@/src/Components/Modules/Ui/Breadcrumb/Breadcrumb";
import Image from "next/image";
import Heart from "@/src/Components/Icons/Heart";
import Star from "@/src/Components/Icons/Star";
import Shield from "@/src/Components/Icons/Shield";
import Plus from "@/src/Components/Icons/Plus";
import Minus from "@/src/Components/Icons/Minus";
import HighlightSlider from "@/src/Components/Templates/Product/HighlightSlider/HighlightSlider";
import ProductDescription from "@/src/Components/Templates/Product/ProductDescription/ProductDescription";
import SuggestedProducts from "@/src/Components/Templates/Product/SuggestedProducts/SuggestedProducts";
import ProductFeatures from "@/src/Components/Templates/Product/ProductFeatures/ProductFeatures";

const ProductDetail = ({product, userId, isLogin}) => {
    console.log("product ایدیییی =>   ", product.category._id)
    console.log("product =>   ", product.category.displayName)
    console.log("product =>   ", product.category.name)
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
                                 size={product.size} price={product.price}/>
            </div>
            <HighlightSlider/>
            <ProductDescription description={product.description}/>
            <SuggestedProducts productId={product._id} categoryId={product.category._id}/>
        </>

    );
};

export default ProductDetail;