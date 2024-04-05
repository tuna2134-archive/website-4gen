"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="hidden h-full w-full bg-violet-50 px-12 py-6 md:block md:w-1/4">
        <Disclosure>
          <Disclosure.Button className="py-2">Discord関連</Disclosure.Button>
          <Disclosure.Panel className="px-1.5 text-gray-500">
            <Link href="/services/userinfo">ユーザー検索</Link>
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="h-full w-full md:w-3/4">{children}</div>
    </div>
  );
};

export default Layout;
