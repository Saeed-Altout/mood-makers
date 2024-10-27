import { heroOurProjects } from "@/constants";

import { Hero } from "@/components/ui/hero";
import { Heading } from "@/components/ui/heading";

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
    </main>
  );
}
