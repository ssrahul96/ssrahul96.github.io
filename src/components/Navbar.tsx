import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Typed from "typed.js";
import { navLinks, profile } from "@/data/portfolio";

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar = ({ toggleTheme, isDarkTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const identityRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 24);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    if (!identityRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const typed = new Typed(identityRef.current, {
      strings: ["Rahul", "Software Engineer", "DevOps", "Techie", "Open Source Contributor"],
      typeSpeed: 100,
      backSpeed: 25,
      loop: true,
      cursorChar: "_",
    });

    return () => typed.destroy();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          aria-label="Rahul Somasundaram — back to top"
          className="flex min-w-0 items-center font-display text-lg font-semibold"
        >
          <span
            ref={identityRef}
            className="max-w-[145px] overflow-hidden whitespace-nowrap text-gradient sm:max-w-[260px] md:max-w-none"
          >
            Rahul
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="contact-pill">
            Get in touch
          </a>
          <ThemeButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            className="icon-button"
          >
            {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div className="border-t border-border/70 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} className="contact-pill mt-3 w-fit">
              Get in touch
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

/** Theme control shared by the desktop and mobile navigation. */
function ThemeButton({ isDarkTheme, toggleTheme }: NavbarProps) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
      className="icon-button"
    >
      {isDarkTheme ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export default Navbar;
