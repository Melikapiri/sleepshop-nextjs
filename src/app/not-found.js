import React from 'react';
import Header from "@/src/components/modules/Header/Header";
import Footer from "@/src/components/modules/Footer/Footer";

function NotFound(props) {
    return (
        <div>
            <Header/>
            <div className="flex items-center justify-center">
                <img src="/404.gif" alt="not found page"/>
            </div>
            <Footer/>
        </div>
    );
}

export default NotFound;