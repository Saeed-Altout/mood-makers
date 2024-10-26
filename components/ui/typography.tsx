import { cn } from "@/lib/utils";

export const Typography = ({
  children,
  className,
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base lg:text-lg leading-6 md:leading-8 lg:leading-10 text-justify",
        className
      )}
    >
      {children}
    </p>
  );
};
