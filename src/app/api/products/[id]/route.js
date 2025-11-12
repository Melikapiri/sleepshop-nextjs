import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import mongoose from "mongoose";

export async function GET(req, { params }) {
    try {
        await connectToDB();

        const { id } = params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return new Response(
                JSON.stringify({ message: "Invalid Product ID" }),
                { status: 400 }
            );
        }

        const product = await ProductModel.findById(id)
            .populate("category")
            .populate("comments");

        if (!product) {
            return new Response(
                JSON.stringify({ message: "Product not found" }),
                { status: 404 }
            );
        }

        return new Response(JSON.stringify(product), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ message: err.message }), {
            status: 500,
        });
    }
}
