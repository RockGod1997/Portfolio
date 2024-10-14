import TypingEffect from "./typingeffect";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 row-start-1">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
        {" "}
        {/* Changed to flex-col for small screens */}
        {/* Profile Icon */}
        <Image
          src="/Profilepic.jpg"
          alt="profile"
          className="rounded-full object-cover w-20 h-20 border-2 border-gray-300"
          style={{ objectPosition: "left" }}
          width={100}
          height={100}
        />
        <h1 className="text-4xl text-gray-100 font-bold">Samarth Agrawal</h1>
      </div>
      <p className="text-lg text-gray-100 dark:text-gray-300 text-center">
        {" "}
        {/* Added text-center for centering */}
        <TypingEffect text="S oftware Engineer" />
      </p>
    </header>
  );
}
