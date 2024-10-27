import type { Metadata } from "next";

import { heroAboutUs } from "@/constants";
import { Papers } from "./_components/papers";

import { Hero } from "@/components/ui/hero";
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <main>
      <Hero
        src={heroAboutUs}
        alt="Image hero section"
        title="Mood makers"
        description="Company profile"
      />
      <Heading
        label="About Us"
        fDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        pDescription="a brief explanation for Lorem ipsum dolit"
        lDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
      />
      <Papers />
    </main>
  );
}
