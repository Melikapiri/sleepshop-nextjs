"use client"
import {useState} from "react";
import LoginPageIcon from "@/src/components/Icons/LoginPageIcon";
import SectionTitle from "@/src/components/modules/SectionTitle/SectionTitle";
import {useRouter} from "next/navigation";
import {validateEmail, validatePassword} from "@/src/utils/validatePattern";
import {toast} from "react-toastify";

function Page(props) {
    const route = useRouter()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const loginUserRequest = async (event) => {
        event.preventDefault()


        if (!password.trim() || !email.trim() || !validatePassword(password) || !validateEmail(email)) {
            toast.error("مقادیر وارد شده معتبر نمی باشد ")
        } else {

            const loginData = {
                email,
                password
            }

            const res = await fetch(`http://localhost:3000/api/auth/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            })

            const result = await res.json()
            if (res.status === 200) {
                toast.success("با موفقیت وارد شدید", {
                    onClose: () => {
                        route.push("/");
                    },
                });

            } else {
                toast.error("مشکلی به وجود آمده مجدد تلاش کنید")

            }
        }
    }


    return (
        <div className=" mt-5">
            <div className="flex flex-col	justify-center items-center">
                <SectionTitle title="صفحه ورود"/>
            </div>
            <div className="container">

                <div
                    className="gradiant  shadow shadow-primaryColor overflow-hidden flex items-center justify-center md:gap-6 p-6 xs:py-10 md:p-12  rounded-3xl mx-auto   mb-10">
                    <LoginPageIcon className="hidden sm:block w-auto h-80 md:h-96"/>
                    <form
                        onSubmit={loginUserRequest}
                        className=" overflow-hidden relative w-full max-w-sm sm:max-w-md rounded-2xl bg-white p-4 xs:p-8   ">
                        <p className="text-sm text-gray-600 font-Yekan-Light">
                            هنوز ثبت نام نکردی؟ <a href="/register"
                                                   className="tracking-tight font-Yekan-bold">ثبت
                            نام</a></p>
                        <h2 className="text-base text-center my-2 md:text-lg font-Modam-SemiBold login text-neutral-900 dark:text-neutral-100 mb-4">
                            ورود
                        </h2>

                        <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                            ایمیل
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full rounded-lg border border-gray-200 bg-white/40  shadow-inner  px-4 py-2 outline-none focus:ring-2 ring-offset-0 ring-blue-400/60 dark:ring-blue-300/50 placeholder:text-neutral-500  text-neutral-900 dark:text-neutral-100"
                            placeholder="you@example.com"
                        />

                        <label className="block text-sm text-neutral-700 dark:text-neutral-300 mt-4 mb-2">
                            رمز عبور
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-full border border-gray-200 shadow-inner rounded-lg bg-white/40 dark:bg-white/10
                 px-4 py-2 outline-none focus:ring-2 ring-blue-400/60 dark:ring-blue-300/50
                 text-neutral-900 dark:text-neutral-100"
                            placeholder="••••••••"
                        />

                        <button
                            type="submit"
                            className="mt-6 w-full rounded-xl px-4 py-2
                 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900
                 hover:opacity-90 transition"
                        >
                            ورود
                        </button>

                        {/* هاله‌های نور خیلی لطیف برای عمق */}
                        <div
                            className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"/>
                        <div
                            className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"/>
                    </form>

                </div>

            </div>
        </div>

    )
}

export default Page;