import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  iconURL?: string;
  href?: string;
}

interface Argument {
  href?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className,
  iconURL,
  href,
}) => {
  const Component = href ? Link : "div";
  return (
    <Component
      className={clsx("rounded-md bg-white p-4 shadow-md", className)}
      href={href as string}
    >
      <div className="flex items-center space-x-2">
        {iconURL && (
          <Image src={iconURL as string} alt={title} width={32} height={32} />
        )}
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </Component>
  );
};

export default Card;
