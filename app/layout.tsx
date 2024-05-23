import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins, Courgette } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const popins = Poppins({ subsets: ["latin"], weight: "400" });
const notoSansJP = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });
const courgette = Courgette({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-courgette",
});

export const metadata: Metadata = {
    title: {
        template: "%s | tuna2134",
        default: "Home",
    },
    description: "tuna2134 is an engineer and student",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body
                className={`${popins.className} ${notoSansJP.className} ${courgette.variable}`}
            >
                {children}
                <GoogleAnalytics gaId={process.env.GA_ID as string} />
            </body>
        </html>
    );
}
export const runtime = "edge";
