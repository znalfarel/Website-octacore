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
    <Navbar className="justify-between py-6 px-8 top-0 z-50 absolute">
      <NavbarBrand className="gap-2">
        <Image src="/octacore.svg" alt="Octacore Logo" width={34} height={34} />
        <p className="font-bold text-xl">OCTACORE</p>
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
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
