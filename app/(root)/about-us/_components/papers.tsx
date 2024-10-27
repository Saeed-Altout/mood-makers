import Image from "next/image";

import { CallOut } from "@/components/ui/call-out";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

export const Papers = () => {
  const certificationData = [
    {
      id: 1,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      imgUrl: "/certificate (1).png",
      date: new Date().getDate(),
    },
    {
      id: 2,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      imgUrl: "/certificate (2).png",
      date: new Date().getDate(),
    },
    {
      id: 3,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      imgUrl: "/certificate (3).png",
      date: new Date().getDate(),
    },
    {
      id: 4,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      imgUrl: "/certificate.png",
      date: new Date().getDate(),
    },
    {
      id: 5,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      imgUrl: "/certificate.png",
      date: new Date().getDate(),
    },
    {
      id: 6,
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      imgUrl: "/certificate.png",
      date: new Date().getDate(),
    },
  ];

  return (
    <Section id="papers" className="py-10">
      <div className="container space-y-10 grid grid-cols-1 gap-20">
        {certificationData.map((item, index) => (
          <div key={index} className="space-y-10">
            <CallOut variant="secondary" align="left">
              <h3 className="text-mood-primary text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sans font-bold uppercase">
                Lorem ipsum dolor sit
              </h3>
              <p className="text-mood-primary capitalize text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Lorem ipsum dolor.
              </p>
            </CallOut>
            <Typography>{item.about}</Typography>
            <div className="relative h-[500px] md:h-[800px] lg:h-[1100] xl:h-[1500px] w-full rounded-2xl overflow-hidden">
              <Image
                src={item.imgUrl}
                alt={`paper-${index}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
