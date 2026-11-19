import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Competências", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(href);
          },
          { rootMargin: "-40% 0px -60% 0px" }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const themeLabel = theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled ? "bg-background/60 border-border/40" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between" aria-label="Navegação principal">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="font-display font-semibold text-foreground tracking-tight text-[17px] rounded"
          aria-label="Eliúde Francisco — início"
        >
          EF<span className="text-muted-foreground">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  aria-current={activeSection === item.href ? "true" : undefined}
                  className={`text-[15px] transition-colors duration-200 rounded ${
                    activeSection === item.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
            aria-label={themeLabel}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            aria-label={themeLabel}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-1 rounded"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background/80 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className={`block text-[15px] transition-colors w-full text-left py-1 rounded ${
                      activeSection === item.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
