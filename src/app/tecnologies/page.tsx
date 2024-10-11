import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <section>
      <div className="section-1 mt-5">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Tecnologias
        </h1>
        <div className="mt-5 flex items-center">
          <Card>
            <CardContent>
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                alt="PHP Logo"
                width="64"
                height="64"
                />
            </CardContent>
          </Card>
          
        </div>
        <p className="mb-4">
          <ul>
            <li>1. JavaScript</li>
            <li>2. PHP</li>
            <li>3. C#</li>
            <li>4. C</li>
            <li>5. Java</li>
            <li>6. Python</li>
            <li>7. Html</li>
            <li>8. CSS</li>
          </ul>
        </p>
      </div>
      <div className="section-1 mt-5">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Framework
        </h1>
        <ul>
          <li>1. Laravel</li>
          <li>2. VueJs</li>
          <li>3. Reactjs</li>
          <li>4. Nextjs</li>
          <li>5. Nodejs</li>
          <li>6. DotNet C# </li>
          <li>7. Flutter</li>
        </ul>
      </div>
    </section>
  );
}
