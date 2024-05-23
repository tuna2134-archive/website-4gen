import OldLayout from "@/components/Layout";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <OldLayout page={false}>{children}</OldLayout>;
};

export default Layout;
