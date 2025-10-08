import connectToDB from "@/configs/db";
import mongoose from "mongoose";
import ProductModel from "@/models/Product";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
    try {
        await connectToDB();
        const formData = await req.formData();
        const title = formData.get("title");
        const price = formData.get("price");
        const description = formData.get("description");
        const category = formData.get("category");
        const material = formData.get("material");
        const size = formData.get("size");
        const score = formData.get("score");
        const isAvailable = formData.get("isAvailable") === "true" ? true : false; // تبدیل به Boolean
        const tags = JSON.parse(formData.get("tags"));
        const img = formData.get("img");
        const discount = formData.get("discount") || 0;

        // اعتبارسنجی تخفیف
        if (discount < 0 || discount > 100) {
            return Response.json(
                { message: "Discount must be between 0 and 100" },
                { status: 400 }
            );
        }

        // اعتبارسنجی category
        if (!mongoose.Types.ObjectId.isValid(category)) {
            return Response.json(
                { message: "Invalid category ID" },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await img.arrayBuffer());
        const filename = Date.now() + img.name;
        const imgPath = path.join(process.cwd(), "public/uploads/" + filename);

        await writeFile(imgPath, buffer);

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        const product = await ProductModel.create({
            title,
            description,
            isAvailable,
            category,
            material,
            size,
            score,
            price,
            tags,
            img: `/Uploads/${filename}`,
            discount,
        });

        return Response.json(
            { message: "Product created successfully :))", data: product },
            { status: 201 }
        );
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connectToDB();
        const { searchParams } = new URL(req.url);
        const isSpecialOffer = searchParams.get('specialOffer');

        let query = {};
        if (isSpecialOffer === 'true') {
            query = { discount: { $gt: 0 } }; // فقط محصولات با تخفیف
        }

        const products = await ProductModel.find(query)
            .populate("comments")
            .populate("category"); // لود اطلاعات دسته‌بندی

        return Response.json(products);
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
}