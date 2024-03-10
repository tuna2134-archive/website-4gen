import { Metadata, NextPage } from "next";
import config from "@/config.json";
import Card from "@/components/card";

export const metadata: Metadata = {
  title: "Works",
  description: "Works by tuna2134",
};

const Page: NextPage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">Works</h2>
      <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
        {config.pages.works.map((work, index) => (
          <Card key={index} title={work.title}>
            <p className="mb-4">{work.description}</p>
            <a
              href={work.link}
              className="px-2 py-1 text-lime-700 hover:rounded hover:bg-lime-100 hover:px-2 hover:py-1"
            >
              Go to website
            </a>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Page;
