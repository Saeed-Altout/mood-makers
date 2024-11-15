import { coreValue } from "@/constants";

export const CoreValues = () => {
  return (
    <div className="container py-12 space-y-10">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mood-primary">
          Core Values
        </h1>
        <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
          Mood Makers&apos; core values emphasize creativity, quality,
          sustainability, client focus, integrity, and collaboration, driving
          innovative, client-centered, and sustainable design solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValue.map(({ title, description }, index) => (
          <div
            key={index}
            className="space-y-3 p-5 rounded-md border border-mood-primary bg-transparent hover:bg-mood-primary/5 hover:scale-105 duration-300 ease-in-out"
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-mood-primary">
              {title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
