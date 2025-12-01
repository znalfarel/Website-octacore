"use client"

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/", scrollTo: "services" },
  { label: "About", href: "/", scrollTo: "about" },
];

export default function Nav() {
  const router = useRouter();

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.scrollTo) {
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(item.href);
        setTimeout(() => {
          const el = document.getElementById(item.scrollTo);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      }
    } else {
      router.push(item.href);
    }
  };

  return (
    <Navbar className="justify-between py-4 md:py-6 md:px-8 top-0 z-50 absolute">
      <NavbarBrand className="gap-2">
        <Image src="/octacore.svg" alt="Octacore Logo" width={34} height={34} />
        <p className="font-bold text-base md:text-lg lg:text-xl">OCTACORE</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex space-x-6" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.label}>
            <button
              onClick={() => handleNavClick(item)}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="text-sm md:text-base bg-purple-600 hover:bg-purple-700 transition-colors text-white leading-tight px-4 py-3 rounded-xl"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}