import {
  Globe,
  Smartphone,
  Brain,
  ShoppingCart,
  Code2,
  Users,
  Server,
  Database,
  Cloud,
  Blocks,
  Shield,
  Search,
  Megaphone,
  Bot,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  hasMega?: string;
};

export type MegaItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
};

export type HireCategory = {
  label: string;
  technologies: { name: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMega: "services" },
  { label: "Technologies", href: "/technologies", hasMega: "technologies" },
  { label: "Hire Developer", href: "/hire-developer", hasMega: "hire" },
  { label: "Promotion", href: "/promotion", hasMega: "promotion" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const megaPromotion: MegaItem[] = [
  { icon: Search, title: "SEO Services", desc: "Boost rankings & organic traffic", href: "/promotion/seo" },
  { icon: Megaphone, title: "Digital Marketing", desc: "Full-spectrum digital growth strategies", href: "/promotion/digital-marketing" },
  { icon: Bot, title: "AI Marketing Agency", desc: "AI-powered marketing automation", href: "/promotion/ai-marketing" },
];

export const promotionCategories: HireCategory[] = [
  {
    label: "SEO Services",
    technologies: [
      { name: "SEO Services", href: "/promotion/seo-services" },
      { name: "On-Page SEO Services", href: "/promotion/on-page-seo" },
      { name: "Organic SEO Services", href: "/promotion/organic-seo" },
      { name: "Off-Page SEO Services", href: "/promotion/off-page-seo" },
      { name: "Link Building Services", href: "/promotion/link-building" },
      { name: "Digital PR Services", href: "/promotion/digital-pr" },
      { name: "Ecommerce SEO Services", href: "/promotion/ecommerce-seo" },
      { name: "Local SEO Services", href: "/promotion/local-seo" },
      { name: "Technical SEO Services", href: "/promotion/technical-seo" },
    ],
  },
  {
    label: "Digital Marketing",
    technologies: [
      { name: "PPC Management", href: "/promotion/ppc-management" },
      { name: "Social Media Marketing", href: "/promotion/social-media-marketing" },
      { name: "Content Marketing", href: "/promotion/content-marketing" },
      { name: "Email Marketing", href: "/promotion/email-marketing" },
      { name: "Influencer Marketing", href: "/promotion/influencer-marketing" },
      { name: "Video Marketing", href: "/promotion/video-marketing" },
      { name: "Affiliate Marketing", href: "/promotion/affiliate-marketing" },
    ],
  },
  {
    label: "AI Marketing Agency",
    technologies: [
      { name: "AI Content Generation", href: "/promotion/ai-content-generation" },
      { name: "AI Analytics & Insights", href: "/promotion/ai-analytics" },
      { name: "Chatbot Marketing", href: "/promotion/chatbot-marketing" },
      { name: "Predictive Marketing", href: "/promotion/predictive-marketing" },
      { name: "AI Ad Optimization", href: "/promotion/ai-ad-optimization" },
      { name: "AI Email Automation", href: "/promotion/ai-email-automation" },
    ],
  },
];

export const megaServices: MegaItem[] = [
  { icon: Globe, title: "Web & Software Development", desc: "Custom web apps built for performance & growth", href: "/services/web-development" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native & cross-platform mobile solutions", href: "/services/mobile-development" },
  { icon: Brain, title: "AI & ML Development", desc: "Intelligent automation & predictive analytics", href: "/services/ai-development" },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Scalable online stores & marketplaces", href: "/services/ecommerce" },
  { icon: Code2, title: "Software Product Engineering", desc: "End-to-end product development & launch", href: "/services/product-engineering" },
  { icon: Users, title: "Dedicated Teams", desc: "On-demand skilled developers & engineers", href: "/services/dedicated-teams" },
];

export const megaTechnologies: MegaItem[] = [
  { icon: Code2, title: "Frontend Technologies", desc: "React, Angular, Vue.js & more", href: "/technologies/frontend" },
  { icon: Server, title: "Backend Technologies", desc: "Node.js, Python, Java & more", href: "/technologies/backend" },
  { icon: Smartphone, title: "Mobile Technologies", desc: "React Native, Flutter, Swift", href: "/technologies/mobile" },
  { icon: Database, title: "Database & Storage", desc: "PostgreSQL, MongoDB, Redis", href: "/technologies/database" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, GCP, Docker, Kubernetes", href: "/technologies/cloud" },
  { icon: Brain, title: "AI & Machine Learning", desc: "TensorFlow, PyTorch, OpenAI", href: "/technologies/ai" },
  { icon: Blocks, title: "CMS & E-commerce", desc: "WordPress, Shopify, Magento", href: "/technologies/cms" },
  { icon: Shield, title: "Security & Testing", desc: "Jest, Cypress, OAuth, JWT", href: "/technologies/security" },
];

export const hireCategories: HireCategory[] = [
  {
    label: "Frontend Developers",
    technologies: [
      { name: "Hire React.js Developer", href: "/hire-developer/reactjs" },
      { name: "Hire Angular Developer", href: "/hire-developer/angular" },
      { name: "Hire Vue.js Developer", href: "/hire-developer/vuejs" },
      { name: "Hire Next.js Developer", href: "/hire-developer/nextjs" },
      { name: "Hire TypeScript Developer", href: "/hire-developer/typescript" },
    ],
  },
  {
    label: "Backend Developers",
    technologies: [
      { name: "Hire Node.js Developer", href: "/hire-developer/nodejs" },
      { name: "Hire Python Developer", href: "/hire-developer/python" },
      { name: "Hire PHP Developer", href: "/hire-developer/php" },
      { name: "Hire Java Developer", href: "/hire-developer/java" },
      { name: "Hire .NET Developer", href: "/hire-developer/dotnet" },
      { name: "Hire Laravel Developer", href: "/hire-developer/laravel" },
      { name: "Hire Django Developer", href: "/hire-developer/django" },
      { name: "Hire Ruby on Rails Developer", href: "/hire-developer/ruby-on-rails" },
      { name: "Hire Go Developer", href: "/hire-developer/golang" },
      { name: "Hire Rust Developer", href: "/hire-developer/rust" },
      { name: "Hire GraphQL Developer", href: "/hire-developer/graphql" },
    ],
  },
  {
    label: "Mobile Developers",
    technologies: [
      { name: "Hire React Native Developer", href: "/hire-developer/react-native" },
      { name: "Hire Flutter Developer", href: "/hire-developer/flutter" },
      { name: "Hire iOS Developer", href: "/hire-developer/ios" },
      { name: "Hire Android Developer", href: "/hire-developer/android" },
      { name: "Hire Swift Developer", href: "/hire-developer/swift" },
      { name: "Hire Kotlin Developer", href: "/hire-developer/kotlin" },
    ],
  },
  {
    label: "Full Stack & DevOps",
    technologies: [
      { name: "Hire Full Stack Developer", href: "/hire-developer/fullstack" },
      { name: "Hire MERN Stack Developer", href: "/hire-developer/mern" },
      { name: "Hire MEAN Stack Developer", href: "/hire-developer/mean-stack" },
      { name: "Hire DevOps Engineer", href: "/hire-developer/devops" },
      { name: "Hire Cloud Architect", href: "/hire-developer/cloud-architect" },
      { name: "Hire AWS Developer", href: "/hire-developer/aws" },
    ],
  },
  {
    label: "AI, Data & Emerging",
    technologies: [
      { name: "Hire AI/ML Engineer", href: "/hire-developer/ai-ml" },
      { name: "Hire Data Scientist", href: "/hire-developer/data-scientist" },
      { name: "Hire Blockchain Developer", href: "/hire-developer/blockchain" },
      { name: "Hire Power BI Developer", href: "/hire-developer/power-bi" },
      { name: "Hire Game Developer", href: "/hire-developer/game-developer" },
    ],
  },
  {
    label: "CMS & E-commerce",
    technologies: [
      { name: "Hire WordPress Developer", href: "/hire-developer/wordpress" },
      { name: "Hire Shopify Developer", href: "/hire-developer/shopify" },
      { name: "Hire Magento Developer", href: "/hire-developer/magento" },
      { name: "Hire Salesforce Developer", href: "/hire-developer/salesforce" },
    ],
  },
  {
    label: "Design & QA",
    technologies: [
      { name: "Hire UI/UX Designer", href: "/hire-developer/ui-ux" },
      { name: "Hire QA Engineer", href: "/hire-developer/qa" },
    ],
  },
];
