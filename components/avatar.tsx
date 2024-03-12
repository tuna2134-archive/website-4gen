import Image from "next/image";
import { type VariantProps, tv } from "tailwind-variants";

const statusColor = tv({
  base: "w-8 h-8 rounded-full absolute bottom-0 right-0 border border-2",
  variants: {
    status: {
      online: "bg-green-500",
      offline: "bg-gray-400",
      idle: "bg-orange-400",
    },
  },
});

type statusColorProps = VariantProps<typeof statusColor>;

interface AvatarProps extends statusColorProps {
  src: string;
}

export const Avatar: React.FC<AvatarProps> = ({ status, src }) => {
  const statusColorVariants = statusColor({ status });
  return (
    <div className="relative">
      <Image
        src={src}
        alt="avatar"
        width={120}
        height={120}
        className="rounded-full"
      />
      <span className={statusColorVariants} />
    </div>
  );
};
