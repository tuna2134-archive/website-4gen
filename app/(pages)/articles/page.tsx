import { Metadata } from "next";
import Parser from "rss-parser";
import Link from "next/link";
import Image from "next/image";
import twoDimArray from "@/libs/twoDimArray";

const parser = new Parser();

export const metadata: Metadata = {
  title: "Articles",
};

const SwitchButton: React.FC<{ page: number, name: string }> = ({ page, name }) => {
  return (
    <Link href={`/articles?page=${page}`} className="hover:bg-lime-100 rounded px-3 py-1">
      {name}
    </Link>
  );
}

const Page = async ({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const feed = await parser.parseURL("https://zenn.dev/dms_sub/feed");
  const items = twoDimArray({ data: feed.items, size: 6 });
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  return (
    <>
      <h2 className="text-3xl font-bold">Articles</h2>
      <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items[page - 1].map((item, index) => (
          <div key={index} className="mt-4">
            <Link href={item.link as string}>
              <h3 className="text-xl font-bold hover:text-lime-600">{`${item.title?.substring(0, 15)}...`}</h3>
            </Link>
            <Image
              width={1200}
              height={630}
              src={item.enclosure?.url as string}
              alt={item.title as string}
              className="mt-2 w-full"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        {page > 1 && <SwitchButton page={page - 1} name="Back" />}
        {page < items.length && <SwitchButton page={page + 1} name="Next" />}
      </div>
    </>
  );
};

export default Page;
