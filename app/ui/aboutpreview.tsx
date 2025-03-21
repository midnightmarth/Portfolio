import { ArrowRight } from "lucide-react";


export default function AboutPreview() {
    return (
      <section id="about" className="py-16 z-10 my-6 bg-[#1E1E1E] text-[#E0E0E0] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg text-[#B0B0B0] mt-4">
            I'm a software engineer passionate about game development and web applications.  
            My journey started with game programming at 13, and since then, I've worked with  
            technologies like React, Node.js, Flask, and Unity.  
          </p>
          <a href="/about" className="flex justify-center items-center gap-2 mt-6 text-[#E67E22] text-lg font-medium hover:underline">
            Read More <ArrowRight className=""/>
          </a>
        </div>
      </section>
    );
  }
  