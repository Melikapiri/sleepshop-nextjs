import {MenuProvider} from "@/src/Context/AppContext";
import OpacityCover from "@/src/components/modules/OpacityCover/OpacityCover";
import AOSInit from "@/src/utils/AOS";
import Header from "@/src/components/modules/Header/Header";
import Footer from "@/src/components/modules/Footer/Footer";

export const metadata = {
    title: 'آرامیس - محصولات ',
    description: 'محصولات ',
    icons: {
        icon: '/logo.png',
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="fa" dir="rtl">
        <body>
        <MenuProvider>
            <AOSInit/>
            <Header/>
            {children}
            <Footer/>
            <OpacityCover/>
        </MenuProvider>

        </body>
        </html>
    );
}
