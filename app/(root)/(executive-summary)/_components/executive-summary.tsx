import { executiveSummary } from "@/constants";

export const ExecutiveSummary = () => {
  return (
    <div className="container py-12 space-y-10">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mood-primary">
          Executive Summary
        </h1>
        <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
          Our company is dedicated to creativity, quality, and sustainability,
          delivering innovative, client-focused design solutions that enhance
          lives and foster lasting relationships.
        </p>
      </div>
      {executiveSummary.map(({ title, description }, index) => (
        <div key={index} className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-semibold border-l-4 border-mood-primary text-mood-primary py-3 pl-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};
