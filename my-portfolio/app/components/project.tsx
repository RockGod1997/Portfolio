import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const sectionRef = useRef(null); // Ref to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the section is in the viewport
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is in the viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`w-full transition-transform duration-300 ${isVisible ? 'slide-in' : 'opacity-0'}`}
    >
      <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white bg-opacity-30 p-4 rounded-xl shadow-lg max-w-md">
          <h3 className="text-xl font-semibold mb-2 mt-2">Ecocompass</h3>
          <div className="aspect-w-16 aspect-h-9 w-full mt-4 lg:aspect-h-12">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/cGchnnwWjGk?si=tPOD3UzwvEtwJoNt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-gray-300 dark:text-gray-300 mb-4 mt-2">
            <em>React Native, Mapbox, Gluestack UI</em>
          </p>
          <p className="text-gray-300 dark:text-gray-300">A sustainable wayfinding application.</p>
          <div className="mt-4 flex items-center">
            <a href="https://github.com/ecocompass/wayfinding" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline flex items-center">
              <Image src="/github.svg" alt="GitHub" width={16} height={16} className="filter invert mr-2 transform hover:rotate-12 transition-transform duration-300" />
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white bg-opacity-30 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold">Covid-19 Dashboard</h3>
          <Image src="/covid-dashboard.png" alt="Project 2" width={384} height={315} className="rounded-lg mt-4 w-full transform hover:scale-105 transition-transform duration-300" />
          <p className="text-gray-300 dark:text-gray-300 mb-4 mt-1">
            <em>Tableau</em>
          </p>
          <p className="text-gray-300 dark:text-gray-300">Displays the impact of Covid-19 over the globe.</p>
          <div className="mt-4 flex items-center">
            <a href="https://github.com/RockGod1997/covid19-dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline flex items-center">
              <Image src="/github.svg" alt="GitHub" width={16} height={16} className="filter invert mr-2 transform hover:rotate-12 transition-transform duration-300" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;