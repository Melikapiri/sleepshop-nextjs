// page.js
import ProductDetail from "@/src/Components/Templates/Product/ProductDetail/ProductDetail";

export default async function ProductPage({params}) {
    const {id} = params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`);
    const product = await res.json();

    return <ProductDetail product={product}/>;
}
