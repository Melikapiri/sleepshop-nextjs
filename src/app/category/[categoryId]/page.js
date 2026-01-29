import {notFound} from "next/navigation";
import CategoryWrapper from "@/src/Components/Templates/Category/CategoryWrapper";

export default async function Page({params}) {
    const categoryId = params.categoryId;

    const resCat = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, {
        cache: "no-store",
    });
    const categories = await resCat.json();

    const category = categories?.data?.find(
        (item) => item._id === categoryId || item.name === categoryId
    );

    if (!category) {
        notFound();
    }

    const resProd = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=${categoryId}`,
        {cache: "no-store"}
    );
    const products = await resProd.json();
    const filteredProducts = products.filter(product => product.category.name === categoryId)
    return (
        <div className="my-10">
            <CategoryWrapper
                categoryName={category.displayName || category.name}
                products={filteredProducts || []
            }
            />
        </div>
    );
}
