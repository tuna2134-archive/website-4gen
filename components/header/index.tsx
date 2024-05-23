"use client";
import Link from "next/link";
import config from "@/config.json";
import React from "react";
import { HumburgerMenu, ResponsiveMenu } from "./menus";

const Header: React.FC = () => {
    const [isShow, setIsShow] = React.useState(false);
    const handleClick = () => {
        setIsShow(!isShow);
    };
    return (
        <header className="h-14 border-b">
            <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6 md:px-9">
                <HumburgerMenu
                    className="absolute md:hidden"
                    onClick={handleClick}
                />
                <ResponsiveMenu isShow={isShow} onClick={handleClick} />
                <Link
                    href="/home"
                    className="md:justify-left flex w-full justify-center md:w-auto"
                >
                    <h1 className="text-2xl font-bold">tuna2134</h1>
                </Link>
                <div className="hidden space-x-4 md:flex">
                    {config.headers.navigationLink.map((link, index) => (
                        <Link href={link.path} key={index}>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex">
                    <a
                        href="https://discord.gg/4R83HQZGcV"
                        className="rounded bg-[#5865F2] px-4 py-1.5 text-white"
                    >
                        Join
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
