"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Contact", path: "#contact" },
    { name: "About", path: "#about" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Skills", path: "#skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full   text-white p-4 flex justify-between items-center z-20">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-4xl font-extrabold text-secondary-bg">
          JL<span className="text-white">-TECH</span>
        </h1>
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu */}
      <div
        className={`absolute top-0 right-0 h-screen w-full bg-secondary-bg md:bg-none p-5 flex flex-col items-center justify-center gap-4 transition-transform duration-300 md:static md:flex-row md:h-auto md:w-auto md:p-0 md:bg-transparent ${
          menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-lg hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
