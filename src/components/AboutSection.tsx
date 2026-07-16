import { Target, Users, Zap, Shield } from "lucide-react";

const features = [
  { icon: Target, title: "Result-Driven Approach", desc: "We focus on delivering measurable outcomes for your business growth." },
  { icon: Users, title: "Expert Team", desc: "Our skilled developers and designers bring years of industry experience." },
  { icon: Zap, title: "Cutting-Edge Tech", desc: "We leverage the latest technologies to build future-proof solutions." },
  { icon: Shield, title: "Reliable Support", desc: "24/7 dedicated support to ensure your systems run smoothly." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Your Digital Partners in Growth
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Dharam Vir Infotech is a leading IT solutions company focused on
              empowering businesses to streamline their operations with innovative
              and smart digital solutions. Specializing in web and mobile app
              development, our expert team creates impactful strategies to help you
              unlock the full potential of your business.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We combine creativity with technical expertise to deliver solutions
              that not only look exceptional but also drive real business results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-background p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <f.icon className="text-accent mb-4" size={28} />
                <h3 className="font-display font-semibold text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
