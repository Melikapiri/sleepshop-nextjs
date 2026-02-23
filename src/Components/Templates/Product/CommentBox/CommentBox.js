import React from "react";
import ProfileUser from "@/src/Components/Icons/ProfileUser";
import Star from "@/src/Components/Icons/Star";

const CommentBox = () => {
    return (
        <div className="my-6 p-6 rounded-3xl border border-softGray/50">
            <div className="flex font-Yekan-Medium gap-4 items-center text-base text-dark">
                <ProfileUser/>
                ملیکا پیری
                <div className="flex items-center">
                    <Star className="w-5 h-5 fill-gray-200 text-gray-200"/>
                    <Star className="w-5 h-5 fill-star text-star"/>
                    <Star className="w-5 h-5 fill-star text-star"/>
                    <Star className="w-5 h-5 fill-star text-star"/>
                    <Star className="w-5 h-5 fill-star text-star"/>
                </div>
            </div>
            <span className="block text-softGray text-sm my-2.5">24 خرداد 1403</span>
            <p> جنسش عالی بود ، توصیه میکنم بخرید</p>
        </div>
    );
};

export default CommentBox;