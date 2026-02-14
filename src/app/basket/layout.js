import Header from "@/src/Components/Modules/Shared/Header/Header";
import Footer from "@/src/Components/Modules/Shared/Footer/Footer";
import {FilterProductProvider} from "@/src/Context/FilterProductContext";

export const metadata = {
    title: 'آرامیس - سبد خرید ',
    description: 'سبد خرید ',
    icons: {
        icon: '/logo.png',
    }
};

export default function RootLayout({children}) {
    return (
        <>
            <Header/>
            <FilterProductProvider>
                {children}
            </FilterProductProvider>
            <Footer/>
        </>
    );
}
