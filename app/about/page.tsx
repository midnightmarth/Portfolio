"use client";
import { Download, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import TechStack from "../ui/techstack";
const techStack = [
    { name: "React", logo: "/React_Logo.png" },
    { name: "Node.js", logo: "/Nodejs_Logo.png" },
    { name: "C#", logo: "/C_Sharp_Logo.png" },
    { name: "Unity", logo: "/Unity_Logo.png" },
    { name: "CSS", logo: "/CSS_Logo.png" },
    { name: "HTML", logo: "/HTML5_Logo.png" },
    { name: "MongoDB", logo: "/Mongodb_Logo.png" },
    { name: "Next.js", logo: "/Nextjs_Logo.png" },
    { name: "Python", logo: "/Python_Logo.png" },
    { name: "MySQL", logo: "/MySQL_Logo.png" },
    { name: "TypeScript", logo: "/TypeScript_Logo.png" },
];

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
                    Software Engineer passionate about game development and web applications.
                    Started coding at 13, and since then, I've worked with technologies like React,
                    Node.js, Flask, Unity, and PostgreSQL.
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
            <TechStack />

            {/* Experience Timeline */}
            <section className="mt-16 max-w-3xl mx-auto bg-secondary-bg p-10 rounded-3xl">
                <h2 className="text-3xl font-bold text-center">My Journey</h2>
                <div className="mt-6 border-l-4 border-[#E67E22] pl-6">
                    {experience.map((exp, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-bold">{exp.year} - {exp.role}</h3>
                            <p className="text-[#B0B0B0]">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Resume Viewer */}
            <section className="my-16 w-full h-96 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Resume</h2>
                <iframe
                    src="/resume.pdf"
                    className="w-full h-96 border border-[#292929] mt-6 rounded-lg shadow-lg"
                />
            </section>

            {/* Fun Facts Section */}
            <section className="mt-16 max-w-3xl mx-auto text-center bg-secondary-bg p-10 rounded-3xl">
                <h2 className="text-3xl font-bold">Fun Facts</h2>
                <ul className="mt-6 text-lg text-[#B0B0B0] space-y-4">
                    <li className="flex items-center">
                        <ArrowBigRight className="text-[#E67E22] mr-2" />
                        Sold my first game (*Dead B4 You Know It*) to classmates on CDs.
                    </li>
                    <li className="flex items-center">
                        <ArrowBigRight className="text-[#E67E22] mr-2" />
                        Love strategy games and have recently been learning chess.
                    </li>
                    <li className="flex items-center">
                        <ArrowBigRight className="text-[#E67E22] mr-2" />
                        Built my own procedurally generated FPS game (*Sporelords*).
                    </li>
                    <li className="flex items-center">
                        <ArrowBigRight className="text-[#E67E22] mr-2" />
                        Enjoy experimenting with AI-based procedural generation.
                    </li>
                </ul>
            </section>

        </div>
    );
}