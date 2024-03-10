import Link from "next/link";
import { links as headerLinks } from "./header";
import Image from "next/image";

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
  {
    name: "Bluesky",
    path: "https://bsky.app/profile/tuna2134.dev",
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex space-x-20 justify-center md:justify-start">
            <FooterLinkGroup title="Social" links={socialLinks} />
            <FooterLinkGroup title="Links" links={headerLinks} />
          </div>
          <div className="ml-none md:ml-auto h-auto flex items-center justify-center">
            <div>
              <Image width={173} height={24} src="./cloudflare-logo.svg" alt="CloudFlare Logo" />
              <p className="mt-1.5">Powered by CloudFlare Pages</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-center text-slate-400">&copy; 2024 tuna2134</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
