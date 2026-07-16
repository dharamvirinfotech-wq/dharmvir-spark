const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "Built a scalable multi-vendor e-commerce platform with seamless payment integration and real-time inventory management.",
  },
  {
    title: "Healthcare App",
    category: "Mobile App",
    desc: "Designed an intuitive healthcare application enabling patients to book appointments, view records, and consult doctors online.",
  },
  {
    title: "Real Estate Portal",
    category: "Web Application",
    desc: "Developed a comprehensive real estate listing platform with advanced search filters, virtual tours, and lead management.",
  },
  {
    title: "EdTech Platform",
    category: "AI & Web",
    desc: "Created an AI-powered learning management system with personalized course recommendations and progress tracking.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Excellence is Driven By Client Satisfaction
          </h2>
          <p className="text-muted-foreground">
            A curated collection of our collaborations across diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-primary rounded-lg p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-display text-xl font-bold text-primary-foreground mt-3 mb-3">
                {project.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
