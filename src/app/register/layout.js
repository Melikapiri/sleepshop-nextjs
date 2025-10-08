import Footer from "@/src/components/modules/Footer/Footer";

export const metadata = {
    title: 'آرامیس - ثبت نام ',
    description: 'ثبت نام ',
    icons: {
        icon: '/logo.png',
    }
}
export default function RootLayout({children}) {
    return (
        <div className="backgroundImage">
            {children}
            <Footer/>
        </div>
    );
}