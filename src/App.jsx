// App.jsx
import {
  Briefcase,
  Mail,
  Linkedin,
  ExternalLink,
  Download,
  Menu,
  X,
  Cloud,
  Server,
  Terminal,
  GitBranch,
  Zap,
  Layers,
  BarChart2,
  Award,
  ChevronDown,
  Sun,
  Moon,
  Database,
  Code2,
  Box,
  Cpu,
  Globe,
  Activity,
  Shield,
  Rocket,
  Search,
  Workflow,
  RefreshCw,
  ShieldCheck,
  Folder,
  ArrowUpRight,
  Calendar,
  Building2,
  ChevronRight,
  Send,
  Copy,
  Check,
  Wifi,
  ArrowRight,
} from "lucide-react";

import { useState, useEffect } from "react";
// Import our new hook and component
import { useTheme } from "./hooks/useTheme";
import ThemeToggle from "./components/ThemeToggle";

import InteractiveTerminal from "./components/InteractiveTerminal";

// Custom Github Icon to replace the deprecated Lucide version
const GithubIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


// Import assets (KEEP YOUR EXISTING IMPORTS)
import heroImage from "./assets/images/hero/Thabiso 1.jpg";
import cvFile from "./assets/documents/Thabiso Matsaba Resume.pdf";
import cloudExplorerImg from "./assets/images/projects/cloud_explorer.png";
import pharmacyAppImg from "./assets/images/projects/PharmacyApp.png";
import googleCloudBadge from "./assets/images/badges/google-cloud-engineer.png";
import awsBadge from "./assets/images/badges/aws-cloud-practitioner.png";
import googleDigitalBadge from "./assets/images/badges/google-digital-leader.png";
import fortinetBadge from "./assets/images/badges/fortinet-cybersecurity.png";
import sapBadge from "./assets/images/badges/sap-fico.png";
import Fast_MoneyImg from "./assets/images/projects/Fast_Money.png";
import certifiedkubernetesadministratorBadge from "./assets//images/badges/certified_kubernetes_administrator.png";
import googleCloudDevOpsBadge from "./assets/images/badges/google-cloud-devops-engineer.png";

// KEEP YOUR EXISTING portfolioData OBJECT AS IS
const portfolioData = {
  name: "Thabiso Matsaba",
  title: "Junior DevOps Engineer",
  bio: "Hands-on Junior DevOps Engineer skilled in building and managing scalable cloud infrastructure on GCP and AWS. Proven ability in CI/CD, Docker, and automation.",

  contact: {
    email: "thabisomatsaba96@gmail.com",
    linkedin: "https://www.linkedin.com/in/thabiso-matsaba-b4289616b/",
    github: "https://github.com/Shaun-Trigga96",
  },

  cvUrl: cvFile,
  heroImage: heroImage,

  about: {
    title: "About Me",
    description:
      "Hello! I'm Thabiso Matsaba, a Junior DevOps Engineer with hands-on experience in building and managing scalable cloud infrastructure on GCP and AWS. I have a proven ability to implement CI/CD pipelines, containerize applications with Docker, and automate deployments. With a strong foundation in software development (Python, Java) and certified in both Google Cloud and AWS, I'm passionate about bridging the gap between development and operations to build reliable, scalable systems.",
  },

  skills: [
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      items: [
        "GCP",
        "AWS",
        "Terraform",
        "Google Cloud Build",
        "GitHub Actions",
        "GKE",
        "Cloud Run",
        "EC2",
        "S3",
        "Lambda",
      ],
    },
    {
      category: "Containerization & Orchestration",
      icon: Layers,
      items: [
        "Kubernetes",
        "Docker",
        "Docker Compose",
        "Container Registry",
        "Microservices",
      ],
    },
    {
      category: "CI/CD",
      icon: Zap,
      items: ["Google Cloud Build", "GitHub Actions", "CI/CD Pipelines"],
    },
    {
      category: "Infrastructure as Code (IaC)",
      icon: Server,
      items: ["Terraform"],
    },
    {
      category: "Monitoring & Logging",
      icon: BarChart2,
      items: [
        "Google Cloud Monitoring",
        "Cloud Logging",
        "APM",
        "Log Analysis",
        "System Observability",
      ],
    },
    {
      category: "Automation & Scripting",
      icon: Terminal,
      items: ["Linux", "Python", "Bash/Shell Scripting", "JavaScript/Node.js"],
    },
    {
      category: "Version Control",
      icon: GitBranch,
      items: ["Git", "GitHub", "GitLab", "Agile/Scrum"],
    },
    {
      category: "Development Background",
      icon: Database,
      items: [
        "Java",
        "Spring Boot",
        "RESTful APIs",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
  ],

  certifications: [
    {
      title: "Professional Cloud DevOps Engineer Certification",
      issuer: "Google Cloud",
      url: "",
      badgeImage: googleCloudDevOpsBadge,
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      url: "",
      badgeImage: certifiedkubernetesadministratorBadge,
    },
    {
      title: "Google Associate Cloud Engineer",
      issuer: "Google Cloud",
      url: "https://www.credly.com/earner/earned/badge/50f682d2-1ec2-499e-8980-408be51fe7f2",
      badgeImage: googleCloudBadge,
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      url: "https://www.credly.com/earner/earned/badge/cbb9bcdc-b241-478b-9bed-9cd2a37ec1be",
      badgeImage: awsBadge,
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      url: "https://www.credly.com/earner/earned/badge/42949cd3-6798-4554-8aae-0dfb7f649d50",
      badgeImage: googleDigitalBadge,
    },
    {
      title: "Fortinet Certified Associate - Cybersecurity",
      issuer: "Fortinet",
      url: "https://www.credly.com/earner/earned/badge/95e94846-ff37-430c-b128-165acf466228",
      badgeImage: fortinetBadge,
    },
    {
      title: "SAP S/4HANA Financial Accounting (FICO)",
      issuer: "SAP",
      url: "",
      badgeImage: sapBadge,
    },
  ],

  projects: [
    {
      title: "Cloud Explorer - Mobile Learning App",
      description:
        "Architected a cross-platform mobile app (React Native) to teach GCP, AWS, and Azure concepts. Features a scalable GCP microservices backend and a Gemini API integration.",
      imageUrl: cloudExplorerImg,
      tags: [
        "React Native",
        "GCP",
        "Kubernetes",
        "Terraform",
        "Docker",
        "Firebase",
        "Gemini API",
        "Cloud Build",
      ],
      githubUrl: "https://github.com/Shaun-Trigga96/CloudExplorer",
      demoUrl: "",
    },
    {
      title: "PharmacyApp - Healthcare Management Solution",
      description:
        "Containerized a full-stack pharmacy app (Angular, Spring Boot) using Docker. Deployed on AWS EC2 with auto-scaling and load balancing for high availability.",
      imageUrl: pharmacyAppImg,
      tags: [
        "Docker",
        "AWS EC2",
        "CI/CD",
        "Nginx",
        "Spring Boot",
        "Angular",
        "MySQL",
      ],
      githubUrl: "https://github.com/220296006/PharmacyApp",
      demoUrl: "",
    },
    {
      title: "VP Bank App - Banking Application",
      description:
        "Built a secure banking application with Flask backend and Tkinter GUI. Features include user authentication with JWT, account management, investment calculators, and SMTP-based password recovery.",
      imageUrl: Fast_MoneyImg,
      tags: [
        "Python",
        "Flask",
        "SQLAlchemy",
        "JWT",
        "Tkinter",
        "SMTP",
        "Authentication",
      ],
      githubUrl: "https://github.com/220296006/banking-app-py-master",
      demoUrl: "",
    },
  ],

  experience: [
    {
      role: "Google Cloud Infrastructure Intern - C2 Operations",
      company: "Liquid C2 (Cassava Technologies)",
      dates: "May 2024 - Jan 2025",
      description: [
        "Designed and implemented scalable cloud infrastructure solutions using Google Cloud Platform, directly contributing to 30% reduction in server response times.",
        "Contributed to enterprise cloud migration initiatives, helping clients transition from legacy systems to modern cloud-native architectures.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "CAPACITI Tech Career Accelerator (UVU Africa)",
      dates: "July 2023 - Jan 2024",
      description: [
        "Developed robust full-stack web applications using Java, Python, HTML5, CSS3, and JavaScript for enterprise-level solutions.",
        "Applied Scrum methodologies to optimize development workflows, delivering five full-stack features ahead of schedule.",
      ],
    },
  ],
};

// Intersection Observer Hook for scroll animations
const useScrollAnimation = () => {
  // ... (Your existing hook code is fine, no changes needed)
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));
    setElements(animatedElements);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

const GlobalStyles = () => (
  <style>{`
    .animate-on-scroll {
      will-change: opacity, transform;
    }
    
    /* When the element is in view, make it visible and reset position */
    .animate-in {
      opacity: 1 !important;
      transform: translate(0, 0) !important;
    }
  `}</style>
);

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-6 md:px-12 max-w-6xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-600 dark:text-cyan-300 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const Header = ({ navLinks, themeHook, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll effects (Navbar style + Progress Bar)
  useEffect(() => {
    const handleScroll = () => {
      // 1. Toggle Glass effect
      setScrolled(window.scrollY > 20);

      // 2. Calculate Progress Bar width
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Futuristic NavLink Component
  const NavLink = ({ href, children, isActive }) => (
    <a
      href={href}
      onClick={(e) => handleLinkClick(e, href)}
      className="group relative px-4 py-2 flex items-center justify-center transition-all duration-300"
    >
      {/* Active / Hover Background Glow */}
      <span
        className={`absolute inset-0 rounded-lg bg-cyan-500/5 dark:bg-cyan-500/10 transition-transform duration-300 ease-out ${
          isActive
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
        }`}
      ></span>

      {/* Text with Brackets Effect */}
      <span
        className={`relative font-mono text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 
        ${
          isActive
            ? "text-cyan-600 dark:text-cyan-400"
            : "text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
        }`}
      >
        {/* Opening Bracket (Hidden by default, slides in on hover/active) */}
        <span
          className={`opacity-0 -translate-x-2 transition-all duration-300 ${
            isActive || "group-hover:opacity-100 group-hover:translate-x-0"
          }`}
        >
          [
        </span>

        {children}

        {/* Closing Bracket */}
        <span
          className={`opacity-0 translate-x-2 transition-all duration-300 ${
            isActive || "group-hover:opacity-100 group-hover:translate-x-0"
          }`}
        >
          ]
        </span>
      </span>

      {/* Active Indicator Dot */}
      {isActive && (
        <span className="absolute bottom-1 w-1 h-1 rounded-full bg-cyan-500 shadow-[0_0_8px_2px_rgba(6,182,212,0.5)]"></span>
      )}
    </a>
  );

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border-gray-200 dark:border-gray-800 py-2 shadow-lg shadow-cyan-500/5"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      {/* Reading Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-100 ease-out z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="group flex items-center gap-2"
            >
              <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group-hover:border-cyan-500 transition-colors duration-300">
                <Terminal className="w-5 h-5 text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors" />
              </div>
              <span className="font-mono font-bold text-lg tracking-tight text-gray-900 dark:text-white">
                {portfolioData.name.split(" ")[0]}
                <span className="text-cyan-500">.dev</span>
                <span className="animate-pulse text-cyan-500">_</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  href={`#${link.id}`}
                  isActive={activeSection === link.id}
                >
                  {link.title}
                </NavLink>
              ))}

              <div className="pl-4 ml-4 border-l border-gray-200 dark:border-gray-700">
                <ThemeToggle useTheme={themeHook} />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle useTheme={themeHook} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-cyan-600 dark:hover:text-cyan-400 focus:outline-none transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
        style={{ top: "60px" }} // Offset for header height
      >
        <div className="px-6 py-8 space-y-2">
          <div className="mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
            <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
              Navigation
            </p>
          </div>
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, `#${link.id}`)}
              className={`flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 translate-x-2"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:translate-x-2"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`text-xs font-mono ${
                    activeSection === link.id
                      ? "text-cyan-500"
                      : "text-gray-400"
                  }`}
                >
                  0{index + 1}.
                </span>
                {link.title}
              </span>
              <ChevronRight
                className={`w-5 h-5 ${
                  activeSection === link.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}

          {/* Mobile Footer Info */}
          <div className="absolute bottom-24 left-6 right-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center">
            <p className="text-xs text-gray-500 font-mono">
              System Status: <span className="text-green-500">Operational</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const handleScrollDown = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  // Tech stack for the bottom ticker
  const techTicker = [
    "Kubernetes",
    "Docker",
    "Terraform",
    "AWS",
    "Google Cloud",
    "Python",
    "Jenkins",
    "Ansible",
    "Prometheus",
    "Grafana",
    "Linux",
    "GitOps",
    "Argocd",
    "Helm",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-gray-50 dark:bg-gray-900 selection:bg-cyan-500 selection:text-white"
    >
      {/* 1. Dynamic Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Floating Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-pulse-slow"></div>
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* LEFT: COMMAND CENTER TEXT */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            {/* System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-gray-600 dark:text-gray-300">
                AVAILABLE FOR DEPLOYMENT
              </span>
            </div>

            <div className="space-y-4">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1] animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500">
                  {portfolioData.name}
                </span>
              </h1>

              {/* Typing Effect Line */}
              <div
                className="flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl font-mono text-gray-600 dark:text-gray-400 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Terminal className="w-6 h-6 text-cyan-500" />
                <span>{portfolioData.title}</span>
                <span className="w-2.5 h-5 bg-cyan-500 animate-blink"></span>
              </div>
            </div>

            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {portfolioData.bio}
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">View Mission Logs</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href={portfolioData.cvUrl}
                download
                className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* RIGHT: REACTOR CORE IMAGE */}
          <div
            className="lg:w-1/2 flex justify-center relative animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-spin-reverse-slower"></div>

              {/* Glowing Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* The Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={portfolioData.heroImage}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x600/1e293b/f1f5f9?text=Profile";
                  }}
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float">
                <Cloud className="w-8 h-8 text-cyan-500" />
              </div>
              <div
                className="absolute bottom-8 -left-8 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Server className="w-8 h-8 text-purple-500" />
              </div>
              <div
                className="absolute -bottom-4 right-8 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-float"
                style={{ animationDelay: "2.5s" }}
              >
                <Shield className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Tech Stack Ticker (Infinite Scroll) */}
      <div className="relative w-full py-6 bg-white/50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800 backdrop-blur-sm overflow-hidden mt-12 lg:mt-0">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techTicker, ...techTicker, ...techTicker].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-8 text-gray-400 dark:text-gray-500 font-mono font-semibold text-sm uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              {tech}
            </div>
          ))}
        </div>
        {/* Fade edges for ticker */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block cursor-pointer"
        onClick={handleScrollDown}
      >
        <div className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-md shadow-lg">
          <ChevronDown className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        .animate-spin-reverse-slower {
          animation: spin 20s linear infinite reverse;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

const About = () => {
  // Cyber-styled DevOps Stages
  const steps = [
    { id: 1, label: "PLAN", icon: Search, x: 150, y: 60, color: "#06b6d4" }, // Cyan-500
    { id: 2, label: "CODE", icon: Code2, x: 60, y: 150, color: "#6366f1" }, // Indigo-500
    { id: 3, label: "BUILD", icon: Box, x: 150, y: 240, color: "#a855f7" }, // Purple-500
    { id: 4, label: "TEST", icon: Shield, x: 280, y: 240, color: "#ec4899" }, // Pink-500
    {
      id: 5,
      label: "RELEASE",
      icon: GitBranch,
      x: 370,
      y: 150,
      color: "#f43f5e",
    }, // Rose-500
    { id: 6, label: "DEPLOY", icon: Rocket, x: 280, y: 60, color: "#f97316" }, // Orange-500
    {
      id: 7,
      label: "OPERATE",
      icon: Activity,
      x: 215,
      y: 150,
      color: "#22c55e",
    }, // Green-500
  ];

  return (
    <Section
      id="about"
      className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white selection:bg-cyan-500 selection:text-white"
    >
      {/* 1. Cyber Grid Background - Adaptive */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-10"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Floating Glow Orbs - Adaptive */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: NARRATIVE CONTENT */}
          <div className="space-y-8 animate-on-scroll opacity-0 translate-x-[-30px] transition-all duration-700">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-mono tracking-widest mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                SYSTEM STATUS: ONLINE
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
                AUTOMATING THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-500 filter drop-shadow-sm">
                  POSSIBLE
                </span>
              </h2>
            </div>

            <div className="relative p-6 rounded-2xl bg-white/60 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 transition-colors duration-500 group shadow-lg dark:shadow-none">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition duration-500 blur"></div>
              <p className="relative text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                <strong className="text-cyan-700 dark:text-white font-semibold">
                  I don't just write code; I engineer ecosystems.
                </strong>{" "}
                {portfolioData.about.description}
              </p>
            </div>

            {/* Stats / Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-xl hover:shadow-lg dark:hover:bg-gray-800/80 transition-all duration-300">
                <Cloud className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mb-2" />
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Cloud
                </span>
                <span className="font-bold text-gray-900 dark:text-white">
                  Native
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-xl hover:shadow-lg dark:hover:bg-gray-800/80 transition-all duration-300">
                <Workflow className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Pipelines
                </span>
                <span className="font-bold text-gray-900 dark:text-white">
                  Automated
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-xl hover:shadow-lg dark:hover:bg-gray-800/80 transition-all duration-300">
                <Shield className="w-6 h-6 text-pink-600 dark:text-pink-400 mb-2" />
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Security
                </span>
                <span className="font-bold text-gray-900 dark:text-white">
                  First
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: NEON INFINITY LOOP VISUAL */}
          <div className="relative flex justify-center items-center animate-on-scroll opacity-0 translate-x-[30px] transition-all duration-700 delay-200">
            <div className="relative w-full max-w-lg aspect-square">
              {/* The Glowing SVG Circuit */}
              <svg
                viewBox="0 0 430 300"
                className="w-full h-full drop-shadow-2xl dark:drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <defs>
                  <linearGradient
                    id="neonGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
                    <stop offset="50%" stopColor="#c084fc" /> {/* Purple */}
                    <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Background Track (Adaptive color) */}
                <path
                  d="M215,150 m-140,0 a70,70 0 1,0 140,0 a70,70 0 1,0 -140,0 M215,150 m0,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
                  fill="none"
                  className="stroke-gray-200 dark:stroke-gray-800 transition-colors duration-500"
                  strokeWidth="12"
                  strokeLinecap="round"
                />

                {/* Active Path (Animated) */}
                <path
                  id="infinityPath"
                  d="M215,150 C215,150 145,150 145,80 C145,10 215,10 215,150 C215,290 285,290 285,220 C285,150 215,150 215,150 C215,150 145,150 145,220 C145,290 215,290 215,150 C215,10 285,10 285,80 C285,150 215,150 215,150"
                  fill="none"
                  stroke="url(#neonGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  className="animate-flow-path"
                />

                {/* Moving Particle */}
                <circle r="6" fill="#fff" filter="url(#glow)">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path="M215,150 C215,150 145,150 145,80 C145,10 215,10 215,150 C215,290 285,290 285,220 C285,150 215,150 215,150 C215,150 145,150 145,220 C145,290 215,290 215,150 C215,10 285,10 285,80 C285,150 215,150 215,150"
                  />
                </circle>
              </svg>

              {/* Positioning the Icons around the loop */}
              {steps.map((step, index) => {
                const Icon = step.icon;
                const positions = [
                  { top: "15%", left: "25%" },
                  { top: "50%", left: "5%" },
                  { bottom: "15%", left: "25%" },
                  { bottom: "50%", left: "50%" },
                  { bottom: "15%", right: "25%" },
                  { top: "50%", right: "5%" },
                  { top: "15%", right: "25%" },
                ];
                const pos = positions[index] || { top: "50%", left: "50%" };

                return (
                  <div
                    key={step.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ ...pos }}
                  >
                    <div className="relative">
                      {/* Glow only on hover for clean look */}
                      <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                      {/* Icon Circle */}
                      <div className="relative flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow-xl group-hover:scale-110 group-hover:border-cyan-500 transition-all duration-300 z-10">
                        <Icon
                          className="w-5 h-5 transition-colors duration-300"
                          style={{ color: step.color }}
                        />
                      </div>

                      {/* Tooltip */}
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-[10px] font-bold py-1 px-2 rounded border border-gray-200 dark:border-gray-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest pointer-events-none whitespace-nowrap">
                        {step.label}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Central Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center z-0 shadow-lg dark:shadow-[0_0_30px_rgba(34,211,238,0.1)] animate-pulse-slow">
                <RefreshCw className="w-8 h-8 text-gray-400 dark:text-white/50 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-flow-path { stroke-dasharray: 20, 10; animation: flow 2s linear infinite; }
        @keyframes flow { from { stroke-dashoffset: 300; } to { stroke-dashoffset: 0; } }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </Section>
  );
};

const Skills = () => {
  useScrollAnimation();

  // Helper to assign specific colors based on index
  const getCategoryStyle = (index) => {
    const styles = [
      {
        color: "cyan",
        border: "hover:border-cyan-500",
        bg: "hover:shadow-cyan-500/20",
        text: "text-cyan-600 dark:text-cyan-400",
      },
      {
        color: "violet",
        border: "hover:border-violet-500",
        bg: "hover:shadow-violet-500/20",
        text: "text-violet-600 dark:text-violet-400",
      },
      {
        color: "emerald",
        border: "hover:border-emerald-500",
        bg: "hover:shadow-emerald-500/20",
        text: "text-emerald-600 dark:text-emerald-400",
      },
      {
        color: "blue",
        border: "hover:border-blue-500",
        bg: "hover:shadow-blue-500/20",
        text: "text-blue-600 dark:text-blue-400",
      },
      {
        color: "rose",
        border: "hover:border-rose-500",
        bg: "hover:shadow-rose-500/20",
        text: "text-rose-600 dark:text-rose-400",
      },
      {
        color: "amber",
        border: "hover:border-amber-500",
        bg: "hover:shadow-amber-500/20",
        text: "text-amber-600 dark:text-amber-400",
      },
    ];
    return styles[index % styles.length];
  };

  return (
    <Section
      id="skills"
      className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden py-24"
    >
      {/* Adaptive Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Glow Blob (Cyan) */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-400/20 dark:bg-cyan-500/20 blur-[100px]"></div>

      <div className="relative container mx-auto px-6 md:px-12 max-w-7xl z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-cyan-600 dark:text-cyan-400 text-sm font-mono mb-6 shadow-sm">
            <Terminal className="w-4 h-4" />
            <span>./system_capabilities_scan.sh</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            TECHNICAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">
              ARSENAL
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive array of tools and technologies deployed to build
            scalable, secure, and automated infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.skills.map((skillCategory, index) => {
            const Icon = skillCategory.icon;
            const style = getCategoryStyle(index);

            return (
              <div
                key={skillCategory.category}
                className={`
                  group relative p-6 rounded-2xl 
                  bg-white dark:bg-gray-800/40 
                  border border-gray-200 dark:border-gray-700/50 
                  backdrop-blur-sm shadow-sm dark:shadow-none
                  transition-all duration-500 ease-out hover:-translate-y-2 
                  ${style.border} hover:shadow-xl ${style.bg}
                  animate-on-scroll opacity-0 translate-y-8
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Scanning Line Effect */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -translate-y-full group-hover:animate-scan"></div>
                </div>

                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-gray-700/50 pb-4">
                  <div
                    className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${style.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((item) => (
                    <span
                      key={item}
                      className={`
                        relative px-3 py-1.5 text-xs font-mono font-semibold rounded 
                        bg-gray-100 dark:bg-gray-900 
                        text-gray-600 dark:text-gray-300 
                        border border-gray-200 dark:border-gray-700 
                        hover:text-cyan-700 dark:hover:text-white 
                        hover:border-cyan-300 dark:hover:border-gray-500
                        transition-all duration-300 cursor-default
                        hover:shadow-sm
                        overflow-hidden
                      `}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Decor corners (Subtle on Light, Distinct on Dark) */}
                <div className="absolute top-0 right-0 -mt-1 -mr-1 w-4 h-4 border-t-2 border-r-2 border-gray-200 dark:border-gray-600 group-hover:border-cyan-500 transition-colors rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 -mb-1 -ml-1 w-4 h-4 border-b-2 border-l-2 border-gray-200 dark:border-gray-600 group-hover:border-cyan-500 transition-colors rounded-bl-lg"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scan {
          animation: scan 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </Section>
  );
};

const Certifications = () => {
  useScrollAnimation();

  return (
    <Section
      id="certifications"
      className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden py-24"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[5%] w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[100px]"></div>
        {/* Tech lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)",
            color: "#6b7280",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>AUTHORITY LEVEL: VERIFIED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            LICENSES &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
              CERTIFICATIONS
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Validated credentials demonstrating proficiency in cloud
            architecture, security, and deployment operations.
          </p>
        </div>

        {/* Cert Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* The Card */}
              <div className="relative h-full bg-white dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:-translate-y-2 flex flex-col">
                {/* Top Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Content Container */}
                <div className="p-8 flex flex-col h-full relative">
                  {/* Background Pattern on Card (Smaller now: w-16 h-16) */}
                  <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 transition-all duration-500 group-hover:rotate-45">
                    <Award className="w-16 h-16 text-gray-900 dark:text-white" />
                  </div>

                  {/* Badge Image Section (Bigger now: w-28 h-28) */}
                  <div className="relative w-28 h-28 mb-6 flex-shrink-0 mx-auto md:mx-0">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-full border border-gray-100 dark:border-gray-700 p-3 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-500 z-10">
                      <img
                        src={cert.badgeImage}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.classList.add(
                            "bg-blue-50",
                            "dark:bg-blue-900"
                          );
                          e.target.parentElement.innerHTML =
                            '<svg class="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>';
                        }}
                      />
                    </div>

                    {/* Verified Checkmark */}
                    <div
                      className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1.5 rounded-full border-4 border-white dark:border-gray-800 shadow-sm z-20"
                      title="Verified"
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      VALID
                    </div>

                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                      >
                        Verify
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-gray-400 cursor-not-allowed flex items-center gap-2">
                        Confidential <Shield className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-gray-200 dark:border-gray-600 group-hover:border-blue-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-gray-200 dark:border-gray-600 group-hover:border-blue-500 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};


// --- START OF FIXED PROJECTS SECTION ---

// 1. Internal helper for the Github Icon (Guaranteed to work)
const ProjectGithubIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// 2. The Project Card Component
const ProjectCard = ({ project, index }) => (
  <div
    className="group relative flex flex-col h-full animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    {/* Card Container */}
    <div className="relative flex-grow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group-hover:-translate-y-2 flex flex-col">
      
      {/* Image Section */}
      <div className="relative h-56 flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/1e293b/cbd5e1?text=System+Image";
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"></div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full text-xs font-bold text-cyan-400 flex items-center gap-2 z-10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          ACTIVE
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow relative h-full">
        {/* Decorative Connector */}
        <div className="absolute -top-3 left-8 w-6 h-6 bg-white dark:bg-gray-800 rotate-45 border-t border-l border-gray-200 dark:border-gray-700 z-10"></div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* --- TOOLS / TAGS SECTION --- */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags && project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* --- LINKS SECTION --- */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700/50">
          {/* GITHUB LINK */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group/btn"
          >
            <ProjectGithubIcon className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
            Source Code
          </a>

          {/* DEMO LINK */}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-sm shadow-lg hover:shadow-cyan-500/25 hover:brightness-110 transition-all group/btn"
            >
              Live Demo
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <button
              disabled
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-400 font-semibold text-sm cursor-not-allowed opacity-60"
            >
              Internal / Offline
            </button>
          )}
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/20 dark:group-hover:border-cyan-500/40 rounded-2xl pointer-events-none transition-colors duration-500"></div>
    </div>
  </div>
);

// 3. The Main Projects Section
const Projects = () => {
  useScrollAnimation();

  return (
    <Section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700/50 text-purple-600 dark:text-purple-400 text-sm font-mono mb-6 shadow-sm">
            <Folder className="w-4 h-4" />
            <span>./root/projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            DEPLOYED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
              SYSTEMS
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Production-ready applications engineered for scalability,
            performance, and reliability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};
// --- END OF FIXED PROJECTS SECTION ---

const Experience = () => {
  useScrollAnimation();

  return (
    <Section
      id="experience"
      className="bg-white dark:bg-gray-900 relative overflow-hidden py-24"
    >
      {/* Background Tech Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 text-sm font-mono mb-6 shadow-sm">
            <Briefcase className="w-4 h-4" />
            <span>./execution_history.log</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            PROFESSIONAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
              PROTOCOLS
            </span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Circuit Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 md:-translate-x-1/2">
            {/* Animated 'Data Flow' gradient running down the line */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 opacity-20 animate-pulse"></div>
          </div>

          {portfolioData.experience.map((job, index) => (
            <div
              key={index}
              className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center w-full animate-on-scroll opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Node (The Dot) */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.2)] dark:shadow-[0_0_0_4px_rgba(59,130,246,0.4)] animate-pulse"></div>
                <div className="absolute w-8 h-8 bg-blue-500/10 rounded-full blur-md"></div>
              </div>

              {/* Date Badge (Desktop: Opposite side of card) */}
              <div
                className={`md:w-1/2 mb-4 md:mb-0 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-16 order-1"
                    : "md:text-left md:pl-16 order-3"
                } pl-20 md:pl-0 w-full`}
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-mono font-semibold`}
                >
                  <Calendar className="w-3 h-3" />
                  {job.dates}
                </div>
              </div>

              {/* Connector Line (Desktop only) */}
              <div
                className={`hidden md:block absolute top-1/2 h-px bg-gray-200 dark:bg-gray-700 w-16 
                ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`}
              ></div>

              {/* The Card */}
              <div
                className={`md:w-1/2 w-full pl-20 md:pl-0 ${
                  index % 2 === 0 ? "md:pl-16 order-3" : "md:pr-16 order-1"
                }`}
              >
                <div className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Building2 className="w-12 h-12 text-blue-500" />
                  </div>

                  {/* Job Header */}
                  <div className="mb-4 relative z-10">
                    <div className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">
                      LOG_ENTRY_00{index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {job.role}
                    </h3>
                    <div className="text-lg font-medium text-gray-500 dark:text-gray-300 mt-1">
                      {job.company}
                    </div>
                  </div>

                  {/* Description List */}
                  <ul className="space-y-3 relative z-10">
                    {job.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-400 dark:bg-blue-500 group-hover:scale-125 transition-transform"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 dark:group-hover:border-blue-500/30 rounded-2xl pointer-events-none transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          ))}

          {/* End Node */}
          <div className="absolute left-8 md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-900 z-20"></div>
        </div>
      </div>
    </Section>
  );
};

// Add this new section component after Skills or before Projects:
const TerminalSection = () => {
  useScrollAnimation();

  return (
    <Section
      id="terminal"
      title="Try My Interactive Terminal"
      className="bg-gray-800"
    >
      <div className="text-center mb-8">
        <p className="text-lg text-gray-300 mb-4">
          Experience my skills in action! Type commands to explore my portfolio.
        </p>
        <p className="text-sm text-gray-400">
          💡 Start with "help" to see available commands
        </p>
      </div>
      <InteractiveTerminal portfolioData={portfolioData} />
    </Section>
  );
};

const Contact = () => {
  useScrollAnimation();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section
      id="contact"
      className="bg-white dark:bg-gray-900 relative overflow-hidden py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 text-green-600 dark:text-green-400 text-sm font-mono mb-6 shadow-sm">
            <Wifi className="w-4 h-4 animate-pulse" />
            <span>SIGNAL_STRENGTH: STRONG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            INITIATE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
              UPLINK
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to collaborate on cloud infrastructure and automation?
            Establish a direct connection line below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Primary Communication (Email) */}
          <div className="space-y-6 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-700">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl">
                    <Mail className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Direct Message
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Standard SMTP Protocol
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm text-gray-600 dark:text-gray-300 break-all flex items-center justify-between gap-4 group/code">
                    <span>{portfolioData.contact.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors relative"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400 group-hover/code:text-cyan-500 transition-colors" />
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1"
                    >
                      <Send className="w-4 h-4" />
                      Send Mail
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                    >
                      {copied ? "Copied!" : "Copy Email"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 text-center animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-100">
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                Typical Response Time: &lt; 24 Hours
              </p>
            </div>
          </div>

          {/* Right: Social Uplinks */}
          <div className="flex flex-col gap-6 animate-on-scroll opacity-0 translate-x-[20px] transition-all duration-700 delay-200">
            {/* LinkedIn Card */}
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  LinkedIn Profile
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Professional Network & History
                </p>
              </div>
              <div className="text-gray-300 dark:text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                {/* Ensure you use the correct Github icon here based on your previous fix */}
                <GithubIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  GitHub Repositories
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Codebase & Contributions
                </p>
              </div>
              <div className="text-gray-300 dark:text-gray-600 group-hover:text-purple-500 group-hover:translate-x-1 transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
            </a>

            {/* Terminal Prompt Decoration */}
            <div className="mt-auto p-6 rounded-2xl bg-gray-900 border border-gray-800 font-mono text-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-2 border-b border-gray-800 pb-2">
                <Terminal className="w-4 h-4" />
                <span>guest@portfolio:~$</span>
              </div>
              <div className="text-gray-300">
                <span className="text-green-400">➜</span> echo "Let's build
                something amazing together."
                <span className="animate-pulse block mt-1">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-100 dark:border-gray-800">
    <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center text-gray-500 dark:text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
        reserved.
      </p>
      <p className="text-sm mt-1">
        Built with React, Tailwind CSS, and Firebase Hosting.
      </p>
    </div>
  </footer>
);

// REPLACE your entire App function with this one
function App() {
  // 1. Initialize the theme hook
  const themeHook = useTheme();
  useScrollAnimation();

  // ADDED: New state to track the active section
  const [activeSection, setActiveSection] = useState("home");

  // ADDED: The useEffect hook for the IntersectionObserver
  useEffect(() => {
    // Select all sections that have an ID
    const sections = document.querySelectorAll("section[id]");

    // Options for the observer
    const options = {
      // This creates a "trigger area" 20% from the top of the viewport
      // and 80% from the bottom. When a section enters this zone,
      // it will be marked as "intersecting".
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        // If the section is in our "trigger area"
        if (entry.isIntersecting) {
          // Set its ID as the active section
          setActiveSection(entry.target.id);
        }
      });
    };

    // Create the observer and watch the sections
    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));

    // Cleanup: stop observing when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []); // Empty array means this runs only once on mount

  // This is your existing hook to scroll to top
  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);

    // Optional: Tell the browser to let you handle scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []); // The empty array [] ensures this runs only once on mount

  const navLinks = [
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "certifications", title: "Certifications" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "contact", title: "Contact" },
    { id: "terminal", title: "Terminal" },
  ];

  return (
    // 2. Update the main div with light/dark classes
    <div className="font-inter bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 selection:bg-cyan-300 selection:text-gray-900 overflow-x-hidden">
      <GlobalStyles />

      {/* 3. Pass the theme hook AND activeSection to the Header */}
      <Header
        navLinks={navLinks}
        themeHook={themeHook}
        activeSection={activeSection} // <-- PROP ADDED
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
        <TerminalSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
