"use client"
import React, {useState} from "react";
import SectionTitle from "@/src/components/modules/SectionTitle/SectionTitle";
import Link from "next/link";
import RegisterIcon from "@/src/components/Icons/RegisterIcon";
import {validateEmail, validatePassword, validatePhone} from "@/src/utils/validatePattern";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

function Page() {
    const route = useRouter()
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")


    const userRegister = async (event) => {
        event.preventDefault()
        if (!validateEmail(email) || !validatePassword(password) || !validatePhone(phone) || !username.trim() || !email.trim() || !password.trim() || !phone.trim()) {
            username.length < 5 && toast.error("نام کاربری حداقل باید 5 کاراکتر باشد")
            !validateEmail(email) && toast.error("ایمیل وارد شده معتبر نمیباشد")
            !validatePassword(password) && toast.error("پسورد وارد شده معتبر نمیباشد")
            !validatePhone(phone) && toast.error("شماره وارد شده معتبر نمیباشد")

        } else {
            const newUser = {
                name: username,
                email,
                phone,
                password
            }

            const res = await fetch(`http://localhost:3000/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })

            const result = await res.json()

            if (res.status === 201) {
                toast.success("ثبت نام با موفقیت انجام شد ")
                setUserName("")
                setEmail("")
                setPassword("")
                setPhone("")
                route.push("/")
            } else {
                toast.error("مجددا تلاش کنید ")
            }
        }


    }

    return (
        <>
            <div className=" mt-5">
                {/* عنوان صفحه */}
                <div className="flex flex-col justify-center items-center">
                    <SectionTitle title="ثبت نام"/>
                </div>

                <div className="container">

                    <div
                        className="gradiant  shadow shadow-primaryColor overflow-hidden flex items-center justify-center md:gap-6 p-6 xs:py-10 md:p-12  rounded-3xl mx-auto   mb-10">
                        <RegisterIcon className="hidden md:block w-auto h-80 md:max-h-[30rem] md:h-auto"/>

                        <form

                            onSubmit={userRegister}
                            className="relative w-full max-w-sm rounded-2xl shadow-100  bg-white  p-4 xs:p-8 ">
                            <p className="text-sm text-gray-600 font-Yekan-Light">
                                قبلا ثبت نام کردی؟{" "}
                                <Link href="/login" className="tracking-tight font-Yekan-bold">
                                    ورود
                                </Link>
                            </p>

                            <h2 className="text-base text-center my-2 md:text-lg font-Modam-SemiBold login text-neutral-900 dark:text-neutral-100 mb-4">
                                ثبت نام
                            </h2>

                            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                                نام کاربری
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(event) => setUserName(event.target.value)}
                                className="w-full rounded-lg border border-gray-200 bg-white/40 shadow-inner px-4 py-2 outline-none focus:ring-2 ring-offset-0 ring-blue-400/60 dark:ring-blue-300/50 placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100"
                                placeholder="نام کاربری شما"
                            />


                            <label className="block text-sm text-neutral-700 dark:text-neutral-300 my-2">
                                تلفن </label>
                            <input
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                className="w-full rounded-lg border border-gray-200 bg-white/40 shadow-inner px-4 py-2 outline-none focus:ring-2 ring-offset-0 ring-blue-400/60 dark:ring-blue-300/50 placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100"
                                placeholder="09123456789"
                            />

                            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mt-4 mb-2">
                                ایمیل
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="w-full rounded-lg border border-gray-200 bg-white/40 shadow-inner px-4 py-2 outline-none focus:ring-2 ring-offset-0 ring-blue-400/60 dark:ring-blue-300/50 placeholder:text-neutral-500 text-neutral-900 dark:text-neutral-100"
                                placeholder="you@example.com"
                                autoComplete="email"
                            />

                            <label className="block text-sm text-neutral-700 dark:text-neutral-300 mt-4 mb-2">
                                رمز عبور
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className="w-full border border-gray-200 shadow-inner rounded-lg bg-white/40 dark:bg-white/10 px-4 py-2 outline-none focus:ring-2 ring-blue-400/60 dark:ring-blue-300/50 text-neutral-900 dark:text-neutral-100"
                                placeholder="••••••••"
                                autoComplete="new-password"
                            />

                            <button
                                className="mt-6 w-full rounded-xl px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition"
                            >
                                ثبت نام
                            </button>

                            <div
                                className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"/>
                            <div
                                className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
