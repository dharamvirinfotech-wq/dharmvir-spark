const CTASection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Let's Turn Ambitions Into Achievements Together
        </h2>
        <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Ready to take your business to the next level? Our team of experts is
          here to help you build powerful digital solutions.
        </p>
        <a
          href="#contact"
          className="inline-flex bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
        >
          Consult Experts
        </a>
      </div>
    </section>
  );
};

export default CTASection;
