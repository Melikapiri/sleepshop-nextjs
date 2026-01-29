import React from 'react';
import Header from "@/src/Components/Modules/Shared/Header/Header";
import Footer from "@/src/Components/Modules/Shared/Footer/Footer";

function NotFound(props) {
    return (
        <div>
            <Header/>
            <div className="flex items-center justify-center">
                <img src="/404.gif" alt="not found page"/>
            </div>
        </div>
    );
}

export default NotFound;