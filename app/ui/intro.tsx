export default function IntroComponent() {
    return (
      <div className="relative flex flex-col items-center justify-center h-screen text-center text-[#E0E0E0]">
        {/* Background Effect (Particles) */}
        <div id="particle-bg" className="absolute inset-0 z-0"></div>
  
        {/* Hero Content */}
        <div className="z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-[#E67E22]">Stephen Myers</span>.
          </h1>
          <p className="text-xl text-[#B0B0B0] mt-4">
            Full-Stack Software Engineer & Game Developer.
          </p>
  
          {/* CTA Buttons */}
          <div className="mt-6 space-x-4">
            <a href="#projects" className="px-6 py-3 bg-[#E67E22] text-[#121212] rounded-lg text-lg font-medium hover:bg-[#F39C12] transition">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-[#E67E22] text-[#E67E22] rounded-lg text-lg font-medium hover:bg-[#E67E22] hover:text-[#121212] transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    );
  }
  