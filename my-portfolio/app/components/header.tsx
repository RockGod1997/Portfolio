/* import { SocialLink } from "./social-link";
import { SOCIALS } from "./socials";
 */
export default function Header(){
   return(
   <header className="flex flex-col items-center gap-2 row-start-1">
    <h1 className="text-4xl text-gray-100 font-bold">Samarth Agrawal</h1>
    <p className="text-lg text-gray-100 dark:text-gray-300">Software Engineer</p>
   {/*  <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div> */}
  </header>
   )
}