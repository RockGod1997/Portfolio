"use client"; // This ensures that this component runs on the client-side

import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync theme with localStorage and initial page load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

/*   // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }; */

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] dark:bg-gray-900 dark:text-white transition-colors">
      {/* Dark Mode Toggle */}
    {/*   <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 border rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
 */}
      {/* Header */}
   <Header/>

      {/* Main Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        {/* About Me */}
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Hello! I&apos;m a passionate software engineer with expertise in building responsive, high-performance websites and mobile applications. With a focus on user-centered design and modern technologies, I enjoy solving problems and turning ideas into reality.
          </p>
        </section>

        {/* Skills */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded">JavaScript</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded">React Native</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Angular</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded">CSS</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded">HTML5</li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded">Python</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg">
              <Image
                src="/project1.png" // Replace with your project image
                alt="Project 1"
                width={400}
                height={200}
                className="rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Ecocompass</h3>
              <p className="text-gray-600 dark:text-gray-300">A sustainable wayfinding application.</p>
              <div className="mt-4">
                <a href="https://github.com/ecocompass/wayfinding" target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline">View on GitHub</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg">
              <Image
                src="/project2.png" // Replace with your project image
                alt="Project 2"
                width={400}
                height={200}
                className="rounded"
              />
              <h3 className="text-xl font-semibold mt-4">Covid Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300">Displays the impact of Covid over the globe</p>
              <div className="mt-4">
                <a href="https://github.com/RockGod1997/covid19-dashboard" target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline">View on GitHub</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to reach out via email at{" "}
            <a href="mailto:agrawal.samarth123@gmail.com" className="text-blue-500 dark:text-blue-400 hover:underline">agrawal.samarth123@gmail.com</a>{" "}
            or connect on{" "}
            <a href="https://www.linkedin.com/in/samarth-agrawal-433880192" className="text-blue-500 dark:text-blue-400 hover:underline">LinkedIn</a>.
          </p>
          {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
        >
           <Image
            aria-hidden
            src="icons/github.svg" // Replace with your GitHub icon
            alt="GitHub"
            width={16}
            height={16}
          /> 
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
           <Image
            aria-hidden
            src="/icons/linkedin.svg" // Replace with your LinkedIn icon
            alt="LinkedIn"
            width={16}
            height={16}
          /> 
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:youremail@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          * <Image
            aria-hidden
            src="/icons/gmail.svg" // Replace with your email icon
            alt="Email"
            width={16}
            height={16}
          /> 
          Email
        </a> */}
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
        <Footer/>
      </footer>
    </div>
  );
}
