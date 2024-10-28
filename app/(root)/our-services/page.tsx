import Image from "next/image";

import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Typography } from "@/components/ui/typography";
import { heroOurServices } from "@/constants";

export default function OurServices() {
  return (
    <main className="min-h-full">
      <Hero
        src={heroOurServices}
        alt="Image hero section"
        title="Mood makers"
        description="Company profile"
      />
      <Heading
        label="Our Services"
        fDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        pDescription="All Kind Building Projects Contracting"
        lDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
      />
      <Section>
        <div className="relative w-full h-[400px] md:h-[700px] lg:h-[900px] xl:h-[1200px]">
          <Image
            src="/topService.png"
            alt="Image"
            className="object-cover"
            fill
            priority
          />
        </div>
        <div className="container space-y-8 py-10">
          <Typography>
            With expertise spanning diverse sectors, our company specializes in
            All Kinds of Building Projects Contracting, offering comprehensive
            solutions tailored to meet every client&apos;s unique needs. From
            commercial complexes to residential developments, our adept team
            ensures meticulous planning, precise execution, and timely
            completion of projects
          </Typography>
        </div>
      </Section>
    </main>
  );
}
