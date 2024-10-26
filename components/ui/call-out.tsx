import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const callOutVariants = cva(
  "block relative h-auto before:absolute before:top-0 before:h-full before:w-full flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4",
  {
    variants: {
      variant: {
        primary:
          "w-[75%] bg-mood-primary before:bg-mood-primary py-6 rounded-l-full",
        secondary:
          "w-[75%] md:w-[50%] bg-mood-secondary before:bg-mood-secondary py-8 rounded-r-full",
      },
      align: {
        left: "pr-8 translate-x-0 before:right-full",
        right: "pl-8 translate-x-[25%] before:left-[98%]",
      },
    },
    defaultVariants: {
      variant: "primary",
      align: "left",
    },
  }
);

export interface CallOutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof callOutVariants> {}

export const CallOut = React.forwardRef<HTMLDivElement, CallOutProps>(
  ({ className, children, variant, align, ...props }, ref) => {
    return (
      <div
        className={cn(callOutVariants({ variant, align, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CallOut.displayName = "CallOut";
