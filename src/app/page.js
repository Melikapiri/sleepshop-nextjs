import connectToDB from "@/configs/db";
import HomeSection from "@/src/components/Templates/Index/HomeSection/HomeSection";
import CategorySection from "@/src/components/Templates/Index/CategorySection/CategorySection";
import SpecialOffers from "@/src/components/Templates/Index/SpecialOffers/SpecialOffers";
import Banner from "@/src/components/Templates/Index/Banner/Banner";
import PopularSection from "@/src/components/Templates/Index/PopularSection/PopularSection";
import FollowUs from "@/src/components/Templates/Index/FollowUs/FollowUs";
import ServiceHighlights from "@/src/components/Templates/Index/ServiceHighlights/ServiceHighlights";
import ArticleSection from "@/src/components/Templates/Index/ArticleSection/ArticleSection";
import Header from "@/src/components/modules/Header/Header";
import Footer from "@/src/components/modules/Footer/Footer";
import Category from "@/models/Category";

export default async function Home() {
    const categories = await Category.find({}).select('-__v');


    return (

        <div className="backgroundImage">
            <Header/>
            <main>
                <HomeSection/>
                <CategorySection data={categories}/>
                <SpecialOffers/>
                <Banner/>
                <PopularSection/>
                <FollowUs/>
                <ServiceHighlights/>
                <ArticleSection/>
            </main>
            <Footer/>
        </div>

    );
}
