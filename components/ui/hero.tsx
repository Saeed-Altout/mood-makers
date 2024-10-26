import Image, { StaticImageData } from "next/image";
import { Section } from "@/components/ui/section";

interface HeroProps {
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
}

export const Hero = ({ src, alt, title, description }: HeroProps) => {
  return (
    <Section
      id="hero"
      className="relative h-[575px] md:h-[675px] lg:h-[775px] xl:h-[875px] w-full"
    >
      <Image
        src={src}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover"
        priority
      />
      <div className="relative container h-full w-full flex flex-col justify-end items-start gap-2 md:gap-3 lg:gap-4 xl:gap-5 pb-24">
        <h1 className="text-white uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold">
          {title}
        </h1>
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#FFFFFF] to-[#99999911]" />
        <p className="text-white uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
          {description}
        </p>
      </div>
    </Section>
  );
};
