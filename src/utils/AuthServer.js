// src/utils/AuthServer.js
import { cookies } from "next/headers";
import { verifyAccessToken } from "./authClient";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

export const authUser = async () => {
    try {
        await connectToDB();
        console.log("Connected to DB");
        const token = await cookies().get("token");
        console.log("Token:", token);
        let user = null;

        if (token) {
            const tokenPayload = verifyAccessToken(token.value);
            console.log("Token Payload:", tokenPayload);
            if (tokenPayload) {
                user = await UserModel.findOne({ email: tokenPayload.email });
                // console.log("User:", user);
            }
        }
        return user;
    } catch (err) {
        console.log("Error in authUser:", err);
        return null;
    }
};