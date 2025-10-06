"use client"
import React, {useState, useEffect} from 'react';

function Timer(props) {

    const initialTime =
        2 * 24 * 60 * 60 + // 2 روز به ثانیه
        14 * 60 * 60 +     // 14 ساعت به ثانیه
        38 * 60 +          // 38 دقیقه به ثانیه
        1;                 // 1 ثانیه

    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    function formatNumber(num) {
        return num < 10 ? `0${num}` : num;
    }

    return (
        <div
            className="relative overflow-hidden flex flex-col items-center justify-center w-auto  xl:w-[28rem] bg-primaryColor sm:px-7 pt-8 rounded-xl">
            <div className="flex items-center justify-between flex-row xl:flex-col">
                <h3 className="font-Modam-SemiBold text-xl sm:text-2xl text-white">
                    {" "}
                    پیشنهــــــــادات{" "}
                </h3>
                <h3 className="font-Modam-SemiBold text-xl sm:text-2xl text-white">
                    {" "}
                    شگفت انـــگیز{" "}
                </h3>
            </div>
            {/*timer*/}
            <div className="flex items-center gap-2 my-3 xl:my-7">
                <div className="bg-white/10 inline-block  w-10 p-1.5 text-center rounded">
                    <p className="text-white font-Yekan-bold text-sm">{formatNumber(seconds)}</p>
                    <p className="font-Yekan-Regula text-xs text-lightGray">ثانیه</p>
                </div>
                <div className="bg-white/10 inline-block  w-10 p-1.5 text-center rounded">
                    <p className="text-white font-Yekan-bold text-sm">{formatNumber(minutes)}</p>
                    <p className="font-Yekan-Regula text-xs text-lightGray">دقیقه</p>
                </div>
                <div className="bg-white/10 inline-block  w-10 p-1.5 text-center rounded">
                    <p className="text-white font-Yekan-bold text-sm">{formatNumber(hours)}</p>
                    <p className="font-Yekan-Regula text-xs text-lightGray">ساعت</p>
                </div>
                <div className="bg-white/10 inline-block w-10  p-1.5 text-center rounded">
                    <p className="text-white font-Yekan-bold text-sm">{formatNumber(days)}</p>
                    <p className="font-Yekan-Regula text-xs text-lightGray">روز</p>
                </div>
            </div>
            <div className="xl:mt-3.5">
                <img
                    className="block relative z-30 mx-auto"
                    src="/images/women.png"
                    alt=" amazing offer picture"
                />
            </div>
            <img
                className="absolute bottom-0"
                src="/images/svg/waveOffer.svg"
                alt=""
            />
        </div>
    );
}

export default Timer;