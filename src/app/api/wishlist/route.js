import connectToDb from "@/configs/db";
import WishListModel from "@/models/Wishlist";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDb();

        const body = await req.json();
        console.log("Wishlist API body:", body);

        const { user, product } = body;

        if (!isValidObjectId(user) || !isValidObjectId(product)) {
            console.warn("Invalid IDs:", { user, product });
            return NextResponse.json({ message: "product and user is not valid!" }, { status: 401 });
        }

        const wish = await WishListModel.findOne({ user, product });
        if (!wish) {
            await WishListModel.create({ user, product });
            return NextResponse.json({ message: "Product successfully added to wishlist." }, { status: 201 });
        }

        return NextResponse.json({ message: "Product already in wishlist." }, { status: 200 });
    } catch (err) {
        console.error("Wishlist API error:", err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
