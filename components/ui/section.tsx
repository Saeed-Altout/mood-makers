import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariant = cva("overflow-x-hidden", {
  variants: {},
  defaultVariants: {},
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariant> {}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        className={cn(sectionVariant({ className }))}
        {...props}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
