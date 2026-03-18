import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  Menu,
  X,
  Globe,
  Smartphone,
  Brain,
  ShoppingCart,
  Code2,
  Users,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

const megaServices = [
  {
    icon: Globe,
    title: "Web & Software Development",
    desc: "Custom web apps built for performance & growth",
    href: "/services#web",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native & cross-platform mobile solutions",
    href: "/services#mobile",
  },
  {
    icon: Brain,
    title: "AI & ML Development",
    desc: "Intelligent automation & predictive analytics",
    href: "/services#ai",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Scalable online stores & marketplaces",
    href: "/services#ecommerce",
  },
  {
    icon: Code2,
    title: "Software Product Engineering",
    desc: "End-to-end product development & launch",
    href: "/services#product",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "On-demand skilled developers & engineers",
    href: "/services#teams",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

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
          <a href="/" className="font-display text-xl font-bold text-primary tracking-tight">
            Dharam Vir <span className="text-accent">Infotech</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <a
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </a>

                  {/* Mega Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      megaOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="w-[680px] bg-background rounded-xl shadow-2xl border border-border p-6">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">
                          Our Services
                        </h3>
                        <a
                          href="/services"
                          className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                        >
                          View All <ArrowRight size={12} />
                        </a>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {megaServices.map((service) => (
                          <a
                            key={service.title}
                            href={service.href}
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                              <service.icon className="text-accent" size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                                {service.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {service.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          Need a custom solution?
                        </p>
                        <a
                          href="/#contact"
                          className="text-xs font-semibold bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
                        >
                          Talk To Experts
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <a
            href="/#contact"
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
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground hover:text-accent border-b border-border"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 py-2 space-y-1 border-b border-border">
                      {megaServices.map((service) => (
                        <a
                          key={service.title}
                          href={service.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 py-2 text-sm text-foreground/80 hover:text-accent"
                        >
                          <service.icon size={16} className="text-accent" />
                          {service.title}
                        </a>
                      ))}
                      <a
                        href="/services"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-1 py-2 text-sm font-semibold text-accent"
                      >
                        View All Services <ArrowRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground hover:text-accent border-b border-border last:border-0"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/#contact"
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
