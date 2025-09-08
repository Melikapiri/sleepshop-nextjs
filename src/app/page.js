"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import MoreGridBig from "@/src/components/Icons/MoreGridBig";
import Truk from "@/src/components/Icons/Truk";
import HeadPhone from "@/src/components/Icons/HeadPhone";
import ArrowLeft from "@/src/components/Icons/ArrowLeft";
import Ellipse from "@/src/components/Icons/Ellipse";
import HomeSlider from "@/src/components/Templates/Index/HomeSection/HomeSlider";
import ChevronLeft from "@/src/components/Icons/ChevronLeft";
import HomeSection from "@/src/components/Templates/Index/HomeSection/HomeSection";
import CategorySection from "@/src/components/Templates/Index/CategorySection/CategorySection";
import SpecialOffers from "@/src/components/Templates/Index/SpecialOffers/SpecialOffers";
import Banner from "@/src/components/Templates/Index/Banner/Banner";
import PopularCard from "@/src/components/modules/PopularCard/PopularCard";
import PopularSection from "@/src/components/Templates/Index/PopularSection/PopularSection";
import FollowUs from "@/src/components/Templates/Index/FollowUs/FollowUs";
import ServiceHighlights from "@/src/components/Templates/Index/ServiceHighlights/ServiceHighlights";
import ArticleSection from "@/src/components/Templates/Index/ArticleSection/ArticleSection";

export default function Home() {

    // local
    return (
        <main>
            <HomeSection/>
            <CategorySection/>
            <SpecialOffers/>
            <Banner/>
            <PopularSection/>
            <FollowUs/>
            <ServiceHighlights/>
            <ArticleSection/>
        </main>);
}
