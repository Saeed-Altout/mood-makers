import type { Metadata } from "next";

import { Hero } from "./_components/hero";
import { Steppers } from "./_components/steppers";

export const metadata: Metadata = {
  title: "Business Process & Project Workflow",
  description:
    "Discover Mood Makers' step-by-step approach to delivering exceptional interior design and fit-out services. From initial client meetings to final handovers, our structured workflow ensures quality and client satisfaction at every stage.",
};

export default function BusinessProcessPage() {
  return (
    <main className="min-h-full">
      <Hero />
      <div className="container py-12 space-y-10">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mood-primary">
            Business Progress
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            Our company is dedicated to creativity, quality, and sustainability,
            delivering innovative, client-focused design solutions that enhance
            lives and foster lasting relationships.
          </p>
        </div>
        <Steppers />
      </div>
    </main>
  );
}
