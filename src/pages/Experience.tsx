
import React, { useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    role: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Leading a team of developers in building modern web applications. Implemented CI/CD pipelines, improved performance by 40%, and mentored junior developers.",
    technologies: ["React", "TypeScript", "Redux", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    role: "Full Stack Developer",
    period: "2018 - 2021",
    description: "Developed and maintained multiple client projects with a focus on responsive design and accessibility. Worked closely with design team to implement pixel-perfect interfaces.",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "SCSS"],
  },
  {
    id: 3,
    company: "CreativeTech Studios",
    role: "Frontend Developer",
    period: "2016 - 2018",
    description: "Built interactive websites and web applications for clients across various industries. Developed and maintained the company's internal design system.",
    technologies: ["JavaScript", "CSS3", "HTML5", "jQuery", "Bootstrap"],
  },
  {
    id: 4,
    company: "WebCraft Agency",
    role: "Web Developer Intern",
    period: "2015 - 2016",
    description: "Assisted senior developers with building responsive websites. Learned about web development best practices and collaborated with the design team on client projects.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
];

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
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
      <section className="container mx-auto px-4 py-20 min-h-[calc(100vh-80px)]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center gradient-text">
          Work Experience
        </h1>
        <p className="text-center mb-16 max-w-2xl mx-auto text-muted-foreground">
          My professional journey has given me the opportunity to work with talented
          teams and build innovative solutions across different industries.
        </p>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-portfolio-purple to-portfolio-teal"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item relative mb-16 md:mb-24 flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-portfolio-purple z-10"></div>
              
              {/* Content */}
              <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <Card className="shadow-lg border-none bg-secondary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-portfolio-purple mb-2">{exp.company}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10"
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
        
        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-8 text-center">Companies I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-24 bg-secondary/30 rounded-md animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="text-xl font-bold opacity-50">Company {index}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
