import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const itemFooter = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="min-h-screen flex flex-col justify-between bg-gray-900">
      <div className="container mx-auto max-w-6xl border-b py-24">
        <figure className="flex items-center gap-2 mb-6">
          <Image
            src="/octacore.svg"
            alt="Octacore Logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-2xl">OCTACORE</span>
        </figure>

        <div className="">
          {itemFooter.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex mb-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="w-full text-center py-4">
        <span className="text-sm text-gray-200">
          &copy; {year}
          <Link
            href="https://github.com/znalfarel/Website-octacore"
            className="mx-1 hover:underline"
            target="_blank"
          >
            OctaCore
          </Link>
          . All rights reserved.
        </span>
      </section>
    </footer>
  );
}
