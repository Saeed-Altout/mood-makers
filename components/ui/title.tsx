import { CgVercel } from "react-icons/cg";

interface TitleProps {
  label: string;
}

export const Title = ({ label }: TitleProps) => {
  return (
    <span className="flex items-start justify-start">
      <CgVercel className="text-mood-primary w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 rotate-180" />
      <h1 className="text-mood-primary uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold">
        {label}
      </h1>
    </span>
  );
};
