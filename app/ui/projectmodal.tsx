// import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import { X, Github, Link2 } from "lucide-react";


interface Project {
  title: string;
  type: string;
  description: string;
  image: string;
  unityBuild?: string;
  sketchfab?: string;
  liveDemo?: string;
  github?: string;
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1E1E1E] p-6 rounded-lg max-w-2xl shadow-lg">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="text-[#E67E22] text-2xl">
            <X />
          </button>
        </div>

        {/* Modal Content */}
        <p className="text-[#B0B0B0] mt-4">{project.description}</p>

        {/* Project Image */}
        <img src={project.image} alt={project.title} className="w-full rounded-md mt-4" />

        {/* Unity WebGL Build */}
        {project.unityBuild && (
          <iframe
            src={project.unityBuild}
            className="w-full h-64 mt-4 border border-[#292929] rounded-lg"
          />
        )}

        {/* Sketchfab 3D Model Viewer */}
        {project.sketchfab && (
          <iframe
            title="3D Model"
            src={project.sketchfab}
            className="w-full h-64 mt-4 border border-[#292929] rounded-lg"
          />
        )}

        {/* Links */}
        <div className="flex space-x-4 mt-6">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#E67E22] text-lg flex items-center">
              <Github className="mr-2" /> GitHub
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-[#E67E22] text-lg flex items-center">
              <Link2 className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
