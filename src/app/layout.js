// app/layout.js
import './globals.css';
import Header from '@/src/components/modules/Header/Header';
import {MenuProvider} from "@/src/Context/AppContext";
import OpacityCover from "@/src/components/modules/OpacityCover/OpacityCover";
import AOSInit from "@/src/utils/AOS";

export const metadata = {
    title: 'آرامیس - صفحه اصلی ',
    description: 'صفحه اصلی ',
    icons: {
        icon: '/logo.png',
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="fa" dir="rtl">
        <body>
        <MenuProvider>
            <Header/>
            <AOSInit/>

                {children}

            <OpacityCover/>
        </MenuProvider>
        </body>
        </html>
    );
}
