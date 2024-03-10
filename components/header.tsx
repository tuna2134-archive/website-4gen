import Link from "next/link";

export const links = [
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "Docs",
    path: "https://docs.tuna2134.dev",
  },
];

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b">
      <div className="mx-auto flex h-full w-full max-w-4xl items-center justify-between p-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">tuna2134</h1>
        </Link>
        <div className="space-x-4">
          {links.map((link, index) => (
            <Link href={link.path} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <a
            href="https://discord.gg/4R83HQZGcV"
            className="rounded bg-[#5865F2] px-4 py-1.5 text-white"
          >
            Join
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
