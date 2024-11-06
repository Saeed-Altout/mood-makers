import type { Metadata } from "next";

import { heroBusinessProcess, progressStep } from "@/constants";

import { Hero } from "@/components/ui/hero";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Business Process & Project Workflow",
  description:
    "Discover Mood Makers' step-by-step approach to delivering exceptional interior design and fit-out services. From initial client meetings to final handovers, our structured workflow ensures quality and client satisfaction at every stage.",
};

export default function BusinessProcessPage() {
  return (
    <main>
      <Hero
        src={heroBusinessProcess}
        alt="Image hero business process"
        title="Mood makers"
        description="Company profile"
      />
      <Heading
        label="Business Process"
        fDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
      />
      <Section className="py-20 space-y-8">
        <div className="container flex flex-col gap-[110px]">
          {progressStep.map((step) => (
            <div key={step.id} className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4 flex items-center justify-start gap-5">
                <span className="text-mood-primary text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  {step.number}
                </span>
                <h3 className="text-mood-primary font-semibold text-xl md:text-2xl lg:text-3xl lg:leading-[60px] min-w-[200px]">
                  {step.description}
                </h3>
              </div>
              <div className="w-full md:max-w-[500px] h-full max-h-[300px] overflow-hidden border-8 border-mood-primary rounded-[25px]">
                <Image
                  src={step.imgUrl}
                  alt={`image - ${step.id}`}
                  width={1000}
                  height={1000}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-2 w-full relative before:absolute before:bg-gradient-to-r before:from-[#39556E00] before:to-mood-primary before:content-[''] before:left-0 before:h-full before:w-[50%] after:absolute after:bg-gradient-to-r after:to-[#39556E00] after:from-mood-primary after:content-[''] after:right-0 after:h-full after:w-[50%]" />
        <Typography className="text-center">
          Get ready to dive with us into an enjoyable journey through the world
          of design, decoration, and engineering. Join us for an exciting
          adventure!
        </Typography>
      </Section>
    </main>
  );
}
