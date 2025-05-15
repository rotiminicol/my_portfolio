
import React from "react";
import Layout from "@/components/Layout";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = [
  {
    category: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "backend",
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "Python", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 78 },
    ],
  },
  {
    category: "tools",
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "Figma", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Testing", level: 82 },
    ],
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

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.category} value={category.category}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.category} value={category.category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="overflow-hidden bg-secondary/50 border-none perspective">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
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
              "TDD"
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
