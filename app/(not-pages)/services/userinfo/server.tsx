"use server";
import Card from "@/components/card";
import React from "react";

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
  const user: User = await res.json();
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card title="ユーザー検索">
        <UserField name="ユーザー名" value={user.username} />
        <UserField name="ユーザーグローバル名" value={user.global_name} />
        <UserField name="ユーザータグ" value={user.discriminator} />
        <UserField name="ユーザーID" value={user.id} />
        <UserField
          name="ボットかどうか？"
          value={user.bot ? "はい" : "いいえ"}
        />
      </Card>
    </div>
  );
};

export default UserComponent;
