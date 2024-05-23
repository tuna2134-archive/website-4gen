import OldLayout from "@/components/Layout";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <OldLayout>{children}</OldLayout>;
};

export default Layout;
