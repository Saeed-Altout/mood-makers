import Image from "next/image";
import { Metadata } from "next";

import { servicesList } from "@/constants";

import { Hero } from "./_components/hero";
import { ServicesStep } from "./_components/service-step";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Discover the range of services offered by Mood Makers, dedicated to enhancing spaces and supporting well-being. From facility renovations to therapeutic installations, explore how our team brings expertise and care to each project to create environments that promote emotional and physical health.",
};

export default function OurServices() {
  return (
    <main className="min-h-full">
      <Hero />
      <div className="container pt-12 space-y-20">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mood-primary">
            Our Activities
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            With expertise spanning diverse sectors, our company specializes in
            All Kinds of Building Projects Contracting, offering comprehensive
            solutions tailored to meet every client&apos;s unique needs. From
            commercial complexes to residential developments, our adept team
            ensures meticulous planning, precise execution, and timely
            completion of projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((item, index) => (
            <div
              key={index}
              className="bg-mood-primary p-5 flex items-center gap-5 rounded-md"
            >
              <span className="text-white text-xl">
                {index < 9 ? `0${index + 1}` : index + 1}
              </span>
              <h2 className="text-white text-lg md:text-xl">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-[400px] md:h-[700px] lg:h-[900px] xl:h-[1200px]">
        <Image
          src="/topService.png"
          alt="Image"
          className="object-cover"
          fill
          priority
        />
      </div>

      <div className="container space-y-20 py-20">
        <ServicesStep />

        <div className="space-y-8">
          <h3 className="text-mood-primary font-semibold text-lg md:text-2xl lg:text-4xl">
            09 - landscaping works
          </h3>

          <div className="flex justify-between items-start gap-20 flex-col md:flex-row">
            <p className="max-w-md text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
              At Mood Makers, landscaping transforms any environment, seamlessly
              blending aesthetics, nature, and culture into a contemporary
              practice for your enjoyment. Our dedicated team creates beautiful
              gardens with passion and professionalism, enhancing the value of
              your property and bringing your outdoor spaces to life.
            </p>
            <div className="w-full md:w-min flex-1 bg-mood-secondary py-3 rounded-[100px] pl-6 md:pl-10 lg:pl-14">
              <div className="bg-mood-light p-5 rounded-[100px]">
                <div className="relative h-[400px] lg:h-[500px] w-full min-w-fit overflow-hidden rounded-[100px]">
                  <Image
                    src="/service-06-1.png"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex-1 bg-mood-secondary px-3 rounded-[100px] pb-8">
              <div className="bg-mood-light p-3 rounded-[100px]">
                <div className="relative h-[400px] w-full min-w-fit overflow-hidden rounded-[100px]">
                  <Image
                    src="/service-06-1-1.png"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 bg-mood-secondary px-3 rounded-[100px] pt-8">
              <div className="bg-mood-light p-3 rounded-[100px]">
                <div className="relative h-[400px] w-full min-w-fit overflow-hidden rounded-[100px]">
                  <Image
                    src="/service-06-1-2.png"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 bg-mood-secondary px-3 rounded-[100px] pb-8">
              <div className="bg-mood-light p-3 rounded-[100px]">
                <div className="relative h-[400px] w-full min-w-fit overflow-hidden rounded-[100px]">
                  <Image
                    src="/service-06-1-3.png"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-mood-primary font-semibold text-lg md:text-2xl lg:text-4xl">
            10 - Designing 2d & 3d skilled team
          </h3>
          <Image
            src="/service-09.png"
            alt="Image"
            width={1000}
            height={1000}
            className="w-full h-auto object-contain"
          />
          <div className="flex-1 bg-mood-secondary px-3 rounded-[100px] pb-8">
            <div className="bg-mood-light p-3 rounded-[100px]">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full min-w-fit overflow-hidden rounded-[100px]">
                <Image
                  src="/service-09-1.png"
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-mood-primary font-semibold text-lg md:text-2xl lg:text-4xl">
            11 - Screed, Plastering and waterproofing works
          </h3>

          <div className="space-y-3">
            <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Screed and plastering works
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
              Our team excels in the application of various types of screeds and
              plastering works providing a solid foundation for flooring and
              walls installations. Whether it&apos;s for commercial buildings,
              residential properties, or industrial facilities, we deliver
              flawless screed and plaster finish.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-mood-primary text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Waterproofing works
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
              offer a full range of waterproofing services designed to protect
              structures from water ingress. Our solutions are suitable for
              various environments, including residential, commercial, and
              industrial settings. Utilizing the latest materials and
              technologies, we provide robust waterproofing systems that include
              membrane installations, liquid coatings, and integral
              waterproofing treatments. Our methods are designed to enhance
              durability and longevity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex-1 bg-mood-secondary px-3 rounded-[100px] pb-8">
              <div className="bg-mood-light p-3 rounded-[100px]">
                <div className="relative h-[400px] w-full min-w-fit overflow-hidden rounded-[100px]">
                  <Image
                    src="/service-10-1.png"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 bg-mood-secondary px-3 rounded-[100px] pt-8">
              <div className="bg-mood-light p-3 rounded-[100px]">
                <div className="relative h-[400px] w-full min-w-fit overflow-hidden rounded-[100px]">
                  <Image
                    src="/service-10-2.png"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 bg-mood-secondary px-3 rounded-[100px] pb-8">
              <div className="bg-mood-light p-3 rounded-[100px]">
                <div className="relative h-[400px] w-full min-w-fit overflow-hidden rounded-[100px]">
                  <Image
                    src="/service-10-3.png"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="last:col-span-1 last:md:col-span-2 last:lg:col-span-3 flex-1 bg-mood-secondary px-3 rounded-[100px] pb-8">
              <div className="bg-mood-light p-3 rounded-[100px]">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full min-w-fit overflow-hidden rounded-[100px]">
                  <Image
                    src="/service-10-4.png"
                    alt="Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-2 w-full relative before:absolute before:bg-gradient-to-r before:from-[#39556E00] before:to-mood-primary before:content-[''] before:left-0 before:h-full before:w-[50%] after:absolute after:bg-gradient-to-r after:to-[#39556E00] after:from-mood-primary after:content-[''] after:right-0 after:h-full after:w-[50%]" />
          <p className="text-center max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            Get ready to dive with us into an enjoyable journey through the
            world of design, decoration, and engineering. Join us for an
            exciting adventure!
          </p>
        </div>
      </div>
    </main>
  );
}
