const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "15+", label: "Countries Served" },
  { value: "98%", label: "Customer Retention" },
  { value: "10+ Yrs", label: "In Industry" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-display">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
