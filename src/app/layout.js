import './globals.css';
import {MenuProvider} from "@/src/Context/AppContext";
import OpacityCover from "@/src/components/modules/OpacityCover/OpacityCover";
import AOSInit from "@/src/utils/AOS";
import { ToastContainer, Slide } from 'react-toastify';

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
            <ToastContainer
                toastClassName="toast-custom"
                position="top-center"
                autoClose={2000}
                closeOnClick={true}
                pauseOnHover={false}
                draggable
                transition={Slide}
            />
            <AOSInit/>
            {children}
            <OpacityCover/>
        </MenuProvider>

        </body>
        </html>
    );
}
