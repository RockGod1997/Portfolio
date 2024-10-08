"use client";

import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-4 sm:px-10 py-8 sm:py-10 font-[family-name:var(--font-geist-sans)] dark:bg-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        {/* About Section */}
        <section className="text-center sm:text-left mt-4">
          <p className="text-gray-100 dark:text-gray-300 text-base sm:text-lg">
            Hello! I'm a passionate software engineer with expertise in building responsive, high-performance websites and mobile applications. With a focus on user-centered design and modern technologies, I enjoy solving problems and turning ideas into reality.
          </p>
        </section>

        {/* Resume Section */}
        <section className="text-center sm:text-left">
          <a
            href="/SAMARTHAGRAWAL_RESUME.pdf"
            download="SamarthAgrawal_Resume.pdf"
            className="inline-block p-3 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            <div className="flex justify-center sm:justify-start gap-2">
              <Image src="/download.svg" alt="download" width={20} height={20} className="rounded-full" />
              Download Resume
            </div>
          </a>
        </section>

        {/* Skills Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center font-semibold">
            <li className="bg-gray-100 bg-opacity-30 p-4 rounded-full">JavaScript</li>
            <li className="bg-gray-100 bg-opacity-30 p-4 rounded-full">React Native</li>
            <li className="bg-gray-100 bg-opacity-30 p-4 rounded-full">Angular</li>
            <li className="bg-gray-100 bg-opacity-30 p-4 rounded-full">CSS</li>
            <li className="bg-gray-100 bg-opacity-30 p-4 rounded-full">HTML5</li>
            <li className="bg-gray-100 bg-opacity-30 p-4 rounded-full">Python</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white bg-opacity-30 p-4 rounded-xl shadow-lg max-w-md">
            <h3 className="text-xl font-semibold mt-4">Ecocompass</h3>
              
             
              <div className="aspect-w-16 aspect-h-9 w-full mt-2 lg:aspect-h-12  ">
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
             
           
                <a href="https://github.com/ecocompass/wayfinding" target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline flex items-center">
                <Image src="/github.svg" alt="GitHub" width={16} height={16} className="filter invert mr-2" />
                  View on GitHub 
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white bg-opacity-30 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold ">Covid-19 Dashboard</h3>
              
              <Image src="/covid-dashboard.png" alt="Project 2" width={384} height={315} className="rounded-lg mt-4 w-full" />
              <p className="text-gray-300 dark:text-gray-300 mb-4 mt-1">
                <em>Tableau</em>
              </p>
              <p className="text-gray-300 dark:text-gray-300">Displays the impact of Covid-19 over the globe.</p>
              <div className="mt-4 flex items-center">
                <a href="https://github.com/RockGod1997/covid19-dashboard" target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline flex items-center">
                <Image src="/github.svg" alt="GitHub" width={16} height={16} className="filter invert mr-2" />
           
                  View on GitHub
                  
               
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl text-gray-100 font-semibold mb-4 text-center">Contact</h2>
          <p className="text-gray-300 dark:text-gray-300 text-center">
            Feel free to reach out via email at
            <span className="flex justify-center gap-2">
              <Image src="/gmail.svg" alt="Email" width={16} height={16} className="filter invert" />
              <a href="mailto:agrawal.samarth123@gmail.com" className="text-blue-500 dark:text-blue-400 hover:underline">agrawal.samarth123@gmail.com</a>
            </span>
            
            <span className="flex justify-center gap-2 mt-2">
            or connect on
              <a href="https://www.linkedin.com/in/samarth-agrawal-433880192" target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline">
                <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} className="filter invert mt-1"  />
              </a>
            </span>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}