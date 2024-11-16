export const HeadingStep = ({
  stepNumber,
  title,
}: {
  stepNumber: string;
  title: string;
}) => {
  return (
    <h3 className="text-white text-lg md:text-2xl lg:text-4xl bg-mood-primary p-5 rounded-md">
      {stepNumber} - {title}
    </h3>
  );
};
