import Card from "@/components/card";
import { NextPage } from "next";

const skills = [
  "Python",
  "TypeScript/JavaScript",
  "React/Next.js",
  "Rust",
  "C++",
  "Linux",
  "Kubernetes",
]

const Page: NextPage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">tuna2134's profile</h2>
      <Card className="mt-4" title="事故紹介">
        <p>
          タイトルはふざけていますが、ほっといて<br />
          どうも、tuna2134です。中学1年生からプログラミングをしており、最初に始めた言語はPythonで
          そこから、TypeScriptなどいろいろやっています。始めた最初の時はDiscord Botを作っていましたが、最近は
          フロントエンドを中心にやっています。
        </p>
      </Card>
      <Card title="スキル" className="mt-4">
        <p>僕ができるプログラミング言語およびツールは以下の通りです。</p>
        <ul className="list-inside list-disc">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Card>
    </>
  )
}

export default Page;