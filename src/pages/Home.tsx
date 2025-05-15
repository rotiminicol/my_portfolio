
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Home = () => {
  const profileRef = useRef<HTMLImageElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only add profile image rotation on desktop
    if (isMobile) return;
    
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
  }, [isMobile]);

  return (
    <Layout>
      <section className="container mx-auto px-4 py-10 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
        <div className="md:w-1/2 animate-fade-in text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-shadow leading-tight">
            Hi, I'm <span className="gradient-text">Oluwadurotimi Obabiyi-Nicol</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-muted-foreground">
            Full-Stack Developer & Designer
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
            I create beautiful, functional websites and applications with modern
            technologies and user-centered design. Let's build something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button asChild className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity w-full sm:w-auto">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 perspective">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-purple to-portfolio-teal rounded-full blur opacity-70"></div>
            <img
              ref={profileRef}
              src="/hero 3.png"
              alt="Oluwadurotimi Obabiyi-Nicol"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full transition-transform duration-200 ease-out relative"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
