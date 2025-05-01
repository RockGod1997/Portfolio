import TypingEffect from "./typingeffect";
import Image from "next/image";
export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 row-start-1">
      <div className="flex flex-col items-center gap-2">
        {" "}
        <Image
          src="/Profilepic.jpg"
          alt="profile"
          className="rounded-full object-cover w-24 h-24 border-2 border-gray-300"
          style={{ objectPosition: "center" }}
          width={150}
          height={150}
        />
        <h1 className="text-4xl text-gray-100 font-bold text-center">Samarth Agrawal</h1>
      </div>
      <p className="text-lg text-gray-100 text-center">
        <TypingEffect text="Software Engineer"/>
      </p>
    </header>
  );
}
