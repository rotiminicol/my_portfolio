
import React from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillCard from "@/components/SkillCard";

const skillItems = [
  {
    imgSrc: "https://cdn.simpleicons.org/figma/0A0A0A",
    label: "Figma",
    desc: "Design tool",
    brandColor: "#F24E1E",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/framer/0A0A0A",
    label: "Framer Motion",
    desc: "Animation Library",
    brandColor: "#0055FF",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/css3/0A0A0A",
    label: "CSS",
    desc: "User Interface",
    brandColor: "#1572B6",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/tailwindcss/0A0A0A",
    label: "TailwindCSS",
    desc: "User Interface",
    brandColor: "#38B2AC",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/javascript/0A0A0A",
    label: "JavaScript",
    desc: "Interaction",
    brandColor: "#F7DF1E",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/react/0A0A0A",
    label: "React",
    desc: "Framework",
    brandColor: "#61DAFB",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/nextdotjs/0A0A0A",
    label: "Next.js",
    desc: "React Framework",
    brandColor: "#000000",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/vuedotjs/0A0A0A",
    label: "Vue.js",
    desc: "Framework",
    brandColor: "#4FC08D",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/react/0A0A0A",
    label: "React Native",
    desc: "Mobile Framework",
    brandColor: "#61DAFB",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/flutter/0A0A0A",
    label: "Flutter",
    desc: "Mobile SDK",
    brandColor: "#02569B",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/flutter/0A0A0A",
    label: "FlutterFlow",
    desc: "No-code Mobile Builder",
    brandColor: "#02569B",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/firebase/0A0A0A",
    label: "Firebase",
    desc: "Mobile Backend",
    brandColor: "#FFCA28",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/supabase/0A0A0A",
    label: "Supabase",
    desc: "Mobile Backend",
    brandColor: "#3ECF8E",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/nodedotjs/0A0A0A",
    label: "NodeJS",
    desc: "Web Server",
    brandColor: "#339933",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/express/0A0A0A",
    label: "ExpressJS",
    desc: "Node Framework",
    brandColor: "#000000",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/php/0A0A0A",
    label: "PHP",
    desc: "Server Language",
    brandColor: "#777BB4",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/laravel/0A0A0A",
    label: "Laravel",
    desc: "PHP Framework",
    brandColor: "#FF2D20",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/mongodb/0A0A0A",
    label: "MongoDB",
    desc: "Database",
    brandColor: "#47A248",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/appwrite/0A0A0A",
    label: "Appwrite",
    desc: "Database",
    brandColor: "#F02E65",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/redis/0A0A0A",
    label: "Redis",
    desc: "In-memory Database",
    brandColor: "#DC382D",
  },
  // Additional skills
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1475/1475277.png", // Generic API icon for Xano
    label: "Xano",
    desc: "Backend API Builder",
    brandColor: "#5D4FFF",
  },
  {
    imgSrc: "https://weweb.io/favicon/apple-touch-icon.png", // WeWeb icon
    label: "WeWeb",
    desc: "Web App Builder",
    brandColor: "#2C76EE",
  },
  {
    imgSrc: "https://lovable.ai/lovable-favicon.png", // Lovable icon
    label: "Lovable",
    desc: "AI Code Assistant",
    brandColor: "#FF4584",
  },
];

const skillCategories = [
  {
    category: "frontend",
    name: "Frontend Development",
    skills: skillItems.filter(skill => 
      ["React", "Next.js", "Vue.js", "CSS", "TailwindCSS", "JavaScript", "Framer Motion", "WeWeb"].includes(skill.label)
    ),
  },
  {
    category: "mobile",
    name: "Mobile Development",
    skills: skillItems.filter(skill => 
      ["React Native", "Flutter", "FlutterFlow"].includes(skill.label)
    ),
  },
  {
    category: "backend",
    name: "Backend Development",
    skills: skillItems.filter(skill => 
      ["NodeJS", "ExpressJS", "PHP", "Laravel", "Xano"].includes(skill.label)
    ),
  },
  {
    category: "design",
    name: "Design Tools",
    skills: skillItems.filter(skill => 
      ["Figma"].includes(skill.label)
    ),
  },
  {
    category: "database",
    name: "Databases & Services",
    skills: skillItems.filter(skill => 
      ["MongoDB", "Appwrite", "Redis", "Firebase", "Supabase"].includes(skill.label)
    ),
  },
  {
    category: "tools",
    name: "Tools & Platforms",
    skills: skillItems.filter(skill => 
      ["Lovable", "WeWeb", "Xano"].includes(skill.label)
    ),
  },
];

const Skills = () => {
  return (
    <Layout className="bg-gradient-to-b from-background to-secondary/20">
      <section className="container mx-auto px-4 py-20 min-h-[calc(100vh-80px)]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center gradient-text">
          My Skills
        </h1>
        <p className="text-center mb-12 max-w-2xl mx-auto text-muted-foreground">
          I've developed a diverse set of skills over the years. Here's a comprehensive 
          overview of my technical expertise and tools I work with.
        </p>

        <Tabs defaultValue="frontend" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.category} value={category.category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    imgSrc={skill.imgSrc}
                    label={skill.label}
                    desc={skill.desc}
                    brandColor={skill.brandColor}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Other Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "UI/UX Design", 
              "SEO", 
              "Performance Optimization", 
              "Responsive Design", 
              "Agile Methodology", 
              "WebSockets", 
              "GraphQL",
              "Web Accessibility",
              "CI/CD",
              "TDD",
              "API Development",
              "User Testing",
              "Deployment Automation"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
