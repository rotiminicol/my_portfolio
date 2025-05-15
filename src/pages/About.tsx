
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

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
              I am a passionate developer with over 5 years of experience creating web and
              mobile applications. My journey in tech began when I built my first website
              at the age of 16, and since then, I've been hooked on creating digital
              experiences that are both beautiful and functional.
            </p>
            <p className="mb-4">
              After completing my Computer Science degree, I worked with several startups
              and established companies, helping them build products that users love. My
              approach combines technical expertise with a deep understanding of user
              needs and business goals.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, experimenting
              with photography, or contributing to open-source projects. I believe in 
              continuous learning and regularly attend tech conferences and workshops
              to stay updated with the latest trends.
            </p>
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
                description: "I constantly seek new ways to solve problems and improve experiences."
              },
              {
                title: "Attention to Detail",
                description: "The little things matter, from code quality to user interactions."
              },
              {
                title: "Continuous Learning",
                description: "Technology evolves quickly, and I'm committed to growing with it."
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
      </section>
    </Layout>
  );
};

export default About;
