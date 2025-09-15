import mongoose from "mongoose";
import Comment from "@/models/Comment";
import category from "@/models/Category";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Types.ObjectId, // رابطه با مدل Category
        ref: "Category",
        required: true,
    },
    identifier: {
        type: Date,
        default: () => Date.now(),
        immutable: false,
    },
    isAvailable: {
        type: Boolean,
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
        type: String, // img src
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

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;