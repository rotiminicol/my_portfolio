
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projectCategories = ["All", "Web", "Mobile", "Design"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMzA2MDk4MA&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "A mobile application for tracking workouts, nutrition, and health metrics with data visualization.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMzA2MDk4MA&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website with 3D animations, parallax scrolling, and interactive elements.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMzA2MDk4MA&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Web",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Banking Dashboard UI",
    description: "A modern banking dashboard design with intuitive user experience and accessible interfaces.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMzA2MDk4MA&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Design",
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    title: "Weather Application",
    description: "A weather forecasting application with location detection and beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMzA2MDk4MA&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Mobile",
    technologies: ["Flutter", "Dart", "Weather API", "Bloc Pattern"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMzA2MDk4MA&ixlib=rb-1.2.1&q=80&w=1080",
    category: "Web",
    technologies: ["React", "GraphQL", "PostgreSQL", "Docker"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      <section className="container mx-auto px-4 py-20 min-h-[calc(100vh-80px)]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center gradient-text">
          My Projects
        </h1>
        <p className="text-center mb-12 max-w-2xl mx-auto text-muted-foreground">
          Here are some of my recent projects. Each one was built with careful attention 
          to user experience, performance, and code quality.
        </p>

        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="m-1"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden perspective card-3d border-none bg-secondary/40"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <Button variant="outline" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
