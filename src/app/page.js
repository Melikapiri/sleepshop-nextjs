import connectToDB from "@/configs/db";
import HomeSection from "@/src/Components/Templates/Index/HomeSection/HomeSection";
import CategorySection from "@/src/Components/Templates/Index/CategorySection/CategorySection";
import SpecialOffers from "@/src/Components/Templates/Index/SpecialOffers/SpecialOffers";
import Banner from "@/src/Components/Templates/Index/Banner/Banner";
import PopularSection from "@/src/Components/Templates/Index/PopularSection/PopularSection";
import FollowUs from "@/src/Components/Templates/Index/FollowUs/FollowUs";
import ServiceHighlights from "@/src/Components/Templates/Index/ServiceHighlights/ServiceHighlights";
import ArticleSection from "@/src/Components/Templates/Index/ArticleSection/ArticleSection";
import Header from "@/src/Components/Modules/Shared/Header/Header";
import Footer from "@/src/Components/Modules/Shared/Footer/Footer";
import Category from "@/models/Category";
import Product from "@/models/Product"
import EmptyProductsMessage from "@/src/Components/Modules/Ui/EmptyProductsMessage/EmptyProductsMessage";

export default async function Home() {
    await connectToDB()
    const categories = await Category.find({}).select('-__v');
    const products = await Product.find({}).select('-__v');


    return (

        <div className="backgroundImage">
            <Header/>
            <main>
                <HomeSection/>
                <CategorySection data={categories}/>
                <SpecialOffers products={products}/>
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
