import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            IT Solutions Company in India
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up-delay-1">
            Where Innovation Meets{" "}
            <span className="text-gradient">Imagination</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl animate-fade-in-up-delay-2">
            We deliver smart, scalable, enterprise-ready web & mobile solutions
            that turn your ideas into a powerful digital experience. Trusted by
            businesses worldwide.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
            <a
              href="#services"
              className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Talk To Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
