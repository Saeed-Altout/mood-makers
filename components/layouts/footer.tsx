import { routes } from "@/config";
import { contactInfo } from "@/constants";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-10 bg-mood-primary">
      <div className="py-10 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h3 className="text-xl text-white font-semibold">Mood Makers</h3>
          <p className="text-white font-sans text-sm md:text-base">
            Crafting inspiring spaces with quality and creativity.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-white font-medium">Links</h3>
          <ul className="flex flex-col gap-3">
            {routes.map(({ label, href }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  className="font-sans text-white hover:text-mood-light transition-all"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-white font-medium">Contact Info</h3>
          <ul className="flex flex-col gap-3">
            {contactInfo.map(({ label, icon: Icon }, index) => (
              <li key={index} className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-white" />
                <p className="flex-1 font-sans text-white">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-mood-light/50 h-px w-full"></div>

      <div className="py-10 container flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-white text-sm font-sans text-center md:text-left flex items-center gap-2">
          <MapPin className="h-4 w-4 hidden md:block" />
          <span className="flex-1">
            Abu Dhabi, Al Danah, Khniser Street, ADCP Tower B, Office 401
          </span>
        </p>
        <p className="text-white text-sm font-sans text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">Mood Makers</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
