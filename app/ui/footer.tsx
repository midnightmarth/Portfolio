import { Mail, Github, Linkedin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-[#181818] text-[#B0B0B0] py-6 text-center">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-lg mb-4">
          <a href="/" className="hover:text-[#E67E22] transition">Home</a>
          <a href="/about" className="hover:text-[#E67E22] transition">About</a>
          <a href="/projects" className="hover:text-[#E67E22] transition">Projects</a>
          <a href="/contact" className="hover:text-[#E67E22] transition">Contact</a>
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
        <p className="text-sm">&copy; {new Date().getFullYear()} Designed & developed by AtEchoOff. All rights reserved.</p>

      </div>
    </footer>
  );
}
