import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

export const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
};

export const generateAccessToken = (data) => {
    const token = sign({ ...data }, process.env.AccessTokenSecretKey, {
        expiresIn: "60d",
    });
    return token;
};

export const verifyAccessToken = (token) => {
    try {
        const tokenPayload = verify(token, process.env.AccessTokenSecretKey);
        return tokenPayload;
    } catch (err) {
        console.log("Verify Access Token Error ->", err);
        return false;
    }
};

export const generateRefreshToken = (data) => {
    const token = sign({ ...data }, process.env.RefreshTokenSecretKey, {
        expiresIn: "15d",
    });
    return token;
};