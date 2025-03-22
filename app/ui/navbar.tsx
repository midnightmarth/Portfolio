"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
export default function SideNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar px-6 md:px-12 py-4 z-50">
      <a href="/" className="text-2xl font-bold text-primary-text tracking-wide">
        <Image className="h-15 w-15 rounded-full " src="/EchoLogo.png" width={100} height={100} alt="AtEchoOff Logo" />
      </a>

      <div className="hidden md:flex space-x-8 text-lg">
        <Link href="/" className="hover:text-navbar-linkhover transition">Home</Link>
        <Link href="/about" className="hover:text-navbar-linkhover transition">About</Link>
        <Link href="/projects" className="hover:text-navbar-linkhover transition">Projects</Link>
        <Link href="/contact" className="hover:text-navbar-linkhover transition">Contact</Link>
      </div>

      <a href="#contact" className="hidden md:block bg-navbar-linkhover text-[#121212] px-5 py-2 rounded-lg font-medium hover:bg-[#F39C12] transition">
        Contact Me
      </a>

      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-6 bg-[#1E1E1E] border border-[#292929] rounded-lg shadow-lg p-4 flex flex-col space-y-4 md:hidden">
          <Link href="/" className="text-primary-text hover:text-navbar-linkhover" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="text-primary-text hover:text-navbar-linkhover" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/projects" className="text-primary-text hover:text-navbar-linkhover" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className="text-primary-text hover:text-navbar-linkhover" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}