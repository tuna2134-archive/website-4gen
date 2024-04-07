"use server";
import Card from "@/components/card";
import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import bigIntSupport from "dayjs/plugin/bigIntSupport";

dayjs.extend(bigIntSupport);

interface UserComponentProps {
  userid: string;
}

interface User {
  username: string;
  avatar: string;
  global_name: string;
  bot: boolean;
  discriminator: string;
  id: string;
  createdAt?: BigInt;
}

interface UserFieldProps {
  name: string;
  value: string;
}

const UserField: React.FC<UserFieldProps> = ({ name, value }) => {
  return (
    <div className="pt-2">
      <p className="text-xl font-bold">{name}</p>
      <p className="pt-1">{value}</p>
    </div>
  );
};

const UserComponent: React.FC<UserComponentProps> = async ({ userid }) => {
  const res = await fetch(`https://discord.com/api/v10/users/${userid}`, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
    },
  });
  let user: User = await res.json();
  user.createdAt = (BigInt(user.id) >> BigInt(22)) + BigInt(1420070400000);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
      <Card title="ユーザー検索" className="min-w-80">
        <div>
          <img
            className="rounded-full"
            height={100}
            width={100}
            src={`https://cdn.discordapp.com/avatars/${userid}/${user.avatar}.png?size=1024`}
            alt="avatar"
          ></img>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <UserField name="ユーザー名" value={user.username} />
          {typeof user.global_name !== null ?? (
            <UserField name="ユーザーグローバル名" value={user.global_name} />
          )}
          <UserField name="ユーザータグ" value={user.discriminator} />
          <UserField name="ユーザーID" value={user.id} />
          <UserField
            name="ボットかどうか？"
            value={user.bot ? "はい" : "いいえ"}
          />
          <UserField
            name="ユーザー登録日"
            value={dayjs(user.createdAt).format()}
          />
        </div>
      </Card>
      <Link href="/services/userinfo" className="hover:text-violet-500">
        前に戻る
      </Link>
    </div>
  );
};

export default UserComponent;
