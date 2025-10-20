import React from 'react';

function EmptyProductsMessage({message}) {
    return (
        <div
            className="text-center   max-w-xl mx-auto bg-primaryColor/80 text-secondPrimaryColor  rounded-2xl py-5 px-5 sm:px-20 m-5">{message}</div>
    );
}

export default EmptyProductsMessage;