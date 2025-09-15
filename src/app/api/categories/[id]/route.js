import {NextResponse} from "next/server";
import mongoose from "mongoose";
import Category from "@/models/Category";
import Product from "@/models/Product";
import dbConnect from "@/configs/db";

export async function GET(request, {params}) {
    try {
        await dbConnect();
        const {id} = params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({success: false, error: "شناسه نامعتبر است"}, {status: 400});
        }

        const category = await Category.findById(id);
        if (!category) {
            return NextResponse.json({success: false, error: "دسته‌بندی یافت نشد"}, {status: 404});
        }

        return NextResponse.json({success: true, data: category}, {status: 200});
    } catch (error) {
        return NextResponse.json({success: false, error: "خطای سرور"}, {status: 500});
    }
}

export async function PUT(request, {params}) {
    try {
        await dbConnect();
        const {id} = params;
        const {name, description} = await request.json();

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({success: false, error: "شناسه نامعتبر است"}, {status: 400});
        }

        if (!name) {
            return NextResponse.json({success: false, error: "نام دسته‌بندی الزامی است"}, {status: 400});
        }

        const category = await Category.findByIdAndUpdate(
            id,
            {name, description},
            {new: true, runValidators: true}
        );

        if (!category) {
            return NextResponse.json({success: false, error: "دسته‌بندی یافت نشد"}, {status: 404});
        }

        return NextResponse.json({success: true, data: category}, {status: 200});
    } catch (error) {
        if (error.code === 11000) {
            return NextResponse.json(
                {success: false, error: "نام دسته‌بندی قبلاً استفاده شده است"},
                {status: 400}
            );
        }
        return NextResponse.json({success: false, error: "خطای سرور"}, {status: 500});
    }
}

export async function DELETE(request, {params}) {
    try {
        await dbConnect();
        const {id} = params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({success: false, error: "شناسه نامعتبر است"}, {status: 400});
        }

        const productCount = await Product.countDocuments({category: id});
        if (productCount > 0) {
            return NextResponse.json(
                {success: false, error: "نمی‌توان دسته‌بندی را حذف کرد، زیرا محصولاتی به آن وابسته هستند"},
                {status: 400}
            );
        }

        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return NextResponse.json({success: false, error: "دسته‌بندی یافت نشد"}, {status: 404});
        }

        return NextResponse.json({success: true, message: "دسته‌بندی با موفقیت حذف شد"}, {status: 200});
    } catch (error) {
        return NextResponse.json({success: false, error: "خطای سرور"}, {status: 500});
    }
}