"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes } from "@/config";

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-mood-primary fixed top-0 left-0 w-full z-[10000]">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4">
        <Logo />
        <ul className="hidden lg:flex items-center justify-end gap-2">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "text-sm px-4 py-2 rounded-full w-full text-white hover:text-mood-primary hover:bg-mood-light transition-all text-nowrap",
                  pathname === route.href && "text-mood-primary bg-mood-light"
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <Sheet open={isOpen} onOpenChange={onChange}>
          <Button
            onClick={() => setIsOpen(true)}
            size="icon"
            variant="ghost"
            className="lg:hidden text-white hover:bg-transparent hover:text-white"
          >
            <span className="sr-only">Menu button</span>
            <MenuIcon className="h-6 w-6" />
          </Button>
          <SheetContent className="space-y-8">
            <Logo className="ml-4 text-xl lg:text-3xl" />
            <ul className="flex flex-col items-start justify-start gap-4">
              {routes.map((route) => (
                <li
                  key={route.href}
                  className={cn(
                    "rounded-md w-full text-white hover:text-mood-primary hover:bg-mood-light transition-all",
                    pathname === route.href && "text-mood-primary bg-mood-light"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href={route.href}
                    className="text-sm px-4 py-3 text-nowrap block"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
