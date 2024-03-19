import Link from "next/link";

export const SwitchButton: React.FC<{ page: number; name: string }> = ({
  page,
  name,
}) => {
  return (
    <Link
      href={`/articles?page=${page}`}
      className="rounded px-3 py-1 text-lime-700 hover:bg-lime-100"
    >
      {name}
    </Link>
  );
};
