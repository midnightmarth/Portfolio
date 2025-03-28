"use client";
import { Download, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import TechStack from "../ui/techstack";

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
                        <div className="text-[#B0B0B0] ">
                            <p className="py-4">My programming journey started in childhood, where I explored <strong>game development</strong> and even sold my early projects to classmates. That passion stuck with me, and I quickly became the go-to <strong>IT guy</strong> among my friends.
                            </p>
                            <p className="py-4">Over the years, I’ve continued honing my skills, leading to my latest projects: <strong>Sporelords</strong> and a <strong>Restaurant Tycoon Simulator</strong>. Both have pushed me to expand my understanding of <strong>game mechanics, AI systems, and procedural generation</strong>.

                            </p>
                            <p className="py-4">Speaking of procedural generation, my interest in complex algorithms led me to implement a <strong>Wave Function Collapse (WFC) algorithm</strong> to generate <strong>textures, cities, forests, and roadways</strong>. You can see more of this in action on my <strong><a href="/projects">Projects</a></strong> page!
                            </p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Web Development</h3>
                        <div className="text-[#B0B0B0]">
                            <p className="py-4">
                                My journey into web development began in 2018 when I attended Hack Reactor, a programming boot camp designed to teach software development in an intensive 900-hour, three-month program. After graduating, I landed a role at Visa, where I primarily worked on the front end. My responsibilities included fixing UI issues and migrating the existing frontend to an updated in-house UI framework. Unfortunately, due to company-wide cutbacks during COVID, all contractors—including myself—were let go.
                            </p>
                            <p className="py-4">
                                After Visa, I secured another frontend position, though my role quickly expanded into full-stack development. In addition to fixing UI inconsistencies and updating components to follow best practices, I also developed and integrated new backend endpoints to support my UI work. One of my key contributions was designing and implementing a Microsoft-themed UI update for one of the company's plugins. However, due to a misalignment in work priorities, I eventually parted ways with the company.
                            </p>
                            <p className="py-4">
                                Since then, I’ve been working as a programming instructor at Coding With Kids, teaching HTML, CSS, JavaScript, Python, Flask, C#, and MySQL. Alongside teaching, I also take on freelance projects, which led me to develop this very portfolio website. Built with Next.js and TypeScript, I took the opportunity to learn these technologies in under a week while refining my front-end expertise.
                            </p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-bold">Teaching & Mentorship</h3>
                        <div className="text-[#B0B0B0]">
                            <p className="py-4">

                            Beyond my work in <strong>game and web development</strong>, I’ve also found a passion for teaching and mentorship. As an instructor at Coding With Kids, I’ve had the opportunity to guide students of all ages through the fundamentals of programming, covering languages and frameworks like HTML, CSS, JavaScript, Python, Flask, C#, and MySQL. Teaching has not only reinforced my own knowledge but has also helped me develop strong communication skills, breaking down complex topics into digestible concepts for beginners and more advanced learners alike.
                            </p>
                            <p className="py-4">

                            In addition to structured teaching, I enjoy mentoring aspiring developers, whether through tutoring, technical discussions, or helping others navigate career transitions. I understand how challenging it can be to break into the industry, so I strive to provide guidance on both the technical and practical aspects of software development.
                            </p>
                            <p className="py-4">

                            My experience as an educator has influenced how I approach problem-solving and teamwork in my own projects. It has taught me to look at code not just from a developer’s perspective but also from the lens of someone who may be maintaining or learning from it later. Whether building software, writing documentation, or mentoring others, I aim to make technology more accessible, intuitive, and engaging.
                            </p>
                        </div>
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