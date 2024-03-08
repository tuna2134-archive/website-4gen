import Header from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto w-full py-4">{children}</main>
    </>
  );
};

export default Layout;
