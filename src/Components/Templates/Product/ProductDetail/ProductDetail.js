"use client"
import React, {useState} from "react";
import Breadcrumb from "@/src/Components/Modules/Ui/Breadcrumb/Breadcrumb";

const ProductDetail = ({product}) => {
    console.log("product =>   ", product)
    console.log("product =>   ", product.category.displayName)
    console.log("product =>   ", product.category.name)
    return (
        <div className="container">
            <Breadcrumb
                items={[
                    {name: "صفحه اصلی", href: '/'},
                    {name: `${product.category.displayName}`, href: `/category/${product.category.name}`},
                    {name: `${product.title}`,},
                ]}
            />

        </div>
    );
};

export default ProductDetail;