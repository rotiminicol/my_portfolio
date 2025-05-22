import React from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillCard from "@/components/SkillCard";
import { useIsMobile } from "@/hooks/use-mobile";

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
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1475/1475277.png",
    label: "Xano",
    desc: "Backend API Builder",
    brandColor: "#5D4FFF",
  },
  {
    imgSrc: "https://weweb.io/favicon/apple-touch-icon.png",
    label: "WeWeb",
    desc: "Web App Builder",
    brandColor: "#2C76EE",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/java/0A0A0A",
    label: "Java",
    desc: "Programming Language",
    brandColor: "#007396",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/python/0A0A0A",
    label: "Python",
    desc: "Programming Language",
    brandColor: "#3776AB",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/spring/0A0A0A",
    label: "Spring Boot",
    desc: "Java Framework",
    brandColor: "#6DB33F",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/python/0A0A0A",
    label: "Data Science",
    desc: "Data Analysis",
    brandColor: "#3776AB",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/microsoftsqlserver/0A0A0A",
    label: "SQL",
    desc: "Query Language",
    brandColor: "#CC2927",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/postgresql/0A0A0A",
    label: "PostgreSQL",
    desc: "Relational Database",
    brandColor: "#336791",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/csharp/0A0A0A",
    label: "C#",
    desc: "Programming Language",
    brandColor: "#239120",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/dribbble/0A0A0A",
    label: "Dribbble",
    desc: "Design Community",
    brandColor: "#EA4C89",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/webflow/0A0A0A",
    label: "Webflow",
    desc: "Web Design Platform",
    brandColor: "#4353FF",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/wordpress/0A0A0A",
    label: "WordPress",
    desc: "Content Management System",
    brandColor: "#21759B",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/microsoftoffice/0A0A0A",
    label: "Microsoft Office",
    desc: "Productivity Suite",
    brandColor: "#D83B01",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/microsoftexcel/0A0A0A",
    label: "Excel",
    desc: "Spreadsheet Software",
    brandColor: "#217346",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/microsoftpowerpoint/0A0A0A",
    label: "PowerPoint",
    desc: "Presentation Software",
    brandColor: "#B7472A",
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3050/3050809.png",
    label: "Graphic Design",
    desc: "Visual Design",
    brandColor: "#4A4A4A",
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3050/3050809.png",
    label: "Logo Design",
    desc: "Branding Design",
    brandColor: "#4A4A4A",
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3050/3050809.png",
    label: "Posters",
    desc: "Print Design",
    brandColor: "#4A4A4A",
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3050/3050809.png",
    label: "Flyers",
    desc: "Promotional Design",
    brandColor: "#4A4A4A",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/vercel/0A0A0A",
    label: "Vercel",
    desc: "Hosting Platform",
    brandColor: "#000000",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/render/0A0A0A",
    label: "Render",
    desc: "Cloud Hosting",
    brandColor: "#46E3B7",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/namecheap/0A0A0A",
    label: "Namecheap",
    desc: "Domain & Hosting",
    brandColor: "#DE3723",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/cpanel/0A0A0A",
    label: "cPanel",
    desc: "Hosting Control Panel",
    brandColor: "#FF6C2C",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/cloudways/0A0A0A",
    label: "Cloudways",
    desc: "Managed Cloud Hosting",
    brandColor: "#2F3CFF",
  },
  {
    imgSrc: "https://cdn.simpleicons.org/github/0A0A0A",
    label: "GitHub",
    desc: "Version Control & Hosting",
    brandColor: "#181717",
  },
];

const skillCategories = [
  {
    category: "frontend",
    name: "Frontend Development",
    skills: skillItems.filter(skill => 
      ["React", "Next.js", "Vue.js", "CSS", "TailwindCSS", "JavaScript", "Framer Motion", "WeWeb", "Webflow"].includes(skill.label)
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
      ["NodeJS", "ExpressJS", "PHP", "Laravel", "Xano", "Java", "Spring Boot", "Python", "C#"].includes(skill.label)
    ),
  },
  {
    category: "design",
    name: "Design Tools",
    skills: skillItems.filter(skill => 
      ["Figma", "Dribbble", "Graphic Design", "Logo Design", "Posters", "Flyers"].includes(skill.label)
    ),
  },
  {
    category: "database",
    name: "Databases & Services",
    skills: skillItems.filter(skill => 
      ["MongoDB", "Appwrite", "Redis", "Firebase", "Supabase", "PostgreSQL", "SQL"].includes(skill.label)
    ),
  },
  {
    category: "data",
    name: "Data Science",
    skills: skillItems.filter(skill => 
      ["Data Science"].includes(skill.label)
    ),
  },
  {
    category: "tools",
    name: "Tools & Platforms",
    skills: skillItems.filter(skill => 
      ["Lovable", "WeWeb", "Xano", "Webflow", "WordPress"].includes(skill.label)
    ),
  },
  {
    category: "productivity",
    name: "Productivity Software",
    skills: skillItems.filter(skill => 
      ["Microsoft Office", "Excel", "PowerPoint"].includes(skill.label)
    ),
  },
  {
    category: "hosting",
    name: "Hosting & Deployment",
    skills: skillItems.filter(skill => 
      ["Vercel", "Render", "Namecheap", "cPanel", "Cloudways", "GitHub"].includes(skill.label)
    ),
  },
];

const Skills = () => {
  const isMobile = useIsMobile();

  return (
    <Layout className="bg-gradient-to-b from-background to-secondary/20">
      <section className="container mx-auto px-4 py-10 md:py-20 min-h-[calc(100vh-80px)]">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-center gradient-text">
          My Skills
        </h1>
        <p className="text-center mb-8 md:mb-12 max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
          I've developed a diverse set of skills over the years. Here's a comprehensive 
          overview of my technical expertise and tools I work with.
        </p>

        <Tabs defaultValue="frontend" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-9 mb-6 md:mb-8 h-auto flex-wrap">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.category} 
                value={category.category}
                className="py-1.5 px-2 text-xs md:text-sm whitespace-normal text-center h-auto min-h-9"
              >
                {isMobile ? category.name.replace(' Development', '').replace(' Tools', '').replace(' Software', '') : category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.category} value={category.category} className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
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

        <div className="mt-10 md:mt-20">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Other Skills</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
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
              "Deployment Automation",
              "Data Analysis",
              "Database Management",
              "Content Management",
              "Branding",
              "Print Media Design",
              "Spreadsheet Analysis",
              "Presentation Design",
              "Cloud Deployment"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-2 md:px-4 py-1 md:py-2 bg-secondary rounded-full text-xs md:text-sm font-medium animate-float"
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