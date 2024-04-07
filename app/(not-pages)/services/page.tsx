import Card from "@/components/card";
import { NextPage } from "next";

const services = [
  {
    name: "ユーザー検索",
    description: "ユーザーIDをもとに検索します",
    href: "/services/userinfo",
  },
  {
    name: "Coming soon...",
    description: "Coming soon...",
    href: "/404",
  },
];

const Page: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>
        <h1 className="text-center text-3xl font-bold">サービス一覧</h1>
        <div className="grid grid-cols-1 gap-2 pt-6 md:grid-cols-2">
          {services.map((card, index) => (
            <Card title={card.name} key={index} href={card.href}>
              {card.description}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
