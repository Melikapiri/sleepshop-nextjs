import mongoose from "mongoose";
import UserModel from "@/models/User"
import ProductModel from "@/models/Product"


const schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
    },
    {timestamps: true}
);

const WishListModel = mongoose.models.Wishlist || mongoose.model("Wishlist", schema);
export default WishListModel