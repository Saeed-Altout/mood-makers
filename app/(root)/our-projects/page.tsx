import { heroOurProjects, projects } from "@/constants";

import { Hero } from "@/components/ui/hero";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { CallOut } from "@/components/ui/call-out";
import { Section } from "@/components/ui/section";
import { format } from "date-fns";

export default function ourProjectsPage() {
  return (
    <main className="min-h-full">
      <Hero
        src={heroOurProjects}
        alt="Image hero section"
        title="Mood makers"
        description="Company profile"
      />
      <Heading
        label="Completed Projects"
        fDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        pDescription="a brief explanation for Lorem ipsum dolit"
        lDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
      />
      <Section id="papers" className="py-10">
        <div className="container space-y-10 grid grid-cols-1 gap-20">
          {projects.map((item, index) => (
            <div key={index} className="space-y-10">
              <CallOut variant="secondary" align="left">
                <h3 className="text-mood-primary text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sans font-bold uppercase">
                  {item.title}
                </h3>
                <p className="text-mood-primary capitalize text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  {item.description}
                </p>
              </CallOut>
              <Typography>{item.about}</Typography>
              <div className="grid grid-cols-1 w-full gap-16">
                {item.imgUrlBefore && (
                  <div className="relative rounded-3xl overflow-hidden">
                    <p className="absolute top-4 md:top-6 lg:top-8 right-4 md:right-6 lg:right-8 z-50 text-white font-bold text-base md:text-xl lg:text-2xl">
                      {format(item.date, "dd")} | {format(item.date, "MM")} |
                      {format(item.date, "yyyy")}
                    </p>
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#39556E77] to-[#19344B11]"></div>
                    <Image
                      src={item.imgUrlBefore ?? ""}
                      alt={`project-before-${index}`}
                      className="object-cover w-full"
                      width={1000}
                      height={1000}
                    />
                  </div>
                )}
                {item.imgUrlAfter && (
                  <div className="relative rounded-3xl overflow-hidden">
                    <p className="absolute top-4 md:top-6 lg:top-8 right-4 md:right-6 lg:right-8 z-50 text-white font-bold text-base md:text-xl lg:text-2xl">
                      {format(item.date, "dd")} | {format(item.date, "MM")} |{" "}
                      {format(item.date, "yyyy")}
                    </p>
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#39556E77] to-[#19344B11]"></div>
                    <Image
                      src={item.imgUrlAfter ?? ""}
                      alt={`project-after-${index + 1}`}
                      className="object-cover w-full"
                      width={1000}
                      height={1000}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
