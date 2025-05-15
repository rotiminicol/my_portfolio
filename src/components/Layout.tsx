
import React from "react";
import Navbar from "./Navbar";
import ThreeDBackground from "./ThreeDBackground";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ThreeDBackground />
      <main className={`flex-grow pt-20 ${className}`}>{children}</main>
    </div>
  );
};

export default Layout;
