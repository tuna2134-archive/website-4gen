import Card from "@/components/card";
import { NextPage } from "next";

const services = [
  {
    name: "ユーザー検索",
    description: "ユーザーIDをもとに検索します",
    href: "/services/userinfo"
  },
  {
    name: "Coming soon...",
    description: "Coming soon...",
    href: "/404"
  }
]

const Page: NextPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center">サービス一覧</h1>
        <div className="pt-6 grid gap-2 grid-cols-1 md:grid-cols-2">
          {services.map((card, index) => (
            <Card title={card.name} key={index} href={card.href}>
              {card.description}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Page;
