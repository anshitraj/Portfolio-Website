
import React from "react";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20">
        <Projects />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
