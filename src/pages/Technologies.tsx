import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Brain,
  Blocks,
  Server,
  Shield,
} from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    icon: Code2,
    title: "Frontend Technologies",
    desc: "Building stunning, responsive user interfaces with modern frameworks.",
    techs: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Bootstrap"],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Technologies",
    desc: "Scalable server-side architectures powering your applications.",
    techs: ["Node.js", "Python", "Django", "PHP", "Laravel", "Java", "Spring Boot", ".NET Core"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Technologies",
    desc: "Native and cross-platform mobile solutions for iOS & Android.",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
  },
  {
    id: "database",
    icon: Database,
    title: "Database & Storage",
    desc: "Robust data management solutions for every scale.",
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Elasticsearch", "DynamoDB"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure and CI/CD pipeline management.",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform", "GitHub Actions"],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Intelligent solutions with cutting-edge AI technologies.",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Scikit-learn", "Hugging Face", "Computer Vision"],
  },
  {
    id: "cms",
    icon: Blocks,
    title: "CMS & E-commerce",
    desc: "Content management and online store platforms.",
    techs: ["WordPress", "Shopify", "Magento", "WooCommerce", "Strapi", "Contentful"],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Testing",
    desc: "Ensuring quality, reliability, and security of your products.",
    techs: ["Jest", "Cypress", "Selenium", "OAuth 2.0", "JWT", "SSL/TLS", "Penetration Testing"],
  },
];

const Technologies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageBanner
        title="Technologies We Use"
        subtitle="Leveraging cutting-edge technologies to build future-proof solutions"
        breadcrumb="Technologies"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <cat.icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-primary">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-foreground border border-border hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Technologies;
