import { personalInfo } from "@/data/portfolio";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border/40">
    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[13px] text-muted-foreground">
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
      <div className="flex items-center gap-6">
        {[
          { label: "GitHub", href: personalInfo.social.github },
          { label: "LinkedIn", href: personalInfo.social.linkedin },
          { label: "X", href: personalInfo.social.twitter },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
