import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Header = () => {
  return (
    <div className="mt-10 flex items-center mb-10">
      <BlurFade delay={0.25} inView>
        <Avatar className="w-32 h-32 mr-4">
          <AvatarImage src="https://github.com/eliudefrancisco14.png" />
          <AvatarFallback className="text-black dark:text-white p-0">
            <img
              src="/perfil-new.jpeg"
              alt="Avatar Fallback"
              className="w-full h-full object-cover rounded-full"
            />
          </AvatarFallback>
        </Avatar>
      </BlurFade>

      <div>
        <BlurFade delay={0.25} inView>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">
            Eliúde Paulo Quintas Francisco{" "}
            <span>
              <img
                src="/icon/black-hole-white.png"
                alt="Black Hole Icon"
                style={{
                  display: "inline",
                  width: 42,
                  height: 42,
                  verticalAlign: "middle",
                  filter:
                    "invert(19%) sepia(81%) saturate(7496%) hue-rotate(262deg) brightness(93%) contrast(101%)",
                }}
                className="block dark:hidden"
              />
            </span>
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-md text-pretty">
            {`Olá, eu sou Eliude Francisco, sou desenvolvedor de software, Angolano e entusiasta na área da Programação.`}
          </span>
        </BlurFade>
        <BlurFade className="mt-2" delay={0.25 * 3} inView>
          <ul className="font-sm mt-0 inline-flex space-x-4 text-neutral-900 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            <li key="github">
              <Link
                href="https://github.com/eliudefrancisco14"
                className="flex items-center transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </Link>
            </li>

            <li key="linkedin">
              <Link
                href="https://linkedin.com/in/eliude-quintas-francisco-7b2347252"
                className="flex items-center transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </li>

            <li key="instagram">
              <Link
                href="https://instagram.com/eliudepauloquintas/profilecard/?igsh=MWNodzRia20yc244bA=="
                className="flex items-center transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </li>

            <li key="facebook">
              <Link
                href="https://www.facebook.com/eliudefrancisco14"
                className="flex items-center transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </Link>
            </li>

            <li key="twitter">
              <Link
                href="https://x.com/EliudeQuintas14?t=kKetPFRvBGqF12SSSOAyiA&s=08"
                className="flex items-center transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </Link>
            </li>

            <li key="threads">
              <Link
                href="https://threads.net/@eliudepauloquintas?invite=0"
                className="flex items-center transition-all hover:text-neutral-600 dark:hover:text-neutral-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </BlurFade>
      </div>
    </div>
  );
};

export default Header;
