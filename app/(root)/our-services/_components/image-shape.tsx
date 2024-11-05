import Image from "next/image";

export const ImageShape = ({
  imageSrc,
  alt,
}: {
  imageSrc: string;
  alt: string;
}) => {
  return (
    <div className="relative z-0 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-[50px] bg-mood-primary sm:h-[600px] sm:rounded-[75px] md:h-[700px] md:rounded-[105px] lg:h-[800px] lg:rounded-[105px]">
      <div className="relative z-40 flex h-[95%] w-[90%] items-center justify-center rounded-[50px] bg-mood-light translate-x-[15px] sm:w-[92%] sm:translate-x-[25px] sm:rounded-[75px] md:w-[90%] md:translate-x-[45px] md:rounded-[105px] lg:w-[85%] lg:translate-x-[65px] lg:rounded-[105px]">
        <div className="relative z-50 h-[95%] w-[88%] sm:w-[90%] md:w-[91%] lg:w-[92%]">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover rounded-[50px] sm:rounded-[75px] md:rounded-[105px]"
          />
        </div>
      </div>
    </div>
  );
};
