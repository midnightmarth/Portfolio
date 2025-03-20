import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#181818] text-[#B0B0B0] py-6 text-center z-10">
      <div className="max-w-4xl mx-auto px-6 z-10">
        
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-lg mb-4">
            <Link href="/" className="hover:text-[#E67E22] transition">Home</Link>
            <Link href="/about" className="hover:text-[#E67E22] transition">About</Link>
            <Link href="/projects" className="hover:text-[#E67E22] transition">Projects</Link>
            <Link href="/contact" className="hover:text-[#E67E22] transition">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-2xl mb-4">
          <a href="mailto:stephenmyers.dev@gmail.com" className="hover:text-[#E67E22] transition">
            <Mail />
          </a>
          <a href="https://github.com/midnightmarth" className="hover:text-[#E67E22] transition">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/midnightmarth" className="hover:text-[#E67E22] transition">
            <Linkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Designed & developed by Stephen Myers. All rights reserved.</p>

      </div>
    </footer>
  );
}
