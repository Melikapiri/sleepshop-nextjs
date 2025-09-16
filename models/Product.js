import mongoose from "mongoose";
import Comment from "@/models/Comment";
import Category from "@/models/Category";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    identifier: {
        type: Date,
        default: () => Date.now(),
        immutable: false,
    },
    isAvailable: {
        type: Boolean, // اصلاح نوع به Boolean برای سازگاری
        default: true,
    },
    material: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
        enum: [
            "single", // تک‌نفره
            "double", // دو‌نفره
            "queen", // کویین
            "king", // کینگ
            "50x70", // بالشت
            "160x200", // تشک
            "S", // حوله تن‌پوش - کوچک
            "M", // حوله تن‌پوش - متوسط
            "L", // حوله تن‌پوش - بزرگ
            "XL", // حوله تن‌پوش - خیلی بزرگ
            "XXL", // حوله تن‌پوش - خیلی خیلی بزرگ
        ],
    },
    score: {
        type: Number,
        default: 5,
    },
    tags: {
        type: [String],
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    comments: {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
});

// تعریف virtual برای finalPrice
schema.virtual('finalPrice').get(function () {
    return this.price * (1 - this.discount / 100);
});

// تنظیم toJSON برای نمایش virtualها و حذف __v
schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        return ret;
    }
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;