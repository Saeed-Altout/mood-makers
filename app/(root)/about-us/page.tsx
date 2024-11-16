import type { Metadata } from "next";
import Image from "next/image";

import { Hero } from "./_components/hero";
import { certificationData } from "@/constants";

export const metadata: Metadata = {
  title: "Community Project for Emotional Wellness",
  description:
    "Discover Mood Makers, a community-driven project dedicated to promoting emotional wellness. Learn about our mission, view important certifications, and understand how we are making a difference.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-full">
      <Hero />
      <div className="container py-12 space-y-10">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mood-primary">
            About us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            Our company is dedicated to creativity, quality, and sustainability,
            delivering innovative, client-focused design solutions that enhance
            lives and foster lasting relationships.
          </p>
        </div>
        <div className="container space-y-10 grid grid-cols-1 gap-20">
          {certificationData.map((item, index) => (
            <Image
              key={index}
              src={item.imgUrl}
              alt={`paper-${index}`}
              width={1000}
              height={1000}
              className="object-contain h-[500px] md:h-[800px] lg:h-[1100] xl:h-[1500px] w-auto rounded-2xl "
            />
          ))}
        </div>
      </div>
    </main>
  );
}
