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
                <div
                    key={index}
                    className="dark-bg-white h-0.5 w-8 rounded bg-black"
                />
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
          fixed left-0 top-0 flex w-full
          animate-fade-in-top justify-between bg-white p-8
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
