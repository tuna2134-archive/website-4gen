import Link from "next/link";

const links = [
  {
    name: "Profile",
    path: "/profile",
  }
]

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b">
      <div className="w-full h-full flex justify-center items-center max-w-4xl mx-auto">
        <Link href="/"><h1 className="text-2xl font-bold">tuna2134</h1></Link>
        <div className="ml-auto space-x-4">
          {links.map((link, index) => (
            <Link href={link.path} key={index}>{link.name}</Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header;