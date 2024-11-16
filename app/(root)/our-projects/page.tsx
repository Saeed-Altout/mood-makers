import Image from "next/image";
import { format } from "date-fns";
import { Metadata } from "next";

import { Hero } from "./_components/hero";
import { projects } from "@/constants";

export const metadata: Metadata = {
  title: "Completed Community Projects",
  description:
    "Explore the completed projects by Mood Makers, showcasing successful renovations and installations across various facilities. From private villas to recreational and therapeutic centers, see how our team enhances spaces to support emotional and physical well-being.",
};

export default function ourProjectsPage() {
  return (
    <main className="min-h-full">
      <Hero />
      <div className="container py-12 space-y-10">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mood-primary">
            Completed Projects
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            Our company is dedicated to creativity, quality, and sustainability,
            delivering innovative, client-focused design solutions that enhance
            lives and foster lasting relationships.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-20">
          {projects.map((item, index) => (
            <div key={index} className="space-y-20">
              <div
                key={index}
                className="border-l-4 border-mood-primary text-mood-primary py-3 pl-4"
              >
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
                  {item.description}
                </p>
              </div>
              <div className="grid grid-cols-1 w-full gap-16">
                {item.imgUrlBefore && (
                  <div className="relative rounded-3xl overflow-hidden">
                    <p className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 z-50 text-white font-bold text-base md:text-xl lg:text-2xl">
                      Before
                    </p>
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
                    <p className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 z-50 text-white font-bold text-base md:text-xl lg:text-2xl">
                      After
                    </p>
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
      </div>
    </main>
  );
}
