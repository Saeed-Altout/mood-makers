export const HeadingStep = ({
  stepNumber,
  title,
}: {
  stepNumber: string;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-5 w-full">
      <h2 className="text-mood-primary text-4xl md:text-6xl lg:text-8xl ">
        {stepNumber}
      </h2>
      <div className="flex-grow bg-mood-primary py-4 md:py-6 lg:py-8 px-5">
        <h3 className="text-white text-lg md:text-2xl lg:text-4xl xl:text-6xl">
          {title.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};
