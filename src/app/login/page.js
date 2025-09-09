"use client";


import Footer from "@/src/components/modules/Footer/Footer";
import LoginPageIcon from "@/src/components/Icons/LoginPageIcon";
import SectionTitle from "@/src/components/modules/SectionTitle/SectionTitle";
import Header from "@/src/components/modules/Header/Header";

function Page(props) {
    return (

        <>
            <Header/>
            <div className="container mt-5">
                <div className="flex flex-col	justify-center items-center">
                    <SectionTitle title="صفحه ورود"/>
                </div>

                <div
                    className=" max-w-[45rem] flex items-center justify-between md:gap-6  p-8 md:p-12 rounded-3xl mx-auto gradiant sm:shadow sm:shadow-primaryColor/60 mb-10">

                    <LoginPageIcon className="hidden sm:block w-auto h-80 md:h-auto"/>
                    <form

                        className="  relative w-full max-w-md rounded-2xl shadow-100 border bg-white border-gray-300 p-8  md:p-4 ">
                        <p className="text-sm text-gray-600 font-Yekan-Light">هنوز ثبت نام نکردی؟ <a href="/register"
                                                                                       className="tracking-tight font-bold">ثبت
                            نام</a></p>
                        <h2 className="text-base text-center my-2 md:text-lg font-Modam-SemiBold login text-neutral-900 dark:text-neutral-100 mb-4">
                            ورود
                        </h2>

                        <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                            ایمیل
                        </label>
                        <input
                            type="email"
                            className="w-full rounded-lg border border-gray-200 bg-white/40  shadow-inner   px-4 py-2 outline-none focus:ring-2 ring-offset-0 ring-blue-400/60 dark:ring-blue-300/50 placeholder:text-neutral-500  text-neutral-900 dark:text-neutral-100"
                            placeholder="you@example.com"
                        />

                        <label className="block text-sm text-neutral-700 dark:text-neutral-300 mt-4 mb-2">
                            رمز عبور
                        </label>
                        <input
                            type="password"
                            className="w-full border border-gray-200 shadow-inner rounded-lg bg-white/40 dark:bg-white/10 border border-white/30
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
            <Footer/>

        </>)
}

export default Page;