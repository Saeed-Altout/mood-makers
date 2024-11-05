import Image from "next/image";

import { Hero } from "@/components/ui/hero";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";

import { ServicesStep } from "./_components/service-step";
import { heroOurServices, servicesList } from "@/constants";
import { HeadingStep } from "./_components/heading-step";

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
      <Section id="services">
        <div className="relative w-full h-[400px] md:h-[700px] lg:h-[900px] xl:h-[1200px]">
          <Image
            src="/topService.png"
            alt="Image"
            className="object-cover"
            fill
            priority
          />
        </div>
        <div className="container space-y-12 py-20">
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
          <ServicesStep />
          <div className="space-y-8">
            <HeadingStep title="landscaping works" stepNumber="06" />
            <div className="flex justify-between items-start gap-20 flex-col md:flex-row">
              <Typography className="flex-1">
                At Mood Makers, landscaping transforms any environment,
                seamlessly blending aesthetics, nature, and culture into a
                contemporary practice for your enjoyment. Our dedicated team
                creates beautiful gardens with passion and professionalism,
                enhancing the value of your property and bringing your outdoor
                spaces to life.
              </Typography>
              <div className="bg-mood-secondary w-full md:w-1/2 h-[400px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-06-1.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-mood-secondary w-full h-[400px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-06-1-1.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
              <div className="bg-mood-secondary w-full h-[400px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-06-1-2.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
              <div className="bg-mood-secondary w-full h-[400px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-06-1-3.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex items-center justify-between flex-col lg:flex-row gap-10">
                <div className="space-y-3 flex-1">
                  <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Screed and plastering works
                  </h3>
                  <Typography>
                    Our team excels in the application of various types of
                    screeds and plastering works providing a solid foundation
                    for flooring and walls installations. Whether it&apos;s for
                    commercial buildings, residential properties, or industrial
                    facilities, we deliver flawless screed and plaster finish.
                  </Typography>
                </div>
                <div className="w-full lg:max-w-[600px] h-[300px] flex justify-center items-center rounded-[40px] overflow-hidden border-8 border-mood-primary">
                  <Image
                    src="/service-07.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between flex-col lg:flex-row gap-10">
                <div className="w-full lg:max-w-[350px] h-[300px] flex justify-center items-center rounded-[40px] overflow-hidden border-8 border-mood-primary">
                  <Image
                    src="/service-07.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3 flex-1 -order-1 lg:order-none">
                  <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Screed and plastering works
                  </h3>
                  <Typography>
                    Our team excels in the application of various types of
                    screeds and plastering works providing a solid foundation
                    for flooring and walls installations. Whether it&apos;s for
                    commercial buildings, residential properties, or industrial
                    facilities, we deliver flawless screed and plaster finish.
                  </Typography>
                </div>
              </div>
              <div className="flex items-center justify-between flex-col lg:flex-row gap-10">
                <div className="space-y-3 flex-1">
                  <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Screed and plastering works
                  </h3>
                  <Typography>
                    Our team excels in the application of various types of
                    screeds and plastering works providing a solid foundation
                    for flooring and walls installations. Whether it&apos;s for
                    commercial buildings, residential properties, or industrial
                    facilities, we deliver flawless screed and plaster finish.
                  </Typography>
                </div>
                <div className="w-full lg:max-w-[600px] h-[300px] flex justify-center items-center rounded-[40px] overflow-hidden border-8 border-mood-primary">
                  <Image
                    src="/service-07.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between flex-col lg:flex-row gap-10">
                <div className="w-full lg:max-w-[350px] h-[300px] flex justify-center items-center rounded-[40px] overflow-hidden border-8 border-mood-primary">
                  <Image
                    src="/service-07.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3 flex-1 -order-1 lg:order-none">
                  <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Screed and plastering works
                  </h3>
                  <Typography>
                    Our team excels in the application of various types of
                    screeds and plastering works providing a solid foundation
                    for flooring and walls installations. Whether it&apos;s for
                    commercial buildings, residential properties, or industrial
                    facilities, we deliver flawless screed and plaster finish.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <HeadingStep title="BUILDING MAINTENANCE" stepNumber="07" />
            <div className="flex justify-between items-start gap-20 flex-col md:flex-row">
              <Typography className="flex-1">
                Maintenance tasks may involve painting, lubricating, and
                replacing worn-out or damaged parts to prevent deterioration and
                ensure optimal performance. Additionally, building maintenance
                services often include emergency response and troubleshooting to
                address unforeseen issues promptly. By providing comprehensive
                maintenance solutions, these services help property owners
                maintain the value, efficiency, and longevity of their buildings
                while creating safe and comfortable environments for occupants
              </Typography>
              <div className="bg-mood-secondary w-full md:w-1/2 h-[400px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-07.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <HeadingStep title="GYPSUM WORKS" stepNumber="08" />
            <div className="flex justify-between items-start gap-20 flex-col md:flex-row">
              <Typography className="flex-1">
                Our proficient team utilizes their expertise and high-quality
                materials to achieve outcomes that surpass expectations. Whether
                enhancing current structures or outfitting new projects, our
                commitment to superior craftsmanship and client contentment
                remains steadfast, establishing us as the preferred option for
                all gypsum works installations.
              </Typography>
              <div className="bg-mood-secondary w-full md:w-1/2 h-[400px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-08.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <HeadingStep
              title="designing 2d & 3d skilled team"
              stepNumber="09"
            />
            <Image
              src="/service-09.png"
              alt="Image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
            <div className="bg-mood-secondary w-full h-[600px] flex justify-center items-center rounded-[85px]">
              <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                <Image
                  src="/service-09-1.png"
                  alt="Image"
                  width={1000}
                  height={1000}
                  className="w-[96%] h-[95%] object-cover rounded-[85px]"
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <HeadingStep
              title="screed, plastering & waterproofing "
              stepNumber="10"
            />
            <div className="space-y-3">
              <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Screed and plastering works
              </h3>
              <Typography>
                Our team excels in the application of various types of screeds
                and plastering works providing a solid foundation for flooring
                and walls installations. Whether it&apos;s for commercial
                buildings, residential properties, or industrial facilities, we
                deliver flawless screed and plaster finish.
              </Typography>
            </div>
            <div className="space-y-3">
              <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Waterproofing works
              </h3>
              <Typography>
                offer a full range of waterproofing services designed to protect
                structures from water ingress. Our solutions are suitable for
                various environments, including residential, commercial, and
                industrial settings. Utilizing the latest materials and
                technologies, we provide robust waterproofing systems that
                include membrane installations, liquid coatings, and integral
                waterproofing treatments. Our methods are designed to enhance
                durability and longevity.
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-mood-secondary w-full h-[350px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-10-1.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
              <div className="bg-mood-secondary w-full h-[350px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-10-2.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
              <div className="bg-mood-secondary w-full h-[350px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-10-3.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-4 bg-mood-secondary w-full h-[350px] flex justify-center items-center rounded-[85px]">
                <div className="bg-mood-light w-[98%] h-[95%] flex justify-center items-center rounded-[85px] translate-y-[-15px]">
                  <Image
                    src="/service-10-4.png"
                    alt="Image"
                    width={1000}
                    height={1000}
                    className="w-[96%] h-[95%] object-cover rounded-[85px]"
                  />
                </div>
              </div>
            </div>
            <div className="h-2 w-full relative before:absolute before:bg-gradient-to-r before:from-[#39556E00] before:to-mood-primary before:content-[''] before:left-0 before:h-full before:w-[50%] after:absolute after:bg-gradient-to-r after:to-[#39556E00] after:from-mood-primary after:content-[''] after:right-0 after:h-full after:w-[50%]" />
            <Typography className="text-center">
              Get ready to dive with us into an enjoyable journey through the
              world of design, decoration, and engineering. Join us for an
              exciting adventure!
            </Typography>
          </div>
        </div>
      </Section>
    </main>
  );
}
