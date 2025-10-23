"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SectionTitle from "@/src/Components/Modules/Ui/SectionTitle/SectionTitle";
import RegisterIcon from "@/src/Components/Icons/RegisterIcon";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, "نام کاربری حداقل باید ۵ کاراکتر باشد")
        .required("نام کاربری الزامی است"),
    email: Yup.string()
        .email("ایمیل واردشده معتبر نیست")
        .required("ایمیل الزامی است"),
    phone: Yup.string()
        .matches(/^09[0-9]{9}$/, "شماره تلفن معتبر نیست")
        .required("شماره تلفن الزامی است"),
    password: Yup.string()
        .min(6, "رمز عبور حداقل باید ۶ کاراکتر باشد")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "رمز عبور باید شامل حروف بزرگ، کوچک و عدد باشد"
        )
        .required("رمز عبور الزامی است"),
});

function Page() {
    const router = useRouter();

    const initialValues = {
        username: "",
        email: "",
        phone: "",
        password: "",
    };

    const registerUser = async (values, { resetForm }) => {

        try {
            const newUser = {
                name: values.username,
                email: values.email,
                phone: values.phone,
                password: values.password,
            };

            const res = await fetch(`/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            const result = await res.json();
            console.log("result => ",result)
            if (res.status === 201) {
                toast.success("ثبت‌نام با موفقیت انجام شد");
                resetForm();
                router.push("/");
            } else {
                toast.error("مجدداً تلاش کنید");
            }
        } catch (error) {
            toast.error("خطایی رخ داد. لطفاً دوباره تلاش کنید");
        }
    };

    return (
        <div className="mt-5">
            <div className="flex flex-col justify-center items-center">
                <SectionTitle title="ثبت‌نام" />
            </div>

            <div className="container">
                <div className="gradiant shadow shadow-primaryColor overflow-hidden flex items-center justify-center md:gap-6 p-6 xs:py-10 md:p-12 rounded-3xl mx-auto mb-10">
                    <RegisterIcon className="hidden md:block w-auto h-80 md:max-h-[30rem] md:h-auto" />

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={registerUser}
                    >
                        {() => (
                            <Form className="relative w-full max-w-sm rounded-2xl shadow-100 bg-white p-4 xs:p-8">
                                <p className="text-sm text-gray-600 font-Yekan-Light">
                                    قبلاً ثبت‌نام کردی؟{" "}
                                    <a href="/login" className="tracking-tight font-Yekan-bold">
                                        ورود
                                    </a>
                                </p>

                                <h2 className="text-base text-center my-2 md:text-lg font-Modam-SemiBold login text-neutral-900 dark:text-neutral-100 mb-4">
                                    ثبت‌نام
                                </h2>

                                <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                                    نام کاربری
                                </label>
                                <Field
                                    type="text"
                                    name="username"
                                    className="w-full rounded-lg border border-gray-200 bg-white/40 shadow-inner px-4 py-2 outline-none focus:ring-2 ring-offset-0 ring-blue-400/60 dark:ring-blue-300/50 placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100"
                                    placeholder="نام کاربری شما"
                                />
                                <ErrorMessage
                                    name="username"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />

                                <label className="block text-sm text-neutral-700 dark:text-neutral-300 my-2">
                                    تلفن
                                </label>
                                <Field
                                    type="text"
                                    name="phone"
                                    className="w-full rounded-lg border border-gray-200 bg-white/40 shadow-inner px-4 py-2 outline-none focus:ring-2 ring-offset-0 ring-blue-400/60 dark:ring-blue-300/50 placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100"
                                    placeholder="09123456789"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />

                                <label className="block text-sm text-neutral-700 dark:text-neutral-300 mt-4 mb-2">
                                    ایمیل
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full rounded-lg border border-gray-200 bg-white/40 shadow-inner px-4 py-2 outline-none focus:ring-2 ring-offset-0 ring-blue-400/60 dark:ring-blue-300/50 placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />

                                <label className="block text-sm text-neutral-700 dark:text-neutral-300 mt-4 mb-2">
                                    رمز عبور
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full border border-gray-200 shadow-inner rounded-lg bg-white/40 dark:bg-white/10 px-4 py-2 outline-none focus:ring-2 ring-blue-400/60 dark:ring-blue-300/50 text-neutral-900 dark:text-neutral-100"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="text-red-500 text-xs mt-1"
                                />

                                <button
                                    type="submit"
                                    className="mt-6 w-full rounded-xl px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition"
                                >
                                    ثبت‌نام
                                </button>

                                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Page;