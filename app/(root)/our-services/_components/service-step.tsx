import Image from "next/image";
import { GoDotFill } from "react-icons/go";

import { cn } from "@/lib/utils";
import { serviceSteps } from "@/constants";

export const ServicesStep = () => {
  return (
    <div className="space-y-20">
      {serviceSteps.map((service, index) => (
        <div className="space-y-3" key={index}>
          <h3 className="text-mood-primary font-semibold text-lg md:text-2xl lg:text-4xl">
            {service.number} - {service.title}
          </h3>

          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
            {service.description}
          </p>

          {service.image && (
            <div
              className={cn(
                "bg-mood-primary py-3 rounded-[100px]",
                index % 2 !== 0
                  ? "pr-8 md:pr-14 lg:pr-20"
                  : "pl-8 md:pl-14 lg:pl-20"
              )}
            >
              <div className="bg-mood-light p-5 rounded-[100px]">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[100px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}
          {service.groups &&
            service.groups.map((group, index) => (
              <div
                key={index}
                className="pt-20 relative flex w-full flex-1 flex-col gap-12"
              >
                <h2 className="border-l-8 border-mood-primary pl-5 flex-1 font-semibold text-mood-primary text-2xl md:text-3xl lg:text-4xl">
                  {group.title}
                </h2>

                {group.sections.map((section, index) => (
                  <div
                    key={index}
                    className="relative space-y-2 before:absolute before:left-0 before:top-[-48px] before:h-[calc(100%+48px)] before:w-2 before:bg-mood-primary pl-12 lg:pl-16"
                  >
                    {section.title && (
                      <h3 className="relative text-xl md:text-2xl lg:text-3xl font-medium text-mood-primary before:absolute before:top-1/2 before:right-[calc(100%+15px)] before:hidden before:h-5 before:w-8 before:translate-y-[-50%] before:bg-mood-primary md:before:block lg:before:right-[calc(100%+30px)]">
                        {section.title}
                      </h3>
                    )}
                    <div className="flex justify-between items-start gap-10 flex-col lg:flex-row">
                      <div className="flex-1 space-y-5">
                        {section.content.list.length > 0 && (
                          <div className="flex-1 space-y-2">
                            {section.content.list.map((item, index) => (
                              <p
                                key={index}
                                className="flex items-center gap-2 text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans"
                              >
                                <GoDotFill size={15} />
                                {item}
                              </p>
                            ))}
                          </div>
                        )}
                        {section.content.description && (
                          <p className="text-sm sm:text-base lg:text-lg leading-8 lg:leading-10 font-sans">
                            {section.content.description}
                          </p>
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
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
