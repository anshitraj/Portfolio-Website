
import React from "react";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20">
        <Experience />
      </div>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
