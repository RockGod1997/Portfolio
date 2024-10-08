"use client";

import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import Slider from "./components/slider";
import ProjectsSection from "./components/project";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-4 sm:px-10 py-8 sm:py-10 font-[family-name:var(--font-geist-sans)] dark:bg-gray-900 dark:text-white transition-colors fade-in">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">

        {/* About Section */}
        <section className="text-center sm:text-left mt-4">
          <p className="text-gray-100 dark:text-gray-300 text-base sm:text-lg">
            Hello! I&apos;m a passionate software engineer with expertise in building responsive, high-performance websites and mobile applications. With a focus on user-centered design and modern technologies, I enjoy solving problems and turning ideas into reality.
          </p>
        </section>
        {/* Resume Section */}
        <section className="text-center sm:text-left">
          <a
            href="/SAMARTHAGRAWAL_RESUME.pdf"
            download="SamarthAgrawal_Resume.pdf"
            className="inline-block p-3 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            <div className="flex justify-center sm:justify-start gap-2">
              <Image src="/download.svg" alt="download" width={20} height={20} className="rounded-full filter invert" />
              Download Resume
            </div>
          </a>
        </section>
        <div className="container mx-auto px-4 w-60 lg:w-full">
          <Slider />
        </div>
        {/* Projects Section */}
       <ProjectsSection/>

        {/* Contact Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl text-gray-100 font-semibold mb-4 text-center">Contact</h2>
          <p className="text-gray-300 dark:text-gray-300 text-center">
            Feel free to reach out via email at
            <span className="flex justify-center gap-2">

              <a href="mailto:agrawal.samarth123@gmail.com" className="text-blue-500 dark:text-blue-400 hover:underline flex gap-2">
                <Image src="/gmail.svg" alt="Email" width={16} height={16} className="filter invert transform hover:rotate-12 transition-transform duration-300" />
                agrawal.samarth123@gmail.com

              </a>
            </span>

            <span className="flex justify-center gap-2 mt-2">
              or connect on
              <a href="https://www.linkedin.com/in/samarth-agrawal-433880192" target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline">
                <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} className="filter invert mt-1 transform hover:rotate-12 transition-transform duration-300" />
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