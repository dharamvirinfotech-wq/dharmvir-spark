import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} /> +91 98765 43210
            </a>
            <a href="mailto:info@dharamvirinfotech.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} /> info@dharamvirinfotech.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background shadow-lg border-b border-border"
            : "bg-background/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#home" className="font-display text-xl font-bold text-primary tracking-tight">
            Dharam Vir <span className="text-accent">Infotech</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-accent text-accent-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Get a Free Consultation
          </a>

          <button
            className="md:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-foreground hover:text-accent border-b border-border last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 bg-accent text-accent-foreground text-center px-6 py-2.5 rounded-lg text-sm font-semibold"
            >
              Get a Free Consultation
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
