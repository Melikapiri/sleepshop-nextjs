import connectToDB from "@/configs/db";
import ProductDetail from "@/src/Components/Templates/Product/ProductDetail/ProductDetail";
import {authUser} from "@/src/Utils/AuthServer";
import {notFound} from "next/navigation";

export default async function ProductPage({params}) {
    await connectToDB()

    const {id} = params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`);
    const product = await res.json();
    const user = await authUser();

    if (product.id!==id)notFound()

    return <ProductDetail userId={user?._id.toString()} isLogin={user ? true : false} product={product}/>;
}
