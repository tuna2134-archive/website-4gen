import { NextPage } from "next";
import config from "@/config.json";
import Card from "@/components/card";

const Page: NextPage = () => {
    return (
        <>
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <div className="space-y-4">
                {config.pages.contacts.map((contact, index) => (
                    <Card
                        title={contact.name}
                        iconURL={contact.image}
                        key={index}
                    >
                        <a
                            href={contact.href}
                            className="rounded px-2 py-1 hover:bg-lime-100 hover:text-lime-700"
                        >
                            {contact.hrefTitle}
                        </a>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Page;
export const runtime = "edge";
