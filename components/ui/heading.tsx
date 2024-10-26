import { Title } from "@/components/ui/title";
import { Section } from "@/components/ui/section";
import { CallOut } from "@/components/ui/call-out";
import { Typography } from "@/components/ui/typography";

interface HeadingProps {
  label: string;
  fDescription: string;
  pDescription: string;
  lDescription: string;
}

export const Heading = ({
  label,
  fDescription,
  pDescription,
  lDescription,
}: HeadingProps) => {
  return (
    <Section id="heading" className="py-10">
      <div className="container space-y-4">
        {label && <Title label={label} />}
        <Typography>{fDescription}</Typography>
        {pDescription && (
          <CallOut align="right">
            <Typography className="text-white capitalize md:text-xl lg:text-2xl xl:text-3xl">
              {pDescription}
            </Typography>
          </CallOut>
        )}
        <Typography>{lDescription}</Typography>
      </div>
    </Section>
  );
};
