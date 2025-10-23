import Footer from "@/src/Components/Modules/Shared/Footer/Footer";

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