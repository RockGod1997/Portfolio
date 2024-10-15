// components/Slider.tsx
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// types.ts
export interface Project {
  title: string;
  description?: string;
  technologies?: string;
  video?: string;
  image?: string; // Made image optional for projects that might only have video
  github?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, description, technologies, video, image, github } = project; // Destructure project

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg max-w-md">
      <h3 className="text-xl text-gray-300 mb-2 mt-2">{title}</h3>
      <div className="aspect-w-16 aspect-h-9 w-full mt-4 lg:aspect-h-12">
        {video ? (
          <iframe
            className="w-full h-full rounded-xl mt-4"
            src={video}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          image && ( // Ensure image exists before rendering
            <Image
              src={image}
              alt={title}
              width={384}
              height={315}
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
              className="rounded-lg mt-4 w-full transform hover:scale-105 transition-transform duration-300"
            />
          )
        )}
      </div>
      {technologies && ( // Render only if technologies exist
        <p className="text-gray-300 mb-4 mt-6">
          <em>{technologies}</em>
        </p>
      )}
      {description && <p className="text-gray-300">{description}</p>} 
      {github && ( // Render link only if github exists
        <div className="mt-4 flex items-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
          >
            <Image
              src="/github.svg"
              alt="GitHub"
              width={16}
              height={16}
              className="filter invert mr-2 transform hover:rotate-12 transition-transform duration-300"
            />
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null); // Specify the type for sectionRef

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Eco-Compass",
      video: "https://www.youtube.com/embed/cGchnnwWjGk?si=tPOD3UzwvEtwJoNt&autoplay=1&mute=1",
      technologies: "React Native, Mapbox, Gluestack UI",
      description: "A sustainable wayfinding application.",
      github: "https://github.com/ecocompass/wayfinding"
    },
    {
      title: "Covid-19 Dashboard",
      image: "/covid-dashboard.png",
      technologies: "Tableau",
      description: "Displays the impact of Covid-19 over the globe.",
      github: "https://github.com/RockGod1997/covid19-dashboard",
    },
    {
      title: "Urban Sensor Application",
      image: "/urban.png",
      technologies: "Python Flask, AWS",
      description: "Collects and displays real-time weather and temperature sensor information.",
      github: "https://github.com/RockGod1997/urban-app",
    },
    {
      title: "Maze Solver",
      image: "/Maze.png",
      technologies: "Python",
      description: "A maze generator + solver using A*, BFS, DFS, MDP Value and Policy Iterations algorithms.",
      github: "https://github.com/RockGod1997/maze-game",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full transition-transform duration-300 ${
        isVisible ? "slide-in" : "opacity-0"
      }`}
    >
      <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} /> // Use project.title as the key for better uniqueness
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
