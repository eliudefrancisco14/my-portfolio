import Link from "next/link";
import ArrowIcon from "../ArrowIcon";

const TalkToMe = () => {
  return (
    <div className="section-1 mt-5">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Talk To Me
      </h1>
      <p className="mb-4">
        Me fale um pouco sobre o que pensas sobre mim, ou sobre o que achaste do
        meu portfólio, ou talvez queiras saber mais sobre mim, deixa o seu
        <b> talk to me</b>
      </p>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome"
          className="p-2 border rounded-md border-gray-200 dark:border-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded-md border-gray-200 dark:border-gray-700"
        />
        <textarea
          placeholder="Mensagem"
          className="p-2 border rounded-md border-gray-200 dark:border-gray-700 resize-none"
          minLength={10}
          maxLength={255}
          rows={5}
        ></textarea>
        <button className="p-2 bg-gray-800 text-white rounded-md">
          Enviar
        </button>
      </div>
      <ul className="font-sm mt-10 flex flex-col space-x-0 space-y-2 text-neutral-900 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link
            href={"https://github.com/eliudefrancisco14"}
            className="flex items-center transition-all hover:text-neutral-500 dark:hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </Link>
        </li>
        <li>
          <Link
            href={"https://linkedin.com/in/eliude-quintas-francisco-7b2347252"}
            className="flex items-center transition-all hover:text-neutral-500 dark:hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </Link>
        </li>
        <li>
          <Link
            href={
              "https://instagram.com/eliudepauloquintas/profilecard/?igsh=MWNodzRia20yc244bA=="
            }
            className="flex items-center transition-all hover:text-neutral-500 dark:hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">instagram</p>
          </Link>
        </li>
        <li>
          <Link
            href={"https://facebook.com"}
            className="flex items-center transition-all hover:text-neutral-500 dark:hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">facebook</p>
          </Link>
        </li>
        <li>
          <Link
            href={"https://x.com"}
            className="flex items-center transition-all hover:text-neutral-500 dark:hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">X</p>
          </Link>
        </li>
        <li>
          <Link
            href={"https://threads.net/@eliudepauloquintas?invite=0"}
            className="flex items-center transition-all hover:text-neutral-500 dark:hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">threads</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TalkToMe;
