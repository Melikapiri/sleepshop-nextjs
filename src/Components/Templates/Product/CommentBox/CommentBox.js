import React from "react";
import ProfileUser from "@/src/Components/Icons/ProfileUser";
import Star from "@/src/Components/Icons/Star";

const CommentBox = ({comments}) => {
    if (!comments || comments.length === 0) {
        return <p className="my-4 text-base text-softGray">برای این محصول کامنتی ثبت نشده است </p>;
    }

    return (
        <>
            {comments
                .filter((comment) => comment.isAccept)
                .map((comment) => (
                    <div
                        key={comment._id}
                        className="my-6 p-6 rounded-3xl border border-softGray/50"
                    >
                        <div className="flex font-Yekan-Medium gap-4 items-center text-base text-dark">
                            <ProfileUser/>
                            {comment.username}

                            <div className="flex items-center">
                                {Array.from({length: 5}).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={
                                            i < comment.score
                                                ? "w-5 h-5 fill-star text-star"
                                                : "w-5 h-5 fill-gray-200 text-gray-200"
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                        <span className="block text-softGray text-sm my-2.5">
              {new Date(comment.date).toLocaleDateString("fa-IR")}
            </span>

                        <p>{comment.body}</p>
                    </div>
                ))}
        </>
    );
};

export default CommentBox;