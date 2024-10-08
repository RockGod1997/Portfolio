import TypingEffect from "./typingeffect";

/* import { SocialLink } from "./social-link";
import { SOCIALS } from "./socials";
 */
export default function Header(){
   return(
   <header className="flex flex-col items-center gap-2 row-start-1">
    <h1 className="text-4xl text-gray-100 font-bold">Samarth Agrawal</h1>
    <p className="text-lg text-gray-100 dark:text-gray-300"><TypingEffect text="S oftware Engineer"/></p>
  </header>
   )
}