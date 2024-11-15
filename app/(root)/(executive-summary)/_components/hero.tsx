export const Hero = () => {
  return (
    <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen w-full bg-[url('/hero-executive-summary.png')] bg-center bg-no-repeat bg-cover">
      <div className="relative container h-full w-full flex flex-col justify-end items-start gap-2 md:gap-3 lg:gap-4 xl:gap-5 pb-12">
        <h1 className="text-white uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold">
          Mood makers
        </h1>
        <div className="h-1 w-1/2 bg-gradient-to-r from-[#FFFFFF] to-[#99999911]" />
        <p className="text-white uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
          Company profile
        </p>
      </div>
    </div>
  );
};
