import type { Metadata } from "next";
import Image from "next/image";

import { Hero } from "./_components/hero";
import { certificationData } from "@/constants";

export const metadata: Metadata = {
  title: "Community Project for Emotional Wellness",
  description:
    "Discover Mood Makers, a community-driven project dedicated to promoting emotional wellness. Learn about our mission, view important certifications, and understand how we are making a difference.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-full">
      <Hero />
      <div className="container py-12 space-y-10">
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mood-primary">
            About us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            About Us Welcome to <strong>Mood Makers</strong>, where creativity,
            craftsmanship, and client satisfaction come together to transform
            spaces into stunning realities.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            With a passion for design and an unwavering commitment to quality,
            we specialize in interior renovation, wall painting, flooring, and
            project management services that elevate your home or business
            environment.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            Our journey began with a vision to set new standards in the interior
            design and fit-out industry. Today, we pride ourselves on being the
            go-to experts for turning ideas into tangible results. Whether it’s
            a residential renovation or a commercial space transformation, our
            team of skilled professionals brings unparalleled expertise,
            attention to detail, and a dedication to realizing your vision.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            At <strong>Mood Makers</strong>, we understand that every project is
            unique. From modern wall painting to custom interior designs and
            space redesign solutions, we tailor our services to meet your
            specific needs. Our comprehensive approach ensures that every step,
            from brainstorming to the final reveal, is seamless and hassle-free.
            We are more than just a service provider; we are partners in
            creating spaces that reflect your style, personality, and
            functionality.
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            Our portfolio includes luxury interiors, complete room makeovers,
            and bespoke designs that inspire and impress. Explore how Mood
            Makers can transform your space with exceptional craftsmanship,
            innovative solutions, and a commitment to excellence. Let us help
            you bring your vision to life with interiors that are as unique as
            you are.
          </p>
        </div>

        <div className="container grid grid-cols-1 gap-10">
          {certificationData.map((item, index) => (
            <Image
              key={index}
              src={item.imgUrl}
              alt={`paper-${index}`}
              width={1000}
              height={1000}
              className="object-cover h-auto lg:h-[1100] xl:h-[1500px] w-full mx-auto rounded-2xl "
            />
          ))}
        </div>
      </div>
    </main>
  );
}
