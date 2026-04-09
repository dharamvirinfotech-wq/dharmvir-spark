import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  LogIn,
} from "lucide-react";
import {
  navLinks,
  megaServices,
  megaTechnologies,
  hireCategories,
  promotionCategories,
} from "@/data/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeHireCategory, setActiveHireCategory] = useState(0);
  const [activePromoCategory, setActivePromoCategory] = useState(0);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMegaEnter = (key: string) => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setActiveMega(key);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setActiveMega(null), 200);
  };

  const getMegaItems = (key: string) =>
    key === "services" ? megaServices : megaTechnologies;
  const getMegaTitle = (key: string) =>
    key === "services" ? "Our Services" : "Our Technologies";

  const renderGridMega = (megaKey: string) => (
    <div className="w-[680px] bg-background rounded-xl shadow-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">
          {getMegaTitle(megaKey)}
        </h3>
        <Link
          to={navLinks.find((l) => l.hasMega === megaKey)?.href || "/"}
          className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
        >
          View All <ArrowRight size={12} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {getMegaItems(megaKey).map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <item.icon className="text-accent" size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
        <p className="text-xs text-muted-foreground">Need a custom solution?</p>
        <Link
          to="/contact"
          className="text-xs font-semibold bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Talk To Experts
        </Link>
      </div>
    </div>
  );

  const renderCategoryMega = (categories: typeof hireCategories, activeCat: number, setActiveCat: (idx: number) => void, viewAllHref: string, viewAllLabel: string) => (
    <div className="w-[780px] bg-background rounded-xl shadow-2xl border border-border overflow-hidden">
      <div className="flex">
        <div className="w-[240px] bg-muted/50 border-r border-border p-4">
          <h3 className="font-display font-bold text-primary text-xs uppercase tracking-wider mb-4">
            Browse Categories
          </h3>
          <div className="space-y-1">
            {categories.map((cat, idx) => (
              <button
                key={cat.label}
                onMouseEnter={() => setActiveCat(idx)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeCat === idx
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-display font-bold text-primary text-sm">
              {categories[activeCat]?.label}
            </h4>
            <Link
              to={viewAllHref}
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {categories[activeCat]?.technologies.map((tech) => (
              <Link
                key={tech.name}
                to={tech.href}
                className="group flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
              >
                <ArrowRight
                  size={14}
                  className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                  {tech.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Can't find what you need?
            </p>
            <Link
              to="/contact"
              className="text-xs font-semibold bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Talk To Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone size={14} /> +91 98765 43210
            </a>
            <a
              href="mailto:info@dharamvirinfotech.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
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
          <Link
            to="/"
            className="font-display text-xl font-bold text-primary tracking-tight"
          >
            Dharam Vir <span className="text-accent">Infotech</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => handleMegaEnter(link.hasMega!)}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeMega === link.hasMega ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Mega Menu */}
                  <div
                    className={`absolute top-full ${(link.hasMega === "hire" || link.hasMega === "promotion") ? "right-0" : "left-1/2 -translate-x-1/2"} pt-4 transition-all duration-200 ${
                      activeMega === link.hasMega
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {link.hasMega === "hire"
                      ? renderCategoryMega(hireCategories, activeHireCategory, setActiveHireCategory, "/hire-developer", "Hire Developers")
                      : link.hasMega === "promotion"
                      ? renderCategoryMega(promotionCategories, activePromoCategory, setActivePromoCategory, "/promotion", "Promotion Services")
                      : renderGridMega(link.hasMega!)}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex bg-accent text-accent-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Get a Free Consultation
          </Link>

          <button
            className="lg:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border px-4 pb-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key={link.href}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === link.hasMega
                          ? null
                          : link.hasMega ?? null
                      )
                    }
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground hover:text-accent border-b border-border"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileExpanded === link.hasMega ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === link.hasMega && (
                    <div className="pl-4 py-2 space-y-1 border-b border-border">
                      {(link.hasMega === "hire" || link.hasMega === "promotion")
                        ? (link.hasMega === "hire" ? hireCategories : promotionCategories).map((cat) => (
                            <div key={cat.label} className="mb-3">
                              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 px-2">
                                {cat.label}
                              </p>
                              {cat.technologies.map((tech) => (
                                <Link
                                  key={tech.name}
                                  to={tech.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block py-1.5 px-2 text-sm text-foreground/80 hover:text-accent"
                                >
                                  {tech.name}
                                </Link>
                              ))}
                            </div>
                          ))
                        : getMegaItems(link.hasMega!).map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-2 py-2 text-sm text-foreground/80 hover:text-accent"
                            >
                              <item.icon size={16} className="text-accent" />
                              {item.title}
                            </Link>
                          ))}
                      <Link
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-1 py-2 text-sm font-semibold text-accent"
                      >
                        View All {link.label} <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground hover:text-accent border-b border-border last:border-0"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 bg-accent text-accent-foreground text-center px-6 py-2.5 rounded-lg text-sm font-semibold"
            >
              Get a Free Consultation
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;