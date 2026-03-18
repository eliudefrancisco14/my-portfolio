import WorkExperience from "@/components/app/WorkExperience";
import Education from "@/components/app/Education";
import CV from "@/components/app/CV";
import Header from "@/components/app/Header";
import Skills from "@/components/app/Skills";
import Projects from "@/components/app/Projects";
import BlurFade from "@/components/ui/blur-fade";

export default function Page() {
  return (
    <section className="mt-5">
      <Header />
      <BlurFade delay={0.25 * 2} inView>
        <Projects />
      </BlurFade>
      <BlurFade delay={0.25 * 3} inView>
        <div className="my-8 border-t border-neutral-200 dark:border-neutral-800" />
      </BlurFade>
      <BlurFade delay={0.25 * 4} inView>
        <WorkExperience />
      </BlurFade>
      <BlurFade delay={0.25 * 5} inView>
        <Education />
      </BlurFade>
      <BlurFade delay={0.25 * 6} inView>
        <Skills />
      </BlurFade>
      <BlurFade delay={0.25 * 7} inView>
        <CV />
      </BlurFade>
    </section>
  );
}
