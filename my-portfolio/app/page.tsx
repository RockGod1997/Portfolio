"use client";

import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import Slider from "./components/slider";
import ProjectsSection from "./components/project";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-4 sm:px-10 py-8 sm:py-10 font-[family-name:var(--font-geist-sans)] transition-colors fade-in">
      {/* Header */}
      <Header />
      {/* Main content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        {/* About Section */}
        <section className="text-center sm:text-left mt-4">
          <p className="text-gray-100  text-base sm:text-lg">
            Hello! I&apos;m a passionate software engineer with expertise in
            building responsive, high-performance websites and mobile
            applications. With a focus on user-centered design and modern
            technologies, I enjoy solving problems and turning ideas into
            reality.
          </p>
        </section>
        {/* Resume Section */}
        <section className="text-center sm:text-left">
          <a
            href="/SAMARTHAGRAWAL_RESUME.pdf"
            download="SamarthAgrawal_Resume.pdf"
            className="inline-block relative p-4  bg-gray-800 bg-opacity-30  border border-gray-600  text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l hover:scale-110 transform transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center sm:justify-start items-center gap-3">
              <div className="w-8 h-8  flex items-center justify-center transform transition-transform duration-300 hover:rotate-45">
                <Image
                  src="/download.svg"
                  alt="download"
                  width={25}
                  height={20}
                  className="filter invert"
                />
              </div>
              <span className="relative z-10">Check out my Resume!</span>
              <div className="absolute inset-0 w-full h-full rounded-full  blur-lg opacity-50 transition-all duration-300 ease-in-out"></div>
            </div>
          </a>
        </section>
        <section className="text-center sm:text-left hidden">
          <Link href="/Techexpressway.pdf" legacyBehavior>
            <a className="inline-block p-3 bg-green-500  text-white rounded-full hover:bg-green-600  transition-colors transform hover:scale-105">
              View Certificates
            </a>
          </Link>
        </section>
        <div className="container w-60 lg:w-full">
          <section
            className="w-full flex flex-col items-center relative"
            style={{ zIndex: "1000" }}
          >
            <h2 className="text-xl sm:text-2xl text-gray-200 text-center font-semibold mb-6">
              Skills
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center font-semibold items-center lg:gap-6">
  {[
    "JavaScript",
    "React Native",
    "Angular",
    "CSS",
    "HTML5",
    "Python",
  ].map((skill, index) => (
    <li
      key={skill}
      className={` bg-gray-700 bg-opacity-30 text-white w-[120px] h-[120px] rounded-full border border-gray-300 shadow-lg transition-transform duration-500 relative flex items-center justify-center text-xs sm:text-base animate-float-${index + 1} hover:customHover `}
      style={{
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // shadow for depth
      }}
    >
      {skill}
    </li>
  ))}
</ul>

          </section>
          <Slider />
        </div>
        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl text-gray-100 font-semibold mb-4 text-center">
            Contact
          </h2>
          <p className="text-gray-300  text-center">
            Feel free to reach out via email at
            <span className="flex justify-center gap-2">
              <a
                href="mailto:agrawal.samarth123@gmail.com"
                className="text-blue-500  hover:underline flex gap-2"
              >
                <Image
                  src="/gmail.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="filter invert transform hover:rotate-12 transition-transform duration-300"
                />
                agrawal.samarth123@gmail.com
              </a>
            </span>
            <span className="flex justify-center gap-2 mt-2">
              or connect on
              <a
                href="https://www.linkedin.com/in/samarth-agrawal-433880192"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="filter invert mt-1 transform hover:rotate-12 transition-transform duration-300"
                />
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
