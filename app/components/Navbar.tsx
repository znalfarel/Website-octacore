"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  return (
    <Navbar className="justify-between py-4 md:py-6 md:px-8 top-0 z-50 absolute">
      <NavbarBrand className="gap-2">
        <Image src="/octacore.svg" alt="Octacore Logo" width={34} height={34} />
        <p className="font-bold text-base md:text-lg lg:text-xl">OCTACORE</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex space-x-6" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link href={item.href}>{item.label}</Link>
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
