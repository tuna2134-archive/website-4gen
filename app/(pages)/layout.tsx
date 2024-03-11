import Footer from "@/components/footer";
import Header from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-[calc(100vh-3.5rem)] w-full p-4 max-w-4xl">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
