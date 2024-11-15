import { Metadata } from "next";

import { Hero } from "./_components/hero";
import { CoreValues } from "./_components/core-values";
import { ExecutiveSummary } from "./_components/executive-summary";

export const metadata: Metadata = {
  title: "Executive Summary, Vision, and Core Values",
  description:
    "Discover how Mood Makers is reshaping the interior design industry through creativity, sustainability, and excellence. Explore our vision to lead with innovative solutions, our mission to deliver client-centered, sustainable designs, and the core values of integrity, collaboration, and quality that define every project we undertake.",
};

export default function ExecutiveSummaryPage() {
  return (
    <main className="min-h-full pb-20">
      <Hero />
      <ExecutiveSummary />
      <CoreValues />
    </main>
  );
}
