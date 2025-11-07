import React, { useState } from 'react';
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
  Award
} from 'lucide-react';

// Import assets
import heroImage from './assets/images/hero/Thabiso 1.jpg';
import cvFile from './assets/documents/Thabiso Matsaba Resume.pdf';
import cloudExplorerImg from './assets/images/projects/cloud_explorer.png';
import pharmacyAppImg from './assets/images/projects/PharmacyApp.png';
import googleCloudBadge from './assets/images/badges/google-cloud-engineer.png';
import awsBadge from './assets/images/badges/aws-cloud-practitioner.png';
import googleDigitalBadge from './assets/images/badges/google-digital-leader.png';
import fortinetBadge from './assets/images/badges/fortinet-cybersecurity.png';
import sapBadge from './assets/images/badges/sap-fico.png';

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

const Section = ({ id, title, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-6 md:px-12 max-w-6xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-300">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const Header = ({ navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={(e) => handleLinkClick(e, href)}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50 top-0 shadow-lg">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold text-white tracking-tighter">
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
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
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
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              Hi, I'm <span className="text-cyan-300">{portfolioData.name}</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
              {portfolioData.title}
            </p>
            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-10">
              {portfolioData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-medium text-white bg-cyan-500 rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Briefcase className="w-5 h-5" />
                View Projects
              </a>
              <a
                href={portfolioData.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-3 font-medium text-cyan-300 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <img
              src={portfolioData.heroImage}
              alt={portfolioData.name}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-gray-800 shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x600/1e293b/f1f5f9?text=Image+Error';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <Section id="about" title={portfolioData.about.title} className="bg-gray-800">
    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-300 leading-relaxed">
      {portfolioData.about.description}
    </p>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="Tools & Technologies">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.skills.map((skillCategory) => {
        const Icon = skillCategory.icon;
        return (
          <div
            key={skillCategory.category}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <Icon className="w-8 h-8 text-cyan-300" />
              <h3 className="text-2xl font-semibold text-white">
                {skillCategory.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((item) => (
                <span
                  key={item}
                  className="bg-gray-700 text-cyan-200 px-3 py-1 rounded-full text-sm font-medium"
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

const Certifications = () => (
  <Section id="certifications" title="Certifications">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.certifications.map((cert) => (
        <CertificationCard key={cert.title} cert={cert} />
      ))}
    </div>
  </Section>
);

const CertificationCard = ({ cert }) => (
  <a
    href={cert.url || '#'}
    target={cert.url ? "_blank" : "_self"}
    rel={cert.url ? "noopener noreferrer" : ""}
    className={`bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 ${
      cert.url
        ? 'hover:scale-105 hover:shadow-cyan-500/10'
        : 'cursor-default'
    }`}
  >
    <div className="flex-shrink-0 mb-4">
      <img
        src={cert.badgeImage}
        alt={`${cert.title} badge`}
        className="w-24 h-24 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <Award className="w-24 h-24 text-cyan-300 hidden" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
      <p className="text-gray-400 mb-2">{cert.issuer}</p>
      {cert.url && (
        <div className="inline-flex items-center gap-1 text-sm text-cyan-400 mt-1">
          View Credential <ExternalLink className="w-3 h-3" />
        </div>
      )}
    </div>
  </a>
);

const Projects = () => (
  <Section id="projects" title="Projects" className="bg-gray-800">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </Section>
);

const ProjectCard = ({ project }) => (
  <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/600x400/334155/e2e8f0?text=Image+Error';
      }}
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 text-cyan-200 px-2 py-0.5 rounded-full text-xs font-medium"
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
          className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
        >
          <Github className="w-5 h-5" />
          Code
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Experience = () => (
  <Section id="experience" title="Work Experience">
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-700"></div>
      
      {portfolioData.experience.map((job, index) => (
        <div key={index} className="relative mb-12 pl-12 md:pl-0">
          <div className="md:flex items-start">
            <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-cyan-300 rounded-full -ml-2 border-4 border-gray-900"></div>
            
            <div className={`md:w-1/2 md:pr-8 md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <p className="text-sm font-medium text-gray-400 mb-1">{job.dates}</p>
            </div>

            <div className={`md:w-1/2 md:pl-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative">
                <div className={`hidden md:block absolute top-4 w-4 h-4 bg-gray-800 transform rotate-45 ${index % 2 === 0 ? '-left-2' : '-right-2'}`}></div>
                
                <h3 className="text-xl font-semibold text-white mb-1">{job.role}</h3>
                <p className="text-lg font-medium text-cyan-300 mb-3">{job.company}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
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

const Contact = () => (
  <Section id="contact" title="Get In Touch" className="bg-gray-800">
    <div className="text-center max-w-xl mx-auto">
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        I'm always open to discussing new opportunities, projects, or just
        chatting about tech. Feel free to reach out!
      </p>
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-medium text-white bg-cyan-500 rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
      >
        <Mail className="w-6 h-6" />
        Say Hello
      </a>
      
      <div className="flex justify-center gap-8 mt-12">
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-cyan-300 transition-colors"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-cyan-300 transition-colors"
        >
          <Linkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-gray-900 py-8">
    <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      <p className="text-sm mt-1">Built with React, Tailwind CSS, and Firebase Hosting.</p>
    </div>
  </footer>
);

function App() {
  const navLinks = [
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "certifications", title: "Certifications" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <div className="font-inter bg-gray-900 text-gray-200 selection:bg-cyan-300 selection:text-gray-900">
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