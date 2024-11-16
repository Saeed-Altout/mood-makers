import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({
  className,
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      href="/"
      className={cn("capitalize text-white text-3xl font-black", className)}
    >
      Mood Makers
    </Link>
  );
};
