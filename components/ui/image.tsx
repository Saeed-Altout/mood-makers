"use client";

import * as React from "react";
import Image from "next/image";

interface ImageCmpProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const ImageCmp = React.forwardRef<HTMLImageElement, ImageCmpProps>(
  ({ src, alt, width, height, className, ...props }, ref) => {
    const [env] = React.useState<"development" | "production">("development");

    if (env === "production") {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src={src} alt={alt} {...props} className={className} />
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        ref={ref}
        width={width}
        height={height}
        priority
        className={className}
        {...props}
      />
    );
  }
);

ImageCmp.displayName = "Image";
