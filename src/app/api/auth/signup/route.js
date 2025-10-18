// src/app/api/register/route.js
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/src/Utils/AuthClient";
import { roles } from "@/src/Utils/constants";
import { validateEmail, validatePassword } from "@/src/Utils/validatePattern";

export async function POST(req) {
    try {
        await connectToDB();
        const body = await req.json();
        const { name, phone, email, password } = body;

        // Validation
        // if (!validateEmail(email) || !validatePassword(password)) {
        //     return Response.json(
        //         { message: "Email or password is invalid" },
        //         { status: 419 }
        //     );
        // }

        const isUserExist = await UserModel.findOne({
            $or: [{ name }, { email }, { phone }],
        });

        if (isUserExist) {
            return Response.json(
                { message: "The username or email or phone exist already !!" },
                { status: 422 }
            );
        }

        const hashedPassword = await hashPassword(password);
        const accessToken = generateAccessToken({ email });

        const users = await UserModel.find({});

        await UserModel.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role: users.length > 0 ? roles.USER : roles.ADMIN,
        });

        return Response.json(
            { message: "User signed up successfully :))" },
            {
                status: 201,
                headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true;SameSite=Strict;Secure` },
            }
        );
    } catch (err) {
        console.log("Err ->", err);
        return Response.json(
            { message: err.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}