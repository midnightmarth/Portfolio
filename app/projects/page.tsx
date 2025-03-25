"use client";
import { useState } from "react";
import ProjectModal from "../ui/projectmodal"; 
import Image from "next/image";


interface Project {
    title: string;
    type: string;
    description: string;
    media: { type: "image" | "pdf" | "video"; url: string }[];
    tech: string[];
    details: string;
}

const projects: Project[] = [
    {
    title: "Sporelords",
    type: "Game Development",
    description: "A procedurally generated FPS zombie survival game built in Unity 3D.",
    media: [{type: "image", url: "/sporelords/sporelords-fps-test-scene.png"}, {type: "image", url: "/sporelords/sporelords-enemy-ai-test-scene.png"}, {type: "image", url: "/sporelords/sporelords-map-gen-alpha-1.png"}, {type: "image", url:  "/sporelords/sporelords-map-gen-fps.png"}],
    tech: ["Unity", "C#", "Procedural Generation", "Wave Function Collapse"],
    details: `Sporelords is a game project I started about a year and a half ago, working on it on and off. My main focus for this project was to build a world generator and a unique enemy system where the enemies dynamically evolve, making the player need to become stronger. The features that work right now is the procedurally generated world with unique biomes, enemy AI that searches for others to group together, a dynamic leadership system, early stages of a world generator that can make forests and cities, default player mechanics like walking, running, jumping and crouching, a teleportation system, and a health and debuff system. Currently, the game is on hold while I focus on web development, but I plan to return to it in the future.`,
    },
    {
      title: "Restaurant Tycoon Simulator",
      type: "Game Development",
      description: "A tycoon game focused on restaurant management and expansion.",
      media: [{type: "image", url: "/restaurant/rs-planet-showcase-1.png"}, {type: "image", url:  "/restaurant/rs-planet-showcase-2.png"},{type: "pdf", url: "/restaurant/restaurant-gdd.pdf"}, {type: "video", url: "/restaurant/rs-planet-video.webm"}],
      tech: ["Unity", "C#", "Procedural Generation"],
      details: `This project was an idea I had while on vacation to allow me to refine my algorithmic and procedural generation thinking for Sporelords. The idea was to convert from generating regions to plantes, to capitolize on the restaurant game boom on Steam, and to work on a smaller scoped project that can be used to enhance Sporelords. Right now, this game features procedurally generated planets with dynamic terrains, including seas, mountains, and temperature zones. In the future, the game will enable players to manage a fast-food chain, expand their empire, and optimize business operations while combating against potential espionage from other players, thiefs, and thugs. This project is currently on hold while I focus on web development but I plan on coming back to this in the future.`,
    },
    {
      title: "Portfolio Website",
      type: "Web Development",
      description: "My personal portfolio showcasing my skills, built with Next.js and TypeScript.",
      media: [{type: "image", url: "/portfolio/portfolio-vs-code.png"}],
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      details: `This website was built in one week while learning Next.js any TypeScript. It includes a custom made particle background, a dynamic projects showcase, and an optimized UI.`,
    },
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    return (
        <div className="flex min-h-screen items-center flex-col p-6 mt-40 text-primary-text">
            
      {/* Hero Section */}
      <div className="text-center bg-secondary-bg rounded-3xl max-w-3xl p-10">
        <h1 className="text-5xl font-bold">My Projects</h1>
        <p className="text-lg text-[#B0B0B0] mt-4">
          Here are some of the projects I’ve worked on, including <strong>game development, web applications, and procedural generation experiments</strong>.
        </p>
      </div>

       {/* Project Grid */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#1E1E1E] rounded-lg p-4 shadow-lg hover:scale-105 transition cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <Image src={project.media[0].url} alt={project.title} width={400} height={250} className="w-full rounded-md" />
            <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
            <p className="text-[#B0B0B0] mt-2">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[#292929] text-sm rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

    </div>
  );
}
