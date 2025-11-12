"use client"; // چون Swiper به client-side نیاز داره

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Breadcrumb({ items }) {
    return (
        <nav aria-label="breadcrumb" className="text-gray-600 text-sm my-4 sm:my-8">
            <Swiper
                slidesPerView="auto"
                spaceBetween={8}
                className="!overflow-visible"
            >
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <SwiperSlide key={index} className="!w-auto">
              <span className="flex items-center whitespace-nowrap">
                {item.href && !isLast ? (
                    <Link href={item.href} >
                        {item.name}
                    </Link>
                ) : (
                    <span className={isLast ? "font-semibold" : ""}>{item.name}</span>
                )}
                  {!isLast && <span className="mx-2 text-gray-400">/</span>}
              </span>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </nav>
    );
}
