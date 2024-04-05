"use client";
import { NextPage } from "next";
import React from "react";

const Page: NextPage = () => {
  const [userId, setUserId] = React.useState("");
  const handleUserIdInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value as string);
  }
  const handleSubmit = () => {
    location.href = `/services/userinfo?id={${userId}}`;
  }
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>
        <h2 className="text-3xl font-bold text-center">ユーザー検索</h2>
        <div className="flex space-x-2 mt-3">
          <form onSubmit={handleSubmit}>
            <input onChange={handleUserIdInput} name="userid" className="border h-8 border-gray-500 rounded-xl outline-none p-2" />
            <button className="mx-2 bg-violet-500 text-white rounded px-3 py-1">検索</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
export const runtime = "edge";
