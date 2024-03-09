import Link from "next/link";
import { links as headerLinks } from "./header";

interface FooterLinkGroupProps {
  title: string;
  links: { name: string; path: string }[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => {
  return (
    <div>
      <p className="text-lg font-bold mb-1.5">{title}</p>
      <ul className="text-sm text-slate-400 space-y-0.5">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const socialLinks = [
  {
    name: "X(Twitter)",
    path: "https://twitter.com/fdc_tuna2134",
  },
  {
    name: "GitHub",
    path: "https://github.com/tuna2134",
  },
  {
    name: "Misskey",
    path: "https://misskey.io/@tuna2134",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto py-10">
        <div className="flex space-x-20">
          <FooterLinkGroup title="Social" links={socialLinks} />
          <FooterLinkGroup title="Links" links={headerLinks} />
        </div>
        <div className="mt-6">
          <p className="text-center text-slate-400">&copy; 2024 tuna2134</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
