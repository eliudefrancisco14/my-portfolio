"use client";

import { AwardIcon } from "lucide-react";
import { useState } from "react";

const TalkToMe = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

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

    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };

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
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 my-2">
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            placeholder="Nome"
            className="p-2 border rounded-md border-gray-200 dark:border-gray-700"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="p-2 border rounded-md border-gray-200 dark:border-gray-700"
          />

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensagem"
            className="p-2 border rounded-md border-gray-200 dark:border-gray-700 resize-none"
            minLength={10}
            maxLength={255}
            rows={5}
          >
            {message}
          </textarea>
          <button onSubmit={(e) => {e.preventDefault}} className="p-2 bg-gray-800 text-white rounded-md">
            Enviar
          </button>
        </div>
      </form>
      <div className="bg-slate-100 flex flex-col">
        <div className="text-red-600 px-5 py-2">Error Message</div>
      </div>
    </div>
  );
};

export default TalkToMe;
