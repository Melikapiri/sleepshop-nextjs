import Footer from "@/src/Components/Modules/Shared/Footer/Footer";

export const metadata = {
    title: 'آرامیس - ورود ',
    description: 'ورود ',
    icons: {
        icon: '/logo.png',
    }
}
export default function RootLayout({children}) {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    );
}