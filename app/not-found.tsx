import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center h-full flex-col gap-10 md:gap-14 lg:gap-20">
      <div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-mood-primary">
          404 Not Found
        </h1>
      </div>
      <Button variant="link" asChild>
        <Link href="/">
          <ChevronLeft className="h-5 w-5 mr-2" />
          <Typography>Back to home</Typography>
        </Link>
      </Button>
    </main>
  );
}
