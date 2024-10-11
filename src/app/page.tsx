import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <section>
      <div className="mt-5 flex items-center">
       
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://github.com/eliudefrancisco14.png" />
          <AvatarFallback className="text-black">EF</AvatarFallback>
        </Avatar>

        <h4 className="mb-0 ml-4 text-2xl font-semibold tracking-tighter">
          Eliúde Paulo Quintas Francisco
        </h4>
      </div>
      <div className="section-1 mt-5">
        <p className="mb-4">
          {`Oi, eu sou Eliude Francisco, sou desenvolvedor de software, Angolano e entusiasta na área da Programação.`}
        </p>
      </div>

      <div className="my-8"></div>
    </section>
  );
}
