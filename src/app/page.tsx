import WorkExperience from "@/components/app/WorkExperience";
import Education from "@/components/app/Education";
import CV from "@/components/app/CV";
import Header from "@/components/app/Header";
import Skills from "@/components/app/Skills";

export default function Page() {
  return (
    <section className="mt-5">
      <Header />
      <WorkExperience />
      <Education />
      <Skills />
      <CV />
    </section>
  );
}
