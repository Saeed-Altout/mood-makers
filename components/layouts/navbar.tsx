"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes } from "@/config";

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-mood-primary">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4">
        <Logo />
        <ul className="hidden lg:flex items-center justify-end gap-2">
          {routes.map((route) => (
            <li
              key={route.href}
              className={cn(
                "text-sm px-4 py-2 rounded-full w-full text-white hover:text-mood-primary hover:bg-mood-light transition-all text-nowrap",
                pathname === route.href && "text-mood-primary bg-mood-light"
              )}
            >
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-transparent hover:text-white"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu button</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="space-y-8">
            <Logo className="ml-4 text-xl lg:text-3xl" />
            <ul className="flex flex-col items-start justify-start gap-4">
              {routes.map((route) => (
                <li
                  key={route.href}
                  className={cn(
                    "text-sm px-4 py-2 rounded-md w-full text-white hover:text-mood-primary hover:bg-mood-light transition-all text-nowrap",
                    pathname === route.href && "text-mood-primary bg-mood-light"
                  )}
                >
                  <Link href={route.href}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
