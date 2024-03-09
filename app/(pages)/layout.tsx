import Footer from "@/components/footer";
import Header from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto w-full p-4 min-h-[100vh-3.5rem]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
