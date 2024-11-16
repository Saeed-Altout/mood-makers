import Image from "next/image";

export const ImageShape = ({
  imageSrc,
  alt,
}: {
  imageSrc: string;
  alt: string;
}) => {
  return (
    <div className="bg-mood-primary pl-8 md:pl-14 lg:pl-20 py-3 rounded-[100px]">
      <div className="bg-mood-light p-5 rounded-[100px]">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[100px]">
          <Image src={imageSrc} alt={alt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};
