import { useParams, useSearchParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { Star, MapPin, Briefcase, DollarSign, CheckCircle, Clock, Globe, Award, Send } from "lucide-react";
import { toast } from "sonner";

interface DeveloperData {
  name: string;
  role: string;
  experience: string;
  hourlyRate: string;
  rating: number;
  location: string;
  avatar: string;
  skills: string[];
  bio: string;
  languages: string[];
  availability: string;
  projectsCompleted: number;
  certifications: string[];
  education: string;
}

const developerDatabase: Record<string, DeveloperData[]> = {};

const defaultDevelopers: Record<string, DeveloperData> = {
  "rahul-sharma": {
    name: "Rahul Sharma", role: "Developer", experience: "8+ Years", hourlyRate: "$25-35", rating: 4.9,
    location: "Bangalore, India", avatar: "RS", skills: ["Team Lead", "Architecture", "Mentoring", "Code Review", "System Design"],
    bio: "Passionate senior developer with 8+ years of experience building scalable applications. Expertise in leading teams, designing architectures, and mentoring junior developers. Has delivered 50+ projects for clients across US, UK, and Europe.",
    languages: ["English (Fluent)", "Hindi (Native)"], availability: "Full-time / Part-time",
    projectsCompleted: 54, certifications: ["AWS Certified Solutions Architect", "Google Cloud Professional"],
    education: "B.Tech Computer Science, IIT Delhi"
  },
  "priya-patel": {
    name: "Priya Patel", role: "Developer", experience: "6+ Years", hourlyRate: "$20-30", rating: 4.8,
    location: "Pune, India", avatar: "PP", skills: ["UI/UX", "Performance", "Testing", "Responsive Design", "Accessibility"],
    bio: "Detail-oriented developer with 6+ years specializing in creating beautiful, performant user interfaces. Strong focus on accessibility, testing, and user experience optimization.",
    languages: ["English (Fluent)", "Hindi (Native)", "Gujarati"], availability: "Full-time",
    projectsCompleted: 42, certifications: ["Meta Front-End Developer Certificate", "Certified Scrum Developer"],
    education: "M.Tech Software Engineering, BITS Pilani"
  },
  "amit-kumar": {
    name: "Amit Kumar", role: "Developer", experience: "5+ Years", hourlyRate: "$18-25", rating: 4.7,
    location: "Hyderabad, India", avatar: "AK", skills: ["API Design", "Database", "Security", "Microservices", "Docker"],
    bio: "Backend-focused developer with 5+ years of experience in building robust APIs, optimizing databases, and implementing security best practices across enterprise applications.",
    languages: ["English (Fluent)", "Hindi (Native)", "Telugu"], availability: "Full-time / Contract",
    projectsCompleted: 38, certifications: ["Certified Kubernetes Administrator", "MongoDB Certified Developer"],
    education: "B.Tech IT, IIIT Hyderabad"
  },
  "sneha-reddy": {
    name: "Sneha Reddy", role: "Developer", experience: "7+ Years", hourlyRate: "$22-32", rating: 4.9,
    location: "Chennai, India", avatar: "SR", skills: ["Full Stack", "DevOps", "Agile", "CI/CD", "Cloud Architecture"],
    bio: "Versatile full-stack developer with 7+ years building end-to-end solutions. Strong DevOps background with expertise in CI/CD pipelines, cloud infrastructure, and agile methodologies.",
    languages: ["English (Fluent)", "Hindi", "Tamil (Native)"], availability: "Full-time",
    projectsCompleted: 47, certifications: ["AWS DevOps Professional", "Certified SAFe Practitioner"],
    education: "M.Sc Computer Science, Anna University"
  },
  "vikram-singh": {
    name: "Vikram Singh", role: "Developer", experience: "4+ Years", hourlyRate: "$15-22", rating: 4.6,
    location: "Noida, India", avatar: "VS", skills: ["Frontend", "Mobile", "CI/CD", "React Native", "Flutter"],
    bio: "Energetic developer with 4+ years specializing in frontend and mobile development. Experienced in cross-platform app development with React Native and Flutter.",
    languages: ["English (Fluent)", "Hindi (Native)"], availability: "Full-time / Part-time",
    projectsCompleted: 29, certifications: ["Google Associate Android Developer", "React Developer Certificate"],
    education: "B.Tech CSE, DTU Delhi"
  },
  "ananya-gupta": {
    name: "Ananya Gupta", role: "Developer", experience: "9+ Years", hourlyRate: "$28-40", rating: 5.0,
    location: "Mumbai, India", avatar: "AG", skills: ["Enterprise", "Cloud", "Strategy", "Technical Leadership", "Architecture"],
    bio: "Senior technical leader with 9+ years of experience delivering enterprise-grade solutions. Expert in cloud architecture, technical strategy, and building high-performing development teams.",
    languages: ["English (Fluent)", "Hindi (Native)", "Marathi"], availability: "Full-time / Advisory",
    projectsCompleted: 63, certifications: ["AWS Solutions Architect Professional", "Azure Solutions Architect Expert", "PMP Certified"],
    education: "M.Tech Computer Science, IIT Bombay"
  },
};

const DeveloperProfile = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "Developer";

  const dev = slug ? defaultDevelopers[slug] : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    engagementType: "full-time",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!dev) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Developer Not Found</h1>
          <p className="text-muted-foreground mb-8">The developer profile you're looking for doesn't exist.</p>
          <Link to="/hire-developer" className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold">
            Browse Developers
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const devWithRole = { ...dev, role };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Hire request submitted successfully!", {
        description: `We'll get back to you within 24 hours about hiring ${devWithRole.name}.`,
      });
      setFormData({ name: "", email: "", phone: "", company: "", projectDescription: "", budget: "", timeline: "", engagementType: "full-time" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner
        title={devWithRole.name}
        subtitle={`${devWithRole.role} · ${devWithRole.experience} Experience`}
        breadcrumb={`Hire Developer / ${devWithRole.role} / ${devWithRole.name}`}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Left: Profile Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Header Card */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-accent/10 border-3 border-accent flex items-center justify-center text-3xl font-bold text-accent flex-shrink-0">
                    {devWithRole.avatar}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-1">{devWithRole.name}</h2>
                    <p className="text-accent font-semibold mb-3">{devWithRole.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{devWithRole.bio}</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <Briefcase className="text-accent mx-auto mb-2" size={22} />
                  <p className="text-lg font-bold text-primary">{devWithRole.experience}</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <Star className="text-accent mx-auto mb-2 fill-accent" size={22} />
                  <p className="text-lg font-bold text-primary">{devWithRole.rating}/5</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <CheckCircle className="text-accent mx-auto mb-2" size={22} />
                  <p className="text-lg font-bold text-primary">{devWithRole.projectsCompleted}+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <DollarSign className="text-accent mx-auto mb-2" size={22} />
                  <p className="text-lg font-bold text-primary">{devWithRole.hourlyRate}</p>
                  <p className="text-xs text-muted-foreground">Per Hour</p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <MapPin size={18} className="text-accent" /> Location & Languages
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{devWithRole.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {devWithRole.languages.map((lang) => (
                      <span key={lang} className="text-xs bg-muted px-2.5 py-1 rounded-full text-foreground">{lang}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-accent" /> Availability
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{devWithRole.availability}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-500/10 text-green-600 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Available Now
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <Award size={18} className="text-accent" /> Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {devWithRole.skills.map((skill) => (
                    <span key={skill} className="bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Certifications & Education */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-primary mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    {devWithRole.certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={14} className="text-accent mt-0.5 flex-shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-primary mb-4">Education</h3>
                  <p className="text-sm text-muted-foreground">{devWithRole.education}</p>
                </div>
              </div>
            </div>

            {/* Right: Hire Form */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-2">Hire {devWithRole.name.split(" ")[0]}</h3>
                <p className="text-muted-foreground text-sm mb-6">Fill in your project details and we'll connect you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Engagement Type *</label>
                    <select name="engagementType" value={formData.engagementType} onChange={handleChange} required
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="project-based">Project Based</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Select budget</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Select timeline</option>
                      <option value="immediately">Start Immediately</option>
                      <option value="1-2weeks">1-2 Weeks</option>
                      <option value="1month">Within 1 Month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Project Description *</label>
                    <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} required rows={4}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Describe your project requirements..." />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
                    <Send size={16} />
                    {isSubmitting ? "Submitting..." : `Hire ${devWithRole.name.split(" ")[0]} Now`}
                  </button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">No commitment required. We'll respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeveloperProfile;
