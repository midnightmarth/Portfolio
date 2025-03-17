"use client";
import { useState } from "react";
import ProjectModal from "../ui/projectmodal"; // Modal for detailed project views

// Example project data
const projects = [
    {
        title: "Sporelords",
        type: "Game Development",
        description: "Procedurally generated FPS survival game.",
        image: "/images/sporelords.jpg",
        unityBuild: "/webgl/sporelords/index.html", // Unity WebGL Export
        github: "https://github.com/midnightmarth/sporelords",
        technologies: ["Unity", "C#", "Procedural Generation"],
    },
    {
        title: "Friendly Fam App",
        type: "Web Development",
        description: "A full-stack web app using React and Flask.",
        image: "/images/friendlyfam.jpg",
        liveDemo: "https://friendlyfam.com",
        github: "https://github.com/midnightmarth/friendlyfam",
        technologies: ["React", "Flask", "PostgreSQL"],
    },
    {
        title: "Sci-Fi Helmet 3D Model",
        type: "3D Modeling",
        description: "A high-poly sci-fi helmet made in Blender.",
        image: "/images/helmet.jpg",
        sketchfab: "https://sketchfab.com/models/example",
        technologies: ["Blender", "Substance Painter"],
    },
    {
        title: "Sorting Algorithm Visualizer",
        type: "Teaching",
        description: "A Python app that visualizes sorting algorithms.",
        image: "/images/sorting.jpg",
        github: "https://github.com/midnightmarth/sorting-visualizer",
        technologies: ["Python", "Pygame", "Sorting Algorithms"],
    },
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="min-h-screen bg-[#121212] text-[#E0E0E0] px-6 py-12">
            {/* Hero Section */}
            <div className="text-center pt-24">
                <h1 className="text-5xl font-bold">My Projects</h1>
                <p className="text-lg text-[#B0B0B0] mt-4">
                    A collection of my work in game development, web applications, 3D modeling, and teaching.
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
                        <img src={project.image} alt={project.title} className="w-full rounded-md" />
                        <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                        <p className="text-[#B0B0B0] mt-2">{project.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
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
