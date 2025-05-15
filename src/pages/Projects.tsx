
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const projectCategories = ["All", "Frontend", "Full Stack", "Mobile"];



const projects = [
  {
    id: 1,
    title: "Scientific Calculator",
    description: "A powerful scientific calculator built with React.js, featuring complex mathematical operations, a responsive UI, and real-time computation for seamless user interaction.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Frontend",
    technologies: ["React.js", "JavaScript"],
    liveUrl: "https://scientific-calculator-tau-six.vercel.app/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 2,
    title: "Oigio Cafe",
    description: "A vibrant coffee shop landing page crafted with React.js. Includes dynamic sections, fluid animations, and a mobile-first design to drive customer engagement.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    category: "Frontend",
    technologies: ["React.js", "JavaScript"],
    liveUrl: "https://oigio-cafe.vercel.app/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 3,
    title: "Online Traffic King",
    description: "A digital marketing platform built with React.js, showcasing ad agency services with a responsive interface and optimized navigation for client conversions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Frontend",
    technologies: ["React.js", "JavaScript"],
    liveUrl: "https://onlinetrafficking.vercel.app/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 4,
    title: "Prestige Motors",
    description: "A car dealership website developed with React.js, offering a modern UI for vehicle listings, optimized for performance and user-friendly browsing.",
    image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    category: "Frontend",
    technologies: ["React.js", "JavaScript"],
    liveUrl: "https://pestrige-motors.vercel.app/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 5,
    title: "Cowris Technologies",
    description: "A fintech website built with Vue.js and TypeScript, showcasing financial solutions with smooth animations and a professional, scalable design.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
    category: "Frontend",
    technologies: ["Vue.js", "TypeScript"],
    liveUrl: "https://cowris.com/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 6,
    title: "vCard Personal Portfolio",
    description: "A dynamic portfolio site with engaging animations and a professional layout, perfect for showcasing personal branding and technical skills.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Frontend",
    technologies: ["HTML/CSS/JS", "Framer Motion"],
    liveUrl: "https://james-portfolio-two.vercel.app",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 7,
    title: "Sedher Health",
    description: "A healthtech platform powered by Next.js and Supabase, featuring a clean UI, reusable components, and a scalable backend for healthcare solutions.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Full Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    liveUrl: "https://sedher-frontend-woad.vercel.app/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    "id": 8,
    "title": "Andres D Jason Car Rentals",
    "description": "A car rental service with interactive booking and smooth Framer Motion effects, built with React.js for a modern, user-centric experience.",
    "image": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "category": "Frontend",
    "technologies": ["React.js", "Framer Motion", "JavaScript"],
    "liveUrl": "https://andres-d-jason-car-rentals.vercel.app/",
    "codeUrl": "https://github.com/rotiminicol"
  },
  {
    id: 9,
    title: "Rent Up",
    description: "A real estate platform for property listings and rentals, built with React.js, featuring intuitive search, filters, and a clean UI.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    category: "Frontend",
    technologies: ["React.js", "JavaScript", "CSS"],
    liveUrl: "https://real-estate-two-gamma-25.vercel.app/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 10,
    title: "Arigohub",
    description: "An eCommerce gadget store with React.js and Node.js, offering a product catalog, cart, and secure checkout for a seamless shopping experience.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "MongoDB"],
    liveUrl: "https://arigo-ng.onrender.com",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 11,
    title: "Arigo Pay",
    description: "A secure online banking platform using React.js and Node.js, with features for account management, transactions, and user authentication.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "MongoDB"],
    liveUrl: "https://arigopay.onrender.com",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    "id": 12,
    "title": "Miamour",
    "description": "A matchmaking platform for marriage, built with React.js, featuring profile matching, real-time chat, and advanced search filters.",
    "image": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    "category": "Full Stack",
    "technologies": ["React.js", "Node.js", "MongoDB"],
    "liveUrl": "https://miamour.me/",
    "codeUrl": "https://github.com/rotiminicol"
  },
  {
    id: 13,
    title: "Ijeuwa",
    description: "A social media app with React.js, including timeline, posts, likes, comments, and friend connections for community engagement.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Full Stack",
    technologies: ["React.js", "Node.js", "MongoDB"],
    liveUrl: "https://ijeuwa.com/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 14,
    title: "Kuda Bank App Clone",
    description: "A mobile-first Kuda bank app clone built with FlutterFlow, mimicking native app features like transactions and account management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Mobile",
    technologies: ["FlutterFlow", "Flutter", "Supabase"],
    liveUrl: "https://github.com/rotiminicol?tab=repositories",
    codeUrl: "https://github.com/rotiminicol?tab=repositories"
  },
  {
    id: 15,
    title: "Uber App Clone",
    description: "A ride-hailing app clone optimized for mobile, with booking flows, map integration, and driver-rider logic for a native-like experience.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Mobile",
    technologies: ["FlutterFlow", "Flutter", "Firebase"],
    liveUrl: "https://github.com/rotiminicol?tab=repositories",
    codeUrl: "https://github.com/rotiminicol?tab=repositories"
  },
  {
    id: 16,
    title: "Clot",
    description: "A fashion trafik mobile app with FlutterFlow, supporting product browsing, cart, and checkout with a touch-friendly interface.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Mobile",
    technologies: ["FlutterFlow", "Flutter", "Firebase"],
    liveUrl: "https://github.com/rotiminicol?tab=repositories",
    codeUrl: "https://github.com/rotiminicol?tab=repositories"
  },
  {
    id: 17,
    title: "Arigo Pay Mobile App",
    description: "A Flutter-based mobile banking app for Arigo Pay, featuring secure login, transaction history, fund transfers, and a native-like UX.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
    category: "Mobile",
    technologies: ["Flutter", "Node.js", "MongoDB", "Provider"],
    liveUrl: "https://github.com/rotiminicol/arigopay-mobile",
    codeUrl: "https://github.com/rotiminicol/arigopay-mobile"
  },
  {
    "id": 18,
    "title": "Miamour Mobile App",
    "description": "A Flutter-based mobile app for Miamour matchmaking, with profile creation, match suggestions, real-time chat, and premium features.",
    "image": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "category": "Mobile",
    "technologies": ["Flutter", "Node.js", "MongoDB", "JWT"],
    "liveUrl": "https://github.com/rotiminicol/miamour-mobile",
    "codeUrl": "https://github.com/rotiminicol/miamour-mobile"
  },
  {
    id: 19,
    title: "FutbolConect",
    description: "A comprehensive football platform built with Next.js, Node.js, and MongoDB, connecting players, coaches, and fans with real-time updates, team management, and community features.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "https://www.futbolconect.com/",
    codeUrl: "https://github.com/rotiminicol"
  },
  {
    id: 20,
    title: "Pristine Education",
    description: "An educational platform developed with Next.js, Node.js, and MongoDB, offering online courses, student management, and interactive learning tools for modern education.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Full Stack",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "https://pristine-education.vercel.app/",
    codeUrl: "https://github.com/rotiminicol"
  }
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
        <p className="text-center mb-6 max-w-2xl mx-auto text-muted-foreground">
          Here are some of my recent projects. Each one was built with careful attention 
          to user experience, performance, and code quality.
        </p>
        
        <div className="flex justify-center mb-4">
          <a 
            href="https://github.com/rotiminicol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>github.com/rotiminicol</span>
          </a>
        </div>

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
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
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
