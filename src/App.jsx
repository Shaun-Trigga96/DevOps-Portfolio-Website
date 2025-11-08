import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Menu,
  X,
  Cloud,
  Server,
  Terminal,
  GitBranch,
  Database,
  Zap,
  Layers,
  BarChart2,
  Award,
  ChevronDown
} from 'lucide-react';

// Import assets (KEEP YOUR EXISTING IMPORTS)
import heroImage from './assets/images/hero/Thabiso 1.jpg';
import cvFile from './assets/documents/Thabiso Matsaba Resume.pdf';
import cloudExplorerImg from './assets/images/projects/cloud_explorer.png';
import pharmacyAppImg from './assets/images/projects/PharmacyApp.png';
import googleCloudBadge from './assets/images/badges/google-cloud-engineer.png';
import awsBadge from './assets/images/badges/aws-cloud-practitioner.png';
import googleDigitalBadge from './assets/images/badges/google-digital-leader.png';
import fortinetBadge from './assets/images/badges/fortinet-cybersecurity.png';
import sapBadge from './assets/images/badges/sap-fico.png';
import Fast_MoneyImg from './assets/images/projects/Fast_Money.png';
import certifiedkubernetesadministratorBadge from './assets//images/badges/certified_kubernetes_administrator.png';
import googleCloudDevOpsBadge from './assets/images/badges/google-cloud-devops-engineer.png';
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
      items: ["GCP", "AWS", "Terraform", "Google Cloud Build", "GitHub Actions", "GKE", "Cloud Run", "EC2", "S3", "Lambda"],
    },
    {
      category: "Containerization & Orchestration",
      icon: Layers,
      items: ["Kubernetes", "Docker", "Docker Compose", "Container Registry", "Microservices"],
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
      items: ["Google Cloud Monitoring", "Cloud Logging", "APM", "Log Analysis", "System Observability"],
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
      items: ["Java", "Spring Boot", "RESTful APIs", "MySQL", "PostgreSQL", "MongoDB"],
    },
  ],

  certifications: [
       {
      title: "Professional Cloud DevOps Engineer Certification",
      issuer: "Google Cloud",
      url: "",
      badgeImage: googleCloudDevOpsBadge
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      url: "",
      badgeImage: certifiedkubernetesadministratorBadge
    },
    {
      title: "Google Associate Cloud Engineer",
      issuer: "Google Cloud",
      url: "https://www.credly.com/earner/earned/badge/42949cd3-6798-4554-8aae-0dfb7f649d50",
      badgeImage: googleCloudBadge
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      url: "https://www.credly.com/earner/earned/badge/50f682d2-1ec2-499e-8980-408be51fe7f2",
      badgeImage: awsBadge
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      url: "https://www.credly.com/earner/earned/badge/95e94846-ff37-430c-b128-165acf466228",
      badgeImage: googleDigitalBadge
    },
    {
      title: "Fortinet Certified Associate - Cybersecurity",
      issuer: "Fortinet",
      url: "https://www.credly.com/earner/earned/badge/cbb9bcdc-b241-478b-9bed-9cd2a37ec1be",
      badgeImage: fortinetBadge
    },
    {
      title: "SAP S/4HANA Financial Accounting (FICO)",
      issuer: "SAP",
      url: "",
      badgeImage: sapBadge
    }
  ],

  projects: [
    {
      title: "Cloud Explorer - Mobile Learning App",
      description:
        "Architected a cross-platform mobile app (React Native) to teach GCP, AWS, and Azure concepts. Features a scalable GCP microservices backend and a Gemini API integration.",
      imageUrl: cloudExplorerImg,
      tags: ["React Native", "GCP", "Kubernetes", "Terraform", "Docker", "Firebase", "Gemini API", "Cloud Build"],
      githubUrl: "https://github.com/Shaun-Trigga96/CloudExplorer",
      demoUrl: "",
    },
    {
      title: "PharmacyApp - Healthcare Management Solution",
      description:
        "Containerized a full-stack pharmacy app (Angular, Spring Boot) using Docker. Deployed on AWS EC2 with auto-scaling and load balancing for high availability.",
      imageUrl: pharmacyAppImg,
      tags: ["Docker", "AWS EC2", "CI/CD", "Nginx", "Spring Boot", "Angular", "MySQL"],
      githubUrl: "https://github.com/220296006/PharmacyApp",
      demoUrl: "",
    },
    {
      title: "VP Bank App - Banking Application",
      description:
        "Built a secure banking application with Flask backend and Tkinter GUI. Features include user authentication with JWT, account management, investment calculators, and SMTP-based password recovery.",
      imageUrl: Fast_MoneyImg,
      tags: ["Python", "Flask", "SQLAlchemy", "JWT", "Tkinter", "SMTP", "Authentication"],
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
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    setElements(animatedElements);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-6 md:px-12 max-w-6xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-300 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const Header = ({ navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={(e) => handleLinkClick(e, href)}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
    </a>
  );

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl' : 'bg-gray-900/80 backdrop-blur-md shadow-lg'
    }`}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold text-white tracking-tighter hover:text-cyan-300 transition-colors duration-300">
              {portfolioData.name}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.id} href={`#${link.id}`}>
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6 rotate-90 transition-transform duration-300" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 transition-transform duration-300" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink key={link.id} href={`#${link.id}`}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const handleScrollDown = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-gray-900 via-gray-900 to-cyan-900/20 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 animate-fade-in-up">
              Hi, I'm <span className="text-cyan-300 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
                {portfolioData.name}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {portfolioData.title}
            </p>
            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {portfolioData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Projects
              </a>
              <a
                href={portfolioData.cvUrl}
                download
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 font-medium text-cyan-300 bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-lg hover:bg-gray-700/50 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <img
                src={portfolioData.heroImage}
                alt={portfolioData.name}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-gray-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x600/1e293b/f1f5f9?text=Image+Error';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={handleScrollDown}>
        <ChevronDown className="w-8 h-8 text-cyan-300" />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

const About = () => (
  <Section id="about" title={portfolioData.about.title} className="bg-gray-800">
    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300 leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
      {portfolioData.about.description}
    </p>
  </Section>
);

const Skills = () => {
  useScrollAnimation();
  
  return (
    <Section id="skills" title="Tools & Technologies">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.skills.map((skillCategory, index) => {
          const Icon = skillCategory.icon;
          return (
            <div
              key={skillCategory.category}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-cyan-500/20 hover:-translate-y-2 group"
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className="w-8 h-8 text-cyan-300 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {skillCategory.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-700 text-cyan-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-default transform hover:scale-110"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Certifications = () => {
  useScrollAnimation();
  
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.certifications.map((cert, index) => (
          <CertificationCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>
    </Section>
  );
};

const CertificationCard = ({ cert, index }) => (
  <a
    href={cert.url || '#'}
    target={cert.url ? "_blank" : "_self"}
    rel={cert.url ? "noopener noreferrer" : ""}
    className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 hover:shadow-cyan-500/20 hover:-translate-y-2 group ${
      cert.url ? '' : 'cursor-default'
    }`}
    style={{transitionDelay: `${index * 100}ms`}}
  >
    <div className="flex-shrink-0 mb-4 relative">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <img
        src={cert.badgeImage}
        alt={`${cert.title} badge`}
        className="w-24 h-24 object-contain relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <Award className="w-24 h-24 text-cyan-300 hidden" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{cert.title}</h3>
      <p className="text-gray-400 mb-2">{cert.issuer}</p>
      {cert.url && (
        <div className="inline-flex items-center gap-1 text-sm text-cyan-400 mt-1 group-hover:gap-2 transition-all duration-300">
          View Credential <ExternalLink className="w-3 h-3" />
        </div>
      )}
    </div>
  </a>
);

const Projects = () => {
  useScrollAnimation();
  
  return (
    <Section id="projects" title="Projects" className="bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

const ProjectCard = ({ project, index }) => (
  <div 
    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:shadow-cyan-500/30 hover:-translate-y-2 hover:scale-105 group"
    style={{transitionDelay: `${index * 150}ms`}}
  >
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/334155/e2e8f0?text=Image+Error';
        }}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 text-cyan-200 px-2 py-0.5 rounded-full text-xs font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:gap-3 group/link"
        >
          <Github className="w-5 h-5 group-hover/link:rotate-12 transition-transform duration-300" />
          Code
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-all duration-300 hover:gap-3 group/link"
          >
            <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Experience = () => {
  useScrollAnimation();
  
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-300 to-cyan-500"></div>
        
        {portfolioData.experience.map((job, index) => (
          <div key={index} className="relative mb-12 pl-12 md:pl-0 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{transitionDelay: `${index * 200}ms`}}>
            <div className="md:flex items-start">
              <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-cyan-300 rounded-full -ml-2 border-4 border-gray-900 animate-pulse shadow-lg shadow-cyan-500/50"></div>
              
              <div className={`md:w-1/2 md:pr-8 md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <p className="text-sm font-medium text-gray-400 mb-1">{job.dates}</p>
              </div>

              <div className={`md:w-1/2 md:pl-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg relative hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 group">
                  <div className={`hidden md:block absolute top-4 w-4 h-4 bg-gray-800 transform rotate-45 ${index % 2 === 0 ? '-left-2' : '-right-2'}`}></div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">{job.role}</h3>
                  <p className="text-lg font-medium text-cyan-300 mb-3">{job.company}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {job.description.map((point, i) => (
                      <li key={i} className="hover:text-white transition-colors duration-300">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => (
  <Section id="contact" title="Get In Touch" className="bg-gray-800">
    <div className="text-center max-w-xl mx-auto">
      <p className="text-lg md:text-xl text-gray-300 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        I'm always open to discussing new opportunities, projects, or just
        chatting about tech. Feel free to reach out!
      </p>
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 hover:-translate-y-1 group"
        style={{transitionDelay: '0.2s'}}
      >
        <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        Say Hello
      </a>
      
      <div className="flex justify-center gap-8 mt-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{transitionDelay: '0.4s'}}>
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
        >
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-gray-900 py-8 border-t border-gray-800">
    <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      <p className="text-sm mt-1">Built with React, Tailwind CSS, and Firebase Hosting.</p>
    </div>
  </footer>
);

function App() {
  useScrollAnimation();

  const navLinks = [
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "certifications", title: "Certifications" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <div className="font-inter bg-gray-900 text-gray-200 selection:bg-cyan-300 selection:text-gray-900 overflow-x-hidden">
      <Header navLinks={navLinks} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;