
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found</p>
        <p className="max-w-md mb-12 text-muted-foreground">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
