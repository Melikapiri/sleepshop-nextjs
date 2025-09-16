import connectToDB from "@/configs/db";
import React from 'react';
import Product from "@/models/Product";

async function Page(props) {
    await connectToDB()
    const products = await Product.find({}).select('-__v');

    return (
        <div>


            {
                products.map(item=>(
                    <div key={item._id}>
                        <img src={item.img} alt=""/>
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Page;