"use client";

import { AwardIcon } from "lucide-react";
import { useState } from "react";
import BlurFade from "../ui/blur-fade";

const TalkToMe = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Full Name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/talktome", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="section-1 mt-5">
      <BlurFade delay={0.25} inView>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Talk To Me
        </h1>
      </BlurFade>
      <BlurFade delay={0.25 * 1} inView>
        <p className="mb-4">
          Me fale um pouco sobre o que pensas sobre mim, ou sobre o que achaste
          do meu portfólio, ou talvez queiras saber mais sobre mim, deixa o seu
          <b> talk to me</b>
        </p>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 my-2 mx-32">
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
              placeholder="Nome"
              className="p-2 border rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/10 dark:bg-neutral-900/10 backdrop-blur"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="p-2 border rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/10 dark:bg-neutral-900/10 backdrop-blur"
            />

            <textarea
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem"
              className="p-2 border rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/10 dark:bg-neutral-900/10 backdrop-blur"
              minLength={10}
              maxLength={255}
              rows={5}
            >
              {message}
            </textarea>
            <button
              onSubmit={(e) => {
                e.preventDefault;
              }}
              className="p-2 bg-gray-800 text-white rounded-lg"
            >
              Enviar
            </button>
          </div>
        </form>
      </BlurFade>
      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TalkToMe;
