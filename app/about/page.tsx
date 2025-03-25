"use client";
import { Download, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import TechStack from "../ui/techstack";

const experience = [
    { year: "2013", role: "Started Programming", desc: "Began coding at 13 with Unity and C#." },
    { year: "2018", role: "Hack Reactor", desc: "Completed 900-hour coding bootcamp." },
    { year: "2019", role: "Software Engineer @ Visa", desc: "Worked on front-end UI improvements and tracking systems." },
    { year: "2023", role: "Database Administrator @ Deep Lineage", desc: "Managed and optimized Oracle APEX systems." },
    { year: "2024", role: "Teaching Programming", desc: "Began instructing Python, C#, and game dev concepts." },
];

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col p-6 mt-40 text-primary-text">
            <div className="text-center max-w-3xl mx-auto py-8 mb-6 bg-secondary-bg rounded-3xl p-10">
                <Image
                    src="/face-shot.png"
                    alt="Profile Picture"
                    width={150}
                    height={100}
                    className="w-auto mx-auto rounded-full border-4 border-[#E67E22] shadow-lg"
                />
                <h1 className="text-5xl font-bold mt-6">About Me</h1>
                <p className="text-lg text-[#B0B0B0] mt-4">
                    I’m a software engineer with a passion for <strong> problem-solving and interactive experiences </strong>.
                    From a young age, I was drawn to <strong>puzzles, mechanics, and logical challenges </strong>, which naturally evolved
                    into programming. My journey started with game development, but along the way, I also developed a deep
                    appreciation for <strong> web development and software engineering</strong>.
                </p>
                <p className="text-lg text-[#B0B0B0] mt-4">
                    My <strong>first serious public project </strong> was this very portfolio, and seeing it live was an incredibly rewarding experience.
                    I thrive on <strong> learning new technologies </strong>, tackling complex problems, and bringing creative ideas to life.
                    Whether it’s <strong>procedural generation in Unity </strong> or <strong> building scalable web applications </strong>, I love turning ideas into reality.
                </p>

                {/* Resume Download */}
                <a
                    href="/resume.pdf"
                    download="Stephen_Myers_Resume.pdf"
                    className="mt-6 inline-flex items-center px-6 py-3 bg-[#E67E22] text-[#121212] rounded-lg text-lg font-medium hover:bg-[#F39C12] transition"
                >
                    <Download className="mr-2" /> Download Resume

                </a>
            </div>
            {/* Skills Section */}
            <section className="mt-16 text-center">
                <h2 className="text-3xl font-bold">Top Skills</h2>
                <div className="flex flex-wrap justify-center mt-6 gap-6">
                    {["Logical Thinking", "Quick Problem-Solving", "Creative Development", "Technical Teaching"].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-[#292929] text-lg rounded-lg">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            <TechStack />

            {/* Experience & Projects Overview */}
            <section className="mt-16 max-w-3xl mx-auto bg-secondary-bg p-10 rounded-3xl">
                <h2 className="text-3xl font-bold text-center">My Journey</h2>
                <div className="mt-6 border-l-4 border-[#E67E22] pl-6">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Game Development</h3>
                        <p className="text-[#B0B0B0]">
                            I started with <strong>game development</strong> and built projects like <strong>Sporelords</strong> and a <strong>Restaurant Tycoon Simulator</strong> that I havent named yet.
                            I explored <strong>procedural generation</strong>, including <strong>Wave Function Collapse (WFC)</strong> to create <strong>textures, cities, forests, and roadways</strong>.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Web Development</h3>
                        <p className="text-[#B0B0B0]">
                            As I expanded my skill set, I developed this <strong>portfolio website</strong> to showcase my abilities.
                            I built it with <strong>Next.js and TypeScript</strong>, learning these technologies in under a week while refining my front-end expertise.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Teaching & Mentorship</h3>
                        <p className="text-[#B0B0B0]">
                            Teaching has been a natural extension of my knowledge.
                            I’ve helped students build <strong>FriendlyFam</strong>, a web application they developed while learning deployment and real-world coding practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Resume Viewer */}
            <section className="my-16 w-full max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Resume</h2>
                <iframe
                    src="/resume.pdf"
                    className="w-full h-[500px] rounded-lg"
                />
            </section>

            {/* Fun Facts Section */}
            <section className="mt-16 max-w-3xl mx-auto text-left bg-secondary-bg p-10 rounded-3xl">
                <h2 className="text-3xl font-bold">Fun Facts</h2>
                <ul className="mt-6 text-lg text-[#B0B0B0] space-y-4">
                    <li className="flex items-center">
                        <ArrowBigRight className="text-[#E67E22] mr-4" />
                        <p className="text-[#B0B0B0]">
                            My favorite project is <a href="" ><strong>Sporelords</strong> </a>, but it's currently on hold to focus on web development.
                        </p>
                    </li>
                    <li className="flex items-center">
                        <ArrowBigRight className="text-[#E67E22] mr-4" />
                        <p className="text-[#B0B0B0]">

                            I developed a procedural texture generator and extended it into 3D world generation.
                        </p>
                    </li>
                    <li className="flex items-center">
                        <ArrowBigRight className="text-[#E67E22] mr-4" />
                        <p className="text-[#B0B0B0]">

                            I built this portfolio in <strong>one week</strong> while learning <strong>Next.js and TypeScript</strong>.
                        </p>
                    </li>
                    <li className="flex items-center">
                        <ArrowBigRight className="text-[#E67E22] mr-4" />
                        <p className="text-[#B0B0B0]">

                            I consider myself a <strong>jack-of-all-trades</strong> developer, always eager to learn and adapt.
                        </p>
                    </li>
                </ul>
            </section>

        </div>
    );
}