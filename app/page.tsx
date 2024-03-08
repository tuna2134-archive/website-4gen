import Image from "next/image";
import Link from "next/link";

const AVATAR_URL: string =
  "https://cdn.discordapp.com/avatars/739702692393517076/b9fddaa026c1002e8c7d4d8f22978e43.png?size=1024"

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-full items-center flex justify-center flex-col space-y-2">
        <Image src={AVATAR_URL} alt="tuna2134" width={120} height={120} className="rounded-full" />
        <h1 className="text-3xl font-bold text-center">tuna2134</h1>
        <span>趣味に没頭する豚です</span>
        <Link href="/profile" className="bg-lime-700 py-2 px-6 rounded text-white">Go!!!</Link>
      </div>
    </main>
  );
}
