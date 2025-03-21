import Image from "next/image"

const techStack = [
	{ name: "React", logo: "/TechIcons/React.png" },
	{ name: "Node.js", logo: "/TechIcons/Node.js.png" },
	{ name: "C#", logo: "/TechIcons/CSharp.png" },
	{ name: ".NET", logo: "/TechIcons/NET-core.png" },
	{ name: "Unity", logo: "/TechIcons/Unity.png" },
	{ name: "CSS", logo: "/TechIcons/CSS3.png" },
	{ name: "HTML", logo: "/TechIcons/HTML5.png" },
	{ name: "MongoDB", logo: "/TechIcons/MongoDB.png" },
	{ name: "Next.js", logo: "/TechIcons/Next.js.png" },
	{ name: "Python", logo: "/TechIcons/Python.png" },
	{ name: "MySQL", logo: "/TechIcons/MySQL.png" },
	{ name: "TypeScript", logo: "/TechIcons/TypeScript.png" },
];

export default function TechStack() {
	return (
		<section id="tech" className="flex py-16 my-6 text-center bg-[#181818] justify-center flex-col">
			<h2 className="text-3xl font-bold text-[#E0E0E0]">Tech Stack</h2>
			<div className="flex flex-wrap justify-center items-center mt-6 gap-10 min-w-8">
				{techStack.map((tech) => (
					<div key={tech.name} className="flex flex-col items-center">
						<Image src={tech.logo} alt={tech.name} width={200} height={200} className="h-auto w-16 filter brightness-75 hover:brightness-100 transition" />
						{/* <p className="text-[#B0B0B0] mt-2">{tech.name}</p> */}
					</div>
				))}
			</div>
		</section>
	);
}


