import { FaAddressBook, FaEnvelope, FaFax, FaMobile } from "react-icons/fa";
import { Typography } from "@/components/ui/typography";

export const Footer = () => {
  const contactInfo = [
    {
      id: 1,
      icon: FaAddressBook,
      label: "ABU DHABI AL DANAH KHNISER STREET",
    },
    {
      id: 2,
      icon: FaMobile,
      label: "026396019",
    },
    {
      id: 3,
      icon: FaFax,
      label: "026506570",
    },
    {
      id: 4,
      icon: FaFax,
      label: "0501232546",
    },
    {
      id: 5,
      icon: FaEnvelope,
      label: "INFO@MOODMAKERSDECOR.COM",
    },
  ];

  return (
    <footer className="py-10 overflow-x-hidden">
      <div className="container space-y-10">
        <h3 className="text-center text-mood-primary text-xl md:text-2xl lg:text-3xl leading-10 max-w-5xl mx-auto">
          Join us for an exciting adventure!
        </h3>
        <div className="relative pt-10">
          <div className="hidden xl:block bg-mood-primary rounded-full w-full h-[92px] absolute top-[15px] left-0 z-0" />
          <div className="relative z-40 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-0">
            {contactInfo.map(({ label, icon: Icon }, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center gap-4 xl:gap-10"
              >
                <Icon className="text-mood-primary xl:text-mood-light text-4xl" />
                <Typography className="text-center">{label}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
