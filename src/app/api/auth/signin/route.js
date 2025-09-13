import connectToDB from "@/configs/db"
import UserModel from "@/models/User";

import {generateAccessToken, generateRefreshToken, verifyPassword,} from "@/src/utils/AuthClient";
import {validatePassword} from "@/src/utils/validatePattern";
import {validateEmail} from "@/src/utils/validatePattern";

export async function POST(req) {
    try {
        await connectToDB();
        const body = await req.json();
        const {email, password} = body;

        // Validation
        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);

        if (!isValidEmail || !isValidPassword) {
            return Response.json(
                {message: "email or password is invalid"},
                {status: 419}
            );
        }

        const user = await UserModel.findOne({email});

        if (!user) {
            return Response.json({message: "User not found"}, {status: 422});
        }

        const isCorrectPasswordWithHash = verifyPassword(password, user.password);

        if (!isCorrectPasswordWithHash) {
            return Response.json(
                {message: "Email or password is not correct"},
                {status: 401}
            );
        }

        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});

        await UserModel.findOneAndUpdate(
            {email},
            {
                $set: {
                    refreshToken,
                },
            }
        );

        return Response.json(
            {message: "User logged in successfully :))"},
            {
                status: 200,
                headers: {
                    "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;`,
                },
            }
        );
    } catch (err) {
        console.log("Err ->", err);
        return Response.json(
            {message: err},
            {
                status: 500,
            }
        );
    }
}
