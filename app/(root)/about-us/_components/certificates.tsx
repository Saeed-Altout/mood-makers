import Image from "next/image";

import { CallOut } from "@/components/ui/call-out";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

export const Certificates = () => {
  return (
    <Section id="certificates" className="py-10">
      <div className="container space-y-10">
        <CallOut variant="secondary" align="left">
          <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sans font-bold uppercase">
            Lorem ipsum dolor sit
          </h3>
          <p className="text-mood-primary capitalize text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Lorem ipsum dolor.
          </p>
        </CallOut>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="relative h-[550px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/certificate.png"
                alt={`certificate-${index}`}
                className="object-cover"
                fill
                priority
              />
            </div>
          ))}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/worker.png"
              alt={`worker`}
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
        <div className="flex justify-center items-center pt-10">
          <div className="h-2 w-full bg-gradient-to-l from-mood-primary to-[#00000000]"></div>
          <div className="h-2 w-full bg-gradient-to-r from-mood-primary to-[#00000000]"></div>
        </div>
        <Typography className="text-center max-w-3xl mx-auto">
          Get ready to dive with us into an enjoyable journey through the world
          of design, decoration, and engineering.
        </Typography>
      </div>
    </Section>
  );
};
