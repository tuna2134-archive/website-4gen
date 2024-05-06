import React from "react";
import UserComponent from "./server";

interface Props {
  searchParams: {
    userid: string;
  };
}

const Page: React.FC<Props> = ({ searchParams }) => {
  if (!searchParams.userid) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div>
          <h2 className="text-center text-3xl font-bold">ユーザー検索</h2>
          <div className="mt-6">
            <form className="flex items-center space-x-2">
              <input
                name="userid"
                className="min-h-8 rounded-md border border-slate-400 px-2 text-sm outline-none"
                placeholder="ユーザーID"
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
  return <UserComponent userid={searchParams.userid as string} />;
};

export default Page;
export const runtime = "edge";
