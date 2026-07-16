import {
  Globe,
  Smartphone,
  Brain,
  ShoppingCart,
  Code2,
  Users,
  TestTube,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web & Software Development",
    desc: "Custom software and web applications built for performance, security, and growth.",
    items: ["Enterprise Software", "CRM Solutions", "Website Design", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "High-performing mobile apps that function smoothly across all platforms.",
    items: ["Android & iOS Apps", "Cross-Platform Dev", "UI/UX for Mobile", "App Store Deployment"],
  },
  {
    icon: Brain,
    title: "AI & ML Development",
    desc: "Advanced AI and machine learning solutions to transform operations and deliver insights.",
    items: ["Custom AI Solutions", "Chatbot Development", "Generative AI", "Predictive Modeling"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Engaging, secure, and scalable online stores that drive conversions and loyalty.",
    items: ["Custom Store Dev", "Platform Integration", "Payment Gateways", "Maintenance & Support"],
  },
  {
    icon: Code2,
    title: "Software Product Engineering",
    desc: "End-to-end software services to guide your project from prototype to live launch.",
    items: ["MVP Development", "Progressive Web Apps", "UI/UX Design", "App Modernization"],
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "On-demand access to skilled developers and engineers for seamless project scaling.",
    items: ["Offshore Teams", "Staff Augmentation", "Hire Developers", "Agile Integration"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Advanced Digital Solutions for Business Success
          </h2>
          <p className="text-muted-foreground">
            Full-cycle digital services to design, build, and support your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background border border-border rounded-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <service.icon
                className="text-accent mb-5 group-hover:scale-110 transition-transform"
                size={36}
              />
              <h3 className="font-display font-bold text-primary text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/70 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
