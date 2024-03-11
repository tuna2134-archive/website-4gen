import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Poppins } from "next/font/google";
import "./globals.css";

const popins = Poppins({ subsets: ["latin"], weight: "400" });
const notoSansJP = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

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
      <body className={`${popins.className} ${notoSansJP.className}`}>
        {children}
      </body>
    </html>
  );
}
