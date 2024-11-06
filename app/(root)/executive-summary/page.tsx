import { Hero } from "@/components/ui/hero";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { dataSummary, heroExecutiveSummary } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Summary, Vision, and Core Values",
  description:
    "Explore Mood Makers' mission to transform spaces through creativity, sustainability, and excellence. Learn about our vision to be an industry leader, our commitment to sustainable and client-centered practices, and the core values that guide our work.",
};

export default function ExecutiveSummary() {
  return (
    <main className="min-h-full">
      <Hero
        src={heroExecutiveSummary}
        alt="Image hero section"
        title="Mood makers"
        description="Company profile"
      />
      <Heading
        label="Executive Summary"
        fDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        lDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
      />
      <Section id="summary" className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-10">
            {dataSummary.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-10">
                <div className="bg-mood-primary flex justify-center items-center md:max-w-16 rounded-md md:rounded-full">
                  <p className="text-white rotate-0 md:-rotate-90 py-2 md:py-0 px-5 text-nowrap text-lg md:text-xl lg:text-2xl font-sans">
                    {item.title}
                  </p>
                </div>
                {item.description && (
                  <Typography className="flex-1">{item.description}</Typography>
                )}
                {item.children.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {item.children.map((item, index) => (
                      <div key={index} className="space-y-5">
                        <h3 className="text-mood-primary font-sans text-2xl md:text-3xl font-semibold md:text-center">
                          {item.title}
                        </h3>
                        <Typography className="md:text-center">
                          {item.description}
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
