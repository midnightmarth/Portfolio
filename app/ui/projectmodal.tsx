"use client";
import { X, Github, Link2, ArrowBigRight, Download, ArrowBigLeft, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
	title: string;
	type: string;
	description: string;
	media: { type: "image" | "pdf" | "video"; url: string }[];
	tech: string[];
	details: string;
}

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % project.media.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + project.media.length) % project.media.length);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1E1E1E] p-6 rounded-lg max-w-3xl shadow-lg overflow-auto max-h-[80vh] relative">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="text-[#E67E22] text-2xl">
            <X />
          </button>
        </div>

        {/* Project Details */}
        <p className="text-[#B0B0B0] mt-4">{project.details}</p>

        {/* Media Viewer */}
        <div className="mt-6 relative flex items-center justify-center">
          {project.media.length > 1 && (
            <div className="pr-6">
              <button onClick={prevSlide} className="bg-[#292929] text-white p-2 rounded-full shadow-md hover:bg-[#E67E22]">
                <ArrowBigLeft size={24} />
              </button>
            </div>
          )}

			
          <div className="w-full flex justify-center items-center">
            {/* Image Preview with Zoom Option */}
            {project.media[currentIndex].type === "image" && (
              <div className="relative">
                <Image
                  src={project.media[currentIndex].url}
                  alt={`${project.title} screenshot`}
                  width={0}
				  height={0}
				  sizes="75vw"
			 	  className="w-[75vw] h-auto rounded-md cursor-pointer hover:brightness-75 transition"
                  onClick={() => setEnlargedImage(project.media[currentIndex].url)}
                />
                <button onClick={() => setEnlargedImage(project.media[currentIndex].url)} className="absolute bottom-2 right-2 bg-black bg-opacity-50 p-2 rounded-full">
                  <ZoomIn size={20} className="text-white" />
                </button>
              </div>
            )}

            {/* Video Player */}
            {project.media[currentIndex].type === "video" && (
              <video controls className="w-full rounded-md">
                <source src={project.media[currentIndex].url} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* PDF Preview (Properly Sized) */}
            {project.media[currentIndex].type === "pdf" && (
              <iframe src={project.media[currentIndex].url} className="w-full h-[500px] rounded-lg" />
            )}
          </div>
		  {project.media.length > 1 && (
			<div className="pl-6">
              <button onClick={nextSlide} className=" bg-[#292929] text-white p-2 rounded-full shadow-md hover:bg-[#E67E22]">
                <ArrowBigRight size={24} />
              </button>
			</div>
          )}
        </div>

        {/* Technologies Used */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-[#292929] text-sm rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Enlarged Image Viewer */}
      {enlargedImage && (
		<div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"> 
			<div className="flex justify-end w-[78vw] h-auto">
				<button onClick={() => setEnlargedImage(null)} className="text-[#E67E22] text-3xl">
					<X />
				</button>
			</div>
			<Image src={enlargedImage} alt="Enlarged" width={0} height={0} sizes="75vw" className="w-[75vw] h-auto rounded-lg" />
		</div>
      )}
    </div>
  );
}