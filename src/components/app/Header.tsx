import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Header = () => {
  return (
    <div className="mt-10 flex items-start mb-10 gap-6">
      <BlurFade delay={0.25} inView>
        <Avatar className="w-28 h-28 shrink-0">
          <AvatarImage src="https://github.com/eliudefrancisco14.png" />
          <AvatarFallback className="text-black dark:text-white p-0">
            <img
              src="/perfil-new.jpeg"
              alt="Eliude Francisco"
              className="w-full h-full object-cover rounded-full"
            />
          </AvatarFallback>
        </Avatar>
      </BlurFade>

      <div className="flex flex-col gap-2">
        <BlurFade delay={0.25} inView>
          <h1 className="text-2xl font-bold tracking-tight">
            Eliúde Francisco
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
            Software Engineer · Data Intelligence · AI-Driven Development
          </p>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-lg">
            {`Engenheiro de Software especializado em inteligência de dados, com atuação em produtos digitais B2B e B2G. Orquestro soluções completas — do conceito ao deploy — combinando desenvolvimento moderno com IA aplicada.`}
          </p>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <ul className="mt-1 inline-flex space-x-4 text-neutral-600 dark:text-neutral-400">
            <li>
              <Link
                href="https://github.com/eliudefrancisco14"
                aria-label="GitHub"
                className="flex items-center transition-all hover:text-neutral-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/in/eliude-quintas-francisco-7b2347252"
                aria-label="LinkedIn"
                className="flex items-center transition-all hover:text-neutral-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/eliudepauloquintas"
                aria-label="Instagram"
                className="flex items-center transition-all hover:text-neutral-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/EliudeQuintas14"
                aria-label="X / Twitter"
                className="flex items-center transition-all hover:text-neutral-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link
                href="https://threads.net/@eliudepauloquintas"
                aria-label="Threads"
                className="flex items-center transition-all hover:text-neutral-900 dark:hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </li>
          </ul>
        </BlurFade>
      </div>
    </div>
  );
};

export default Header;
