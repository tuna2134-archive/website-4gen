import { Metadata, NextPage } from "next";
import Parser from "rss-parser";
import Link from "next/link";
import Image from "next/image";

const parser = new Parser();

export const metadata: Metadata = {
  title: "Articles",
};

const Page: NextPage = async () => {
  const feed = await parser.parseURL("https://zenn.dev/dms_sub/feed");
  return (
    <>
      <h2 className="text-2xl font-bold">Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {feed.items.map((item, index) => (
          <div key={index} className="mt-4">
            <Link href={item.link as string}>
              <h3 className="text-xl font-bold hover:text-lime-600">{`${item.title?.substring(0, 15)}...`}</h3>
            </Link>
            <Image src={item.enclosure?.url as string} alt={item.title as string} className="mt-2 w-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;