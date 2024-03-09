import Card from "@/components/card";
import { NextPage, Metadata } from "next";

const skills = [
  "Python",
  "TypeScript/JavaScript",
  "React/Next.js",
  "Rust",
  "C++",
  "Linux",
  "Kubernetes",
];

const SNSAccounts = [
  {
    name: "X(Twitter)",
    href: "https://twitter.com/fdc_tuna2134",
  },
  {
    name: "GitHub",
    href: "https://github.com/tuna2134",
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/tuna2134.dev",
  },
  {
    name: "Misskey",
    href: "https://misskey.io/@tuna2134",
  },
  {
    name: "Discord",
    href: "https://discord.com/users/739702692393517076",
  },
];

const organizations = [
  {
    name: "neodyland",
    href: "https://neody.land",
  },
  {
    name: "KuronekoServer",
    href: "https://kuroneko6423.com/",
  }
];

export const metadata: Metadata = {
  title: "Profile",
};

const Page: NextPage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">tuna2134`s profile</h2>
      <Card className="mt-4" title="事故紹介">
        <p>
          タイトルはふざけていますが、ほっといて
          <br />
          どうも、tuna2134です。中学1年生からプログラミングをしており、最初に始めた言語はPythonで
          そこから、TypeScriptなどいろいろやっています。始めた最初の時はDiscord
          Botを作っていましたが、最近はフロントエンドを中心にやっています。
        </p>
      </Card>
      <Card title="スキル" className="mt-4">
        <p>僕ができるプログラミング言語およびツールは以下の通りです。</p>
        <ul className="mt-2 list-inside list-disc">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Card>
      <Card title="所属組織" className="mt-4">
        <p>僕が所属している組織</p>
        <ul className="mt-2 list-inside list-disc">
          {organizations.map((organization, index) => (
            <li key={index}>
              <a className="hover:text-lime-500" href={organization.href}>
                {organization.name}
              </a>
            </li>
          ))}
        </ul>
      </Card>
      <Card title="SNS" className="mt-4">
        <p>僕が所持しているSNSアカウント</p>
        <ul className="mt-2 list-inside list-disc">
          {SNSAccounts.map((account, index) => (
            <li key={index}>
              <a className="hover:text-lime-500" href={account.href}>
                {account.name}
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default Page;
