import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "fade-in-top":
                    "fade-in-top 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
            },
            keyframes: {
                "fade-in-top": {
                    "0%": {
                        transform: "translateY(-50px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
            },
            fontFamily: {
                courgette: ["var(--font-courgette)"],
            },
        },
    },
    plugins: [],
};
export default config;
