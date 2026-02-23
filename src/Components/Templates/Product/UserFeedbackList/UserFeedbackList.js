import React from "react";
import MessageText from "@/src/Components/Icons/MessageText";
import CommentBox from "@/src/Components/Templates/Product/CommentBox/CommentBox";

const UserFeedbackList = () => {
    return (
        <div className="mt-8 ">
            <div className="flex items-center gap-2 text-base font-Yekan-Medium text-dark">
                <MessageText/>
                نظرات کاربران
            </div>
            <CommentBox/>
        </div>
    );
};

export default UserFeedbackList;