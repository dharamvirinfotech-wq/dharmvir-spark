import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold mb-4">
              Dharam Vir <span className="text-accent">Infotech</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Empowering businesses with innovative digital solutions. Your trusted
              technology partner for web, mobile, and AI development.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/services" className="hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">AI & ML Solutions</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/technologies" className="hover:text-accent transition-colors">Technologies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li>+91 98765 43210</li>
              <li>info@dharamvirinfotech.com</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Dharam Vir Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;