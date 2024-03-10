import clsx from "clsx";
import React from "react";
import Link from "next/link";
import config from "@/config.json";
import { XIcon } from "./icon";

interface HumburgerMenuProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const HumburgerMenu: React.FC<HumburgerMenuProps> = ({
  className,
  ...props
}) => {
  return (
    <button className={clsx("space-y-2", className)} {...props}>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="h-0.5 w-8 rounded bg-black" />
      ))}
    </button>
  );
};

interface ResponsiveMenuProps extends React.HTMLAttributes<HTMLButtonElement> {
  isShow: boolean;
}

export const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({
  isShow,
  ...props
}) => {
  return (
    <div
      className={clsx(
        `
          animate-fade-in-right fixed left-0 top-0 flex min-h-screen
          w-full justify-between bg-white p-6
          `,
        !isShow && "hidden",
      )}
    >
      <div className="flex w-full flex-col space-y-4">
        {config.headers.navigationLink.map((link, index) => (
          <Link
            className="font-bold hover:text-lime-500"
            href={link.path}
            key={index}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <button {...props}>
          <XIcon />
        </button>
      </div>
    </div>
  );
};
