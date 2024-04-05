import { tv } from "tailwind-variants";
import Header from "../header";
import Footer from "../footer";
import React from "react";

const LayoutVariant = tv({
  base: "mx-auto min-h-[calc(100vh-3.5rem)] w-full",
  variants: {
    page: {
      true: "max-w-4xl p-6 md:p-9 xl:max-w-6xl",
      false: "",
    },
  },
});

interface LayoutProps {
  children: React.ReactNode;
  page?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, page = true }) => {
  const lv = LayoutVariant({ page: page });
  return (
    <>
      <Header />
      <main className={lv}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;