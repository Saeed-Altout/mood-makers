import Image from "next/image";

export const Hero = () => {
  return (
    <section className="h-[975px] w-full relative">
      <Image src="/hero-about-us.png" alt="hero-about-us" fill />
    </section>
  );
};
