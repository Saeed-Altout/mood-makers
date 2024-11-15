import { contactInfo } from "@/constants";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-10 bg-mood-primary">
      <div className="py-10 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h3 className="text-xl text-white font-semibold">Mood Makers</h3>
          <p className="text-white font-sans text-sm md:text-base">
            Our clients&apos; needs and satisfaction are at the forefront of
            everything we do.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-white font-medium">Links</h3>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer font-sans text-white hover:text-mood-light transition-all">
              About Us
            </li>
            <li className="cursor-pointer font-sans text-white hover:text-mood-light transition-all">
              Our Services
            </li>
            <li className="cursor-pointer font-sans text-white hover:text-mood-light transition-all">
              Our Projects
            </li>
            <li className="cursor-pointer font-sans text-white hover:text-mood-light transition-all">
              Executive Summary
            </li>
            <li className="cursor-pointer font-sans text-white hover:text-mood-light transition-all">
              Business Progress
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-white font-medium">Contact us</h3>
          <ul className="flex flex-col gap-3">
            {contactInfo.map(({ label }, index) => (
              <li
                key={index}
                className="flex items-center gap-3 cursor-pointer font-sans text-white hover:text-mood-light transition-all"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-mood-light/50 h-px w-full"></div>

      <div className="py-10 container flex items-center justify-between">
        <p className="text-white text-sm font-sans">
          @copyright 2024 <span className="font-medium">Mood Makers</span>
        </p>
        <ul className="flex items-center gap-3">
          <li className="cursor-pointer font-sans text-white hover:text-mood-light transition-all">
            <FaFacebook />
          </li>
          <li className="cursor-pointer font-sans text-white hover:text-mood-light transition-all">
            <FaTelegram />
          </li>
          <li className="cursor-pointer font-sans text-white hover:text-mood-light transition-all">
            <FaWhatsapp />
          </li>
        </ul>
      </div>
    </footer>
  );
};
