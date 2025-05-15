
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const aboutStats = [
  {
    label: 'Projects Completed',
    number: 60,
  },
  {
    label: 'Years of Experience',
    number: 5,
  },
];

const About = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-20 min-h-[calc(100vh-80px)]">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center gradient-text">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="mb-4">
              I am Oluwadurotimi Obabiyi-Nicol, a passionate full-stack developer with a focus on frontend development
              and design, bringing over 5 years of experience creating web and mobile applications. My journey in tech
              began during my university days, and since then, I've been dedicated to creating digital
              experiences that are both beautiful and functional.
            </p>
            <p className="mb-4">
              After completing my Computer Science degree at Babcock University, I worked with several startups
              and established companies, helping them build products that users love. My
              approach combines technical expertise with a deep understanding of user
              needs and business goals.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or mentoring aspiring developers. I believe in continuous learning and regularly stay updated with the 
              latest trends in web and mobile development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-secondary/30 rounded-lg">
                  <h3 className="text-3xl font-bold gradient-text">{stat.number}+</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 perspective">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl card-3d">
              <div className="parallax-bg h-full w-full" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit')",
              }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Personal Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "I constantly seek new ways to solve problems and improve user experiences through creative solutions."
              },
              {
                title: "Attention to Detail",
                description: "I believe the little things matter, from code quality to user interactions and pixel-perfect designs."
              },
              {
                title: "Continuous Learning",
                description: "Technology evolves quickly, and I'm committed to growing with it by embracing new frameworks and tools."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-secondary border-none hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 gradient-text">{value.title}</h3>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">My GitHub</h2>
          <div className="flex justify-center">
            <a 
              href="https://github.com/rotiminicol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              github.com/rotiminicol
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
