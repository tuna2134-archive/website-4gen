"use client";
import { Avatar as BaseAvatar } from "@/components/avatar";
import fetcher, { API_ENDPOINT } from "@/libs/fetch";
import Link from "next/link";
import useSWR from "swr";

const AVATAR_URL: string =
    "https://cdn.discordapp.com/avatars/739702692393517076/689da5236709ab59a0371b7abcac7bda.png?size=1024";

interface UserStatus {
    status: "online" | "offline" | "idle" | undefined;
}

const Avatar: React.FC = () => {
    const { data, error, isLoading } = useSWR<UserStatus>(
        `${API_ENDPOINT}/status`,
        fetcher,
    );
    if (isLoading) return <BaseAvatar status="offline" src={AVATAR_URL} />;
    if (error) return <BaseAvatar status="offline" src={AVATAR_URL} />;
    return <BaseAvatar status={data?.status} src={AVATAR_URL} />;
};

export default function Home() {
    return (
        <main className="h-screen">
            <div className="flex h-full flex-col items-center justify-center space-y-2">
                <Avatar />
                <h1 className="text-center text-3xl font-bold">tuna2134</h1>
                <span>アニメなどの趣味に没頭する豚です</span>
                <Link
                    href="/home"
                    className="rounded bg-lime-700 px-6 py-2 text-white"
                >
                    Go!!!
                </Link>
            </div>
        </main>
    );
}

export const runtime = "edge";
