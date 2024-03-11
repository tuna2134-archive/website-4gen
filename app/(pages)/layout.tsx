import Footer from "@/components/footer";
import Header from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-[calc(100vh-3.5rem)] w-full max-w-2xl p-4 xl:max-w-4xl">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
