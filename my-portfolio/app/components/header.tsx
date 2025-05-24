import TypingEffect from "./typingeffect";
export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 row-start-1">
      <div className="flex flex-col items-center gap-2">
        {" "}
        <div
          className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300"
          style={{
            backgroundImage: "url('/Profilepic.jpg')",
            backgroundPosition: "37% center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "170%",
          }}
        ></div>
        <h1 className="text-4xl text-gray-100 font-bold text-center">
          Samarth Agrawal
        </h1>
      </div>
      <p className="text-lg text-gray-100 text-center">
        <TypingEffect text="Software Engineer" />
      </p>
    </header>
  );
}
