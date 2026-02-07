import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-xl font-bold tracking-tighter hover:text-white/80 transition-colors">
          ~/deepak-k
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="h-4 w-px bg-border mx-2" />
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com/in/deepak-k-637839283" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:deeeeps06@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-6 shadow-2xl"
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-medium text-foreground/80 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border flex space-x-6">
              <a href="https://linkedin.com/in/deepak-k-637839283" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:deeeeps06@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
