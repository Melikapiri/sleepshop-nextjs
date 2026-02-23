const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./Components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    lg: '1.25rem',
                },
            },
            fontFamily: {
                "Yekan-bold": "Yekan Bold",
                "Yekan-Medium": "Yekan Medium",
                "Yekan-Regula": "Yekan Regular",
                "Yekan-Light": "Yekan Light",
                "Yekan-SemiBold": "Yekan SemiBold",
                // Modam fonts
                "Modam-light": "Modam Light",
                "Modam-Regular": "Modam Regular",
                "Modam-bold": "Modam Bold",
                "Modam-ExtraBold": "Modam ExtraBold",
                "Modam-SemiBold": "Modam Semi",
            },
            colors: {
                primaryColor: "#1F2732",
                secondPrimaryColor: "#EDF6FD",
                lightBlue: "#5EB5F8",
                lightGray: "#858585",
                lightGray2: "#F4F4F4",
                lightGray3: "#FAFAFA",
                lightTextGray:"#929292",
                dark: "#363636",
                star:"#FF9F0E",
                softGray:"#ADADAD"
            },
            spacing: {
                '4.5': '1.125rem',
            },
            boxShadow: {
                "100": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
            },

        },
    },
    plugins: [function ({addVariant}) {
        addVariant('child', '&>*');
        addVariant('child-hover', '&>*:hover')
    }],
}