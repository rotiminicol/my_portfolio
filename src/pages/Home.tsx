
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Home = () => {
  const profileRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Add profile image rotation on mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 10;
      const y = (clientY / innerHeight - 0.5) * 10;
      
      profileRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Layout>
      <section className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
            Hi, I'm <span className="gradient-text">Oluwadurotimi Obabiyi-Nicol</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-muted-foreground">
            Full-Stack Developer & Designer
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            I create beautiful, functional websites and applications with modern
            technologies and user-centered design. Let's build something amazing
            together.
          </p>
          <div className="flex space-x-4">
            <Button asChild className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 perspective">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-purple to-portfolio-teal rounded-full blur opacity-70"></div>
            <img
              ref={profileRef}
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyMzA2MDk4MA&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Oluwadurotimi Obabiyi-Nicol"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full transition-transform duration-200 ease-out relative"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
