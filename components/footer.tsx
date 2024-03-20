import Link from "next/link";
import config from "../config.json";
import Image from "next/image";

interface FooterLinkGroupProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => {
  return (
    <div>
      <p className="mb-1.5 text-lg font-bold">{title}</p>
      <ul className="space-y-0.5 text-sm text-slate-400">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#201722] text-white">
      <div className="mx-auto max-w-4xl xl:max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center space-x-20 md:justify-start">
            <FooterLinkGroup title="Social" links={config.footer.socialLinks} />
            <FooterLinkGroup title="Links" links={config.footer.links} />
          </div>
          <div className="ml-none mt-6 flex h-auto items-center justify-center md:ml-auto">
            <div>
              <div className="flex justify-center">
                <Image
                  width={173}
                  height={24}
                  src="./cloudflare-logo.svg"
                  alt="CloudFlare Logo"
                />
              </div>
              <p className="mt-1.5 text-slate-400">
                Powered by CloudFlare Pages
              </p>
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
