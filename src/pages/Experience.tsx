
import React, { useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const workExperiences = [
  {
    id: 1,
    company: "Arigo",
    role: "Software Developer",
    period: "Mar 2025 - Present",
    location: "Lagos, Nigeria",
    description: [
      "Developing and maintaining high-performance applications using modern frameworks.",
      "Implementing robust database structures and optimizing queries for faster data retrieval.",
      "Continuously improving code quality through testing and peer reviews."
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    company: "CASTLEY GROUP OF COMPANIES",
    role: "FullStack Developer",
    period: "Sep 2024 - Mar 2025",
    location: "Paphos, Cyprus",
    description: [
      "Built end-to-end web solutions using MERN stack (MongoDB, Express, React, Node.js).",
      "Led a small team in delivering a scalable SaaS product, improving client satisfaction.",
      "Automated repetitive tasks, reducing development time by 30%."
    ],
    technologies: ["React", "Express", "MongoDB", "Node.js"],
  },
  {
    id: 3,
    company: "Cowris Tech",
    role: "Frontend Development",
    period: "Jan 2024 - Sep 2024",
    location: "Lagos, Nigeria",
    description: [
      "Designed and implemented dynamic web applications using Vue.js and TypeScript.",
      "Enhanced cross-browser compatibility and mobile responsiveness for better user engagement.",
      "Worked closely with backend teams to integrate RESTful APIs efficiently."
    ],
    technologies: ["Vue.js", "TypeScript", "RESTful APIs"],
  },
  {
    id: 4,
    company: "Sehder",
    role: "FrontEnd Developer",
    period: "Jan 2023 - Nov 2023",
    location: "Lagos, Nigeria",
    description: [
      "Developed responsive and user-friendly web interfaces using React.js and modern CSS frameworks.",
      "Optimized frontend performance, reducing load times by 20%.",
      "Collaborated with UX designers to implement pixel-perfect designs and improve usability."
    ],
    technologies: ["React.js", "CSS", "JavaScript", "UX/UI"],
  },
  {
    id: 5,
    company: "Bfree Africa",
    role: "Full Stack Developer (INTERN)",
    period: "Jan 2021 - Jun 2021",
    location: "Lagos, Nigeria",
    description: [
      "Built and maintained web applications using frontend (HTML, CSS, JavaScript) and backend (Node.js, Python) technologies.",
      "Contributed to API integrations, enhancing system functionality and user experience.",
      "Worked in a fast-paced fintech environment, improving problem-solving and teamwork skills."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Python"],
  },
  {
    id: 6,
    company: "CASTLEY GROUP OF COMPANIES",
    role: "Software Developer (INTERN)",
    period: "Apr 2019 - Sep 2019",
    location: "Lagos state, Nigeria",
    description: [
      "Assisted in developing and maintaining software applications using modern programming practices.",
      "Collaborated with the team to debug and optimize code, improving application performance.",
      "Gained hands-on experience in software development lifecycle and Agile methodologies."
    ],
    technologies: ["JavaScript", "PHP", "Agile"],
  },
];

const education = [
  {
    id: 1,
    institution: "Babcock University",
    degree: "BSc Computer Science",
    description: "Graduated with a Second Class Upper in BSc Computer Science",
    period: "Aug 2018 - Jul 2022",
    location: "Ogun State, Nigeria",
  },
  {
    id: 2,
    institution: "CMS Grammar school",
    degree: "SSCE (Secondary School Certificate Examination)",
    description: "",
    period: "Sep 2012 - Jul 2018",
    location: "Lagos State, Nigeria",
  },
];

const stats = [
  {
    label: 'Projects Completed',
    number: 60,
  },
  {
    label: 'Years of Experience',
    number: 5,
  },
];

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      item.classList.add("opacity-0");
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <Layout>
      <section className="container mx-auto px-4 py-10 md:py-20 min-h-[calc(100vh-80px)]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center gradient-text">
          Work Experience
        </h1>
        <p className="text-center mb-6 md:mb-8 max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
          My professional journey has given me the opportunity to work with talented
          teams and build innovative solutions across different industries.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto mb-8 md:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none bg-secondary/50">
              <CardContent className="p-4 md:p-6 text-center">
                <p className="text-2xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">{stat.number}+</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Work Experience */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-portfolio-purple" />
            <span>Professional Experience</span>
          </h2>
          
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-portfolio-purple to-portfolio-teal"></div>
            
            {/* Experience Items */}
            {workExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item relative mb-8 md:mb-16 lg:mb-24 flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-background border-3 md:border-4 border-portfolio-purple z-10"></div>
                
                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
                }`}>
                  <Card className="shadow-lg border-none bg-secondary">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-1">{exp.role}</h3>
                      <h4 className="text-portfolio-purple mb-2 text-sm md:text-base">{exp.company}</h4>
                      <div className="flex justify-between mb-3 md:mb-4">
                        <p className="text-xs md:text-sm text-muted-foreground">{exp.period}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <ul className="mb-3 md:mb-4 space-y-1 md:space-y-2 list-disc pl-4 md:pl-5 text-xs md:text-sm">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full bg-primary/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-portfolio-purple" />
            <span>Education</span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-portfolio-purple to-portfolio-teal"></div>
            
            {/* Education Items */}
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`timeline-item relative mb-8 md:mb-16 lg:mb-24 flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-background border-3 md:border-4 border-portfolio-teal z-10"></div>
                
                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
                }`}>
                  <Card className="shadow-lg border-none bg-secondary">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-1">{edu.degree}</h3>
                      <h4 className="text-portfolio-teal mb-2 text-sm md:text-base">{edu.institution}</h4>
                      <div className="flex justify-between mb-3 md:mb-4">
                        <p className="text-xs md:text-sm text-muted-foreground">{edu.period}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                      {edu.description && <p className="text-xs md:text-sm">{edu.description}</p>}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 md:mt-24">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Companies I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {['Arigo', 'CASTLEY GROUP', 'Cowris Tech', 'Sehder', 'Bfree Africa'].map((company, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-16 md:h-24 bg-secondary/30 rounded-md animate-float text-center px-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="text-sm md:text-xl font-bold opacity-70">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
