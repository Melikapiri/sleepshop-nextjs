
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
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}
