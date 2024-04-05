"use client";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import React from "react";
import UserComponent from "./server";

const Page: NextPage = () => {
  const searchParams = useSearchParams();
  if (!searchParams.get("userid")) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div>
          <h2 className="text-center text-3xl font-bold">ユーザー検索</h2>
          <div className="mt-3 flex space-x-2">
            <form>
              <input
                name="userid"
                className="h-8 rounded-xl border border-gray-500 p-2 outline-none"
              />
              <button className="mx-2 rounded bg-violet-500 px-3 py-1 text-white">
                検索
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return <UserComponent userid={searchParams.get("userid") as string} />;
};

export default Page;
export const runtime = "edge";
