import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import twoDimArray from "@/libs/twoDimArray";
import { XMLParser } from "fast-xml-parser";
import { SwitchButton } from "@/components/pages/articles";

const parser = new XMLParser({
    ignoreAttributes: false,
});

export const metadata: Metadata = {
    title: "Articles",
    description: "記事一覧です。",
};

interface RssItem {
    title?: string;
    link?: string;
    enclosure: {
        "@_url": string;
    };
}

const Page = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) => {
    const data = parser.parse(
        await (await fetch("https://zenn.dev/dms_sub/feed")).text(),
    );
    const items = twoDimArray<RssItem>({
        data: data.rss.channel.item,
        size: 6,
    });
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
                            src={item.enclosure["@_url"] as string}
                            alt={item.title as string}
                            className="mt-2 w-full"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-4">
                {page > 1 && <SwitchButton page={page - 1} name="Back" />}
                {page < items.length && (
                    <SwitchButton page={page + 1} name="Next" />
                )}
            </div>
        </>
    );
};

export default Page;

export const runtime = "edge";
