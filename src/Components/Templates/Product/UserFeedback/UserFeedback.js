import React, {useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {useParams} from "next/navigation"
import Star from "@/src/Components/Icons/Star";
import UserIcon from "@/src/Components/Icons/UserIcon";
import Email from "@/src/Components/Icons/Email";
import UserFeedbackList from "@/src/Components/Templates/Product/UserFeedbackList/UserFeedbackList";
import {toast} from "react-toastify";

const validationSchema = Yup.object({
    fullName: Yup.string().required("نام و نام خانوادگی الزامی است"),
    email: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
    message: Yup.string().required("لطفاً نظر خود را وارد کنید"),
    rating: Yup.number()
        .min(1, "لطفاً امتیاز دهید")
        .required("امتیاز الزامی است"),
});

const StarRating = ({value, onChange}) => {
    const [hover, setHover] = useState(0);

    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    type="button"
                    key={star}
                    onClick={() => onChange(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="focus:outline-none"
                >
                    <Star
                        className={`w-6 h-6 transition ${
                            star <= (hover || value)
                                ? "fill-star text-star"
                                : "fill-gray-200 text-gray-200"
                        }`}
                    />
                </button>
            ))}
        </div>
    );
};

const UserFeedback = ({comments}) => {
    console.log("comments=> ", comments)
    const params = useParams()

    console.log(params.id)    // const id = searchParams.get("id")
    return (
        <div className="container my-24">
            {/* Header */}
            <div className="flex items-center justify-between">
                <p className="text-lg font-Yekan-Medium text-dark pr-3.5 border-r-[3px] border-r-lightBlue">
                    نظرات کاربران
                </p>

                <div className="flex flex-col items-end text-base text-dark gap-1">
                    امتیاز 4 از 5 بین 10 دیدگاه
                    <div className="flex items-center">
                        <Star className="w-5 h-5 fill-gray-200 text-gray-200"/>
                        <Star className="w-5 h-5 fill-star text-star"/>
                        <Star className="w-5 h-5 fill-star text-star"/>
                        <Star className="w-5 h-5 fill-star text-star"/>
                        <Star className="w-5 h-5 fill-star text-star"/>
                    </div>
                </div>
            </div>

            {/* Form */}
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    message: "",
                    rating: 0,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, {resetForm}) => {


                    const newComments = {
                        username: values.fullName,
                        body: values.message,
                        email: values.message,
                        score: values.rating,
                        productID: params.id
                    }
                    console.log(process.env.NEXT_PUBLIC_BASE_URL)
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newComments)
                    })

                    res.ok ? toast.success("کامنت شما در صورت تایید منتشر خواهد شد") : toast.error("برای ثبت کامنت مجدد تلاش کنید")

                    resetForm()
                }}
            >
                {({values, setFieldValue}) => (
                    <Form className="mt-10">
                        {/* Name & Email */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="w-full">
                                <div className="p-3 bg-lightGray2 rounded-xl flex items-center justify-between">
                                    <Field
                                        name="fullName"
                                        type="text"
                                        placeholder="نام و نام خانوادگی"
                                        className="bg-transparent outline-none border-0 w-full"
                                    />
                                    <UserIcon/>
                                </div>
                                <div className="text-red-500 text-sm mt-1">
                                    <ErrorMessage name="fullName"/>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="p-3 bg-lightGray2 rounded-xl flex items-center justify-between">
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="آدرس ایمیل"
                                        className="bg-transparent outline-none border-0 w-full"
                                    />
                                    <Email className="w-6 h-6"/>
                                </div>
                                <div className="text-red-500 text-sm mt-1">
                                    <ErrorMessage name="email"/>
                                </div>
                            </div>
                        </div>


                        {/* Message */}
                        <div className="my-3">
                            <Field
                                as="textarea"
                                name="message"
                                rows="4"
                                placeholder="نظر خود را وارد کنید"
                                className="w-full bg-lightGray2 outline-none border-0 resize-none rounded-xl p-3"
                            />
                            <div className="text-red-500 text-sm mt-1">
                                <ErrorMessage name="message"/>
                            </div>
                        </div>
                        {/* Rating */}
                        <div className="flex justify-between items-center my-4">
                            <div>
                                <p className="text-sm text-dark mb-2">امتیاز شما</p>
                                <StarRating
                                    value={values.rating}
                                    onChange={(val) => setFieldValue("rating", val)}
                                />
                                <div className="text-red-500 text-sm mt-1">
                                    <ErrorMessage name="rating"/>
                                </div>
                            </div>
                            {/* Submit */}
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-xl bg-primaryColor  text-white"
                            >
                                ثبت دیدگاه
                            </button>
                        </div>


                    </Form>
                )}
            </Formik>
            <UserFeedbackList comments={comments}/>
        </div>
    );
};

export default UserFeedback;