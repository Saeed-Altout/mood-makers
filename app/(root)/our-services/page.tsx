import Image from "next/image";

import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Typography } from "@/components/ui/typography";
import { heroOurServices, servicesList } from "@/constants";

export default function OurServices() {
  return (
    <main className="min-h-full">
      <Hero
        src={heroOurServices}
        alt="Image hero section"
        title="Mood makers"
        description="Company profile"
      />
      <Heading
        label="Our Services"
        fDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        pDescription="All Kind Building Projects Contracting"
        lDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
      />
      <Section>
        <div className="relative w-full h-[400px] md:h-[700px] lg:h-[900px] xl:h-[1200px]">
          <Image
            src="/topService.png"
            alt="Image"
            className="object-cover"
            fill
            priority
          />
        </div>
        <div className="container space-y-8 py-10">
          <Typography>
            With expertise spanning diverse sectors, our company specializes in
            All Kinds of Building Projects Contracting, offering comprehensive
            solutions tailored to meet every client&apos;s unique needs. From
            commercial complexes to residential developments, our adept team
            ensures meticulous planning, precise execution, and timely
            completion of projects
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-6">
            {servicesList.map((item, index) => (
              <div
                key={index}
                className="bg-mood-primary py-4 pl-10 pr-5 flex justify-start items-center gap-5 rounded-full"
              >
                <span className="text-white">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
                <p className="text-white">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center flex-col gap-10">
            <div className="w-full flex justify-start items-center flex-col gap-5">
              <div className="w-full flex justify-start items-center gap-5">
                <span className="text-mood-primary text-8xl font-semibold">
                  01
                </span>
                <p className="flex-1 text-white bg-mood-primary text-2xl font-semibold py-6 px-4">
                  DOORS & WINDOWS INSTALLATION WORK
                </p>
              </div>
              <Typography>
                our skilled team leverages expertise and premium materials to
                deliver results that exceed expectations. Whether it&apos;s
                upgrading existing structures or outfitting new developments,
                our dedication to quality craftsmanship and customer
                satisfaction remains unwavering, making us the preferred choice
                for all doors and windows installation needs
              </Typography>
            </div>

            <div className="w-full flex justify-start items-center flex-col gap-5">
              <div className="w-full flex justify-start items-center gap-5">
                <span className="text-mood-primary text-8xl font-semibold">
                  02
                </span>
                <p className="flex-1 text-white bg-mood-primary text-2xl font-semibold py-6 px-4">
                  INSTALLATION OF FUUNATURE WORKS
                </p>
              </div>

              <div className="relative bg-mood-primary w-full h-[700px] rounded-[105px] overflow-hidden flex justify-center items-center z-0">
                <div className="relative bg-mood-light h-[97%] w-[95%] md:w-[90%] rounded-[105px] translate-x-[25px] md:translate-x-[45px] lg:translate-x-[65px] flex justify-center items-center z-40">
                  <div className="relative h-[97%] w-[91%] z-50">
                    <Image
                      src="/serve.png"
                      alt="Image"
                      fill
                      className="object-cover rounded-[105px]"
                    />
                  </div>
                </div>
              </div>

              <Typography>
                Our company specializes in Furniture Installation Works,
                offering precise setup services tailored for residential and
                commercial settings. Our dedicated team meticulously assembles
                and positions furniture, ensuring optimal functionality and
                visual appeal in every space
              </Typography>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
