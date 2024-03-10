import clsx from "clsx";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={clsx("rounded-md bg-white p-4 shadow-md", className)}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;
