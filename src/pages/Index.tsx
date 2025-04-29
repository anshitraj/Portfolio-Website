import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";
import Blog from "@/components/Blog";

const Index = () => {
  useEffect(() => {
    document.title = "Anshit Raj Yadav | Portfolio Dashboard";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20 pb-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6">
              <Hero />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="dashboard-card p-6">
                  <h2 className="section-heading">
                    <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <span className="block h-6 w-6" />
                    </span>
                    Experience
                  </h2>
                  <div className="max-h-[400px] overflow-y-auto pr-2">
                    <Experience />
                  </div>
                </div>

                <div className="dashboard-card p-6">
                  <h2 className="section-heading">
                    <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <span className="block h-6 w-6" />
                    </span>
                    Achievements
                  </h2>
                  <div className="max-h-[400px] overflow-y-auto pr-2">
                    <Achievements />
                  </div>
                </div>
              </div>

              <div className="dashboard-card p-6">
                <h2 className="section-heading">
                  <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <span className="block h-6 w-6" />
                  </span>
                  Projects
                </h2>
                <Projects />
              </div>

              <div className="dashboard-card p-6">
                <h2 className="section-heading">
                  <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <span className="block h-6 w-6" />
                  </span>
                  Certificates
                </h2>
                <Certificates />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-6">
              <div className="dashboard-card p-6">
                <h2 className="section-heading">
                  <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <span className="block h-6 w-6" />
                  </span>
                  Skills
                </h2>
                <Skills />
              </div>

              <div className="dashboard-card p-6">
                <h2 className="section-heading">
                  <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <span className="block h-6 w-6" />
                  </span>
                  Contact
                </h2>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
