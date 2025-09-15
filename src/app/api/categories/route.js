import { NextResponse } from "next/server";
import Category from "@/models/Category";
import connectToDB from "@/configs/db";

export async function GET() {
    try {
        await connectToDB();
        const categories = await Category.find();
        return NextResponse.json({ success: true, data: categories });
    } catch (error) {
        return NextResponse.json({ success: false, error: "خطای سرور" });
    }
}

export async function POST(request) {
    try {
        await connectToDB();
        const { name, displayName, description } = await request.json();

        if (!name || !displayName) {
            return NextResponse.json({ success: false, error: "نام کلیدی و نام نمایشی لازم است" });
        }

        const category = await Category.create({ name, displayName, description });
        return NextResponse.json({ success: true, data: category });
    } catch (error) {
        if (error.code === 11000) {
            return NextResponse.json({ success: false, error: "نام کلیدی تکراری است" });
        }
        return NextResponse.json({ success: false, error: "خطای سرور" });
    }
}