import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { Typography } from "@/components/ui/typography";

import { ImageShape } from "./image-shape";
import { HeadingStep } from "./heading-step";
import { serviceSteps } from "@/constants";

export const ServicesStep = () => {
  return (
    <div className="space-y-12">
      {serviceSteps.map((service, index) => (
        <div className="space-y-5" key={index}>
          <HeadingStep stepNumber={service.number} title={service.title} />
          {service.image && (
            <ImageShape imageSrc={service.image} alt={service.title} />
          )}
          <Typography>{service.description}</Typography>
          {service.groups && (
            <>
              {service.groups.map((group, index) => (
                <div
                  key={index}
                  className="relative flex w-full flex-1 flex-col gap-12"
                >
                  <p className="flex-1 bg-mood-primary px-5 py-6 font-medium tracking-wider text-white text-lg md:text-2xl lg:text-4xl">
                    {group.title}
                  </p>

                  {group.sections.map((section, index) => (
                    <div
                      key={index}
                      className="relative space-y-2 pl-10 before:absolute before:left-0 before:top-[-48px] before:h-[calc(100%+48px)] before:w-5 before:bg-mood-primary md:pl-16 lg:pl-20"
                    >
                      {section.title && (
                        <h3 className="relative text-2xl md:text-3xl font-medium text-mood-primary before:absolute before:top-1/2 before:right-[calc(100%+15px)] before:hidden before:h-10 before:w-20 before:translate-y-[-50%] before:bg-mood-primary md:before:block lg:before:right-[calc(100%+30px)]">
                          {section.title}
                        </h3>
                      )}
                      <div className="flex justify-between items-start gap-10 flex-col lg:flex-row">
                        <div className="flex-1 space-y-5">
                          {section.content.description && (
                            <Typography className="flex-1">
                              {section.content.description}
                            </Typography>
                          )}
                          {section.content.list.length > 0 && (
                            <div className="flex-1 space-y-2">
                              {section.content.list.map((item, index) => (
                                <Typography
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <GoDotFill size={15} />
                                  {item}
                                </Typography>
                              ))}
                            </div>
                          )}
                        </div>
                        {section.image && (
                          <div className="relative w-full sm:max-w-[400px] h-full sm:max-h-[400px]">
                            <Image
                              src="/serve.png"
                              alt="Image"
                              width={1000}
                              height={1000}
                              className="object-cover rounded-xl w-full h-full"
                            />
                            <div className="absolute bg-[#081C2E66]/30 rounded-full text-white px-1 py-2 text-center backdrop-blur-sm text-sm bottom-5 left-[50%] translate-x-[-50%] w-[80%] text-wrap z-50">
                              85% complained about Condensation
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {group.image && (
                    <ImageShape imageSrc={group.image} alt={group.title} />
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
