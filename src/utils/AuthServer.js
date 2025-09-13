import { cookies } from "next/headers";
import { verifyAccessToken } from "./authClient";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

export const authUser = async () => {
    await connectToDB();
    const token = cookies().get("token");
    let user = null;

    if (token) {
        const tokenPayload = verifyAccessToken(token.value);
        if (tokenPayload) {
            user = await UserModel.findOne({ email: tokenPayload.email });
        }
    }
    return user;
};