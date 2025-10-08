import {NextResponse} from "next/server";
import Category from "@/models/Category";
import connectToDB from "@/configs/db";
import {writeFile} from "fs/promises";
import path from "path";

export async function GET() {
    try {
        await connectToDB();
        const categories = await Category.find({}).select('-__v');
        return NextResponse.json({success: true, data: categories});
    } catch (error) {
        return NextResponse.json({success: false, error: "خطای سرور"});
    }
}

export async function POST(request) {
    try {
        await connectToDB();
        const formData = await request.formData();
        const name = formData.get("name");
        const displayName = formData.get("displayName");
        const description = formData.get("description");
        const img = formData.get("img");

        if (!name || !displayName) {
            return NextResponse.json({success: false, error: "نام کلیدی و نام نمایشی لازم است"});
        }

        const buffer = Buffer.from(await img.arrayBuffer());
        const filename = Date.now() + img.name;
        const imgPath = path.join(process.cwd(), "public/uploads/" + filename);
        await writeFile(imgPath, buffer);

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

        const category = await Category.create({
            name,
            displayName,
            description,
            img: `/uploads/${filename}`,
        });

        return NextResponse.json({success: true, data: category});
    } catch (error) {
        if (error.code === 11000) {
            return NextResponse.json({success: false, error: "نام کلیدی تکراری است"});
        }
        return NextResponse.json({success: false, error: "خطای سرور"});
    }
}