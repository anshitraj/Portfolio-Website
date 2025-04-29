import React from "react";
import Navbar from "@/components/Navbar";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

const AchievementsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20">
        <Achievements />
      </div>

      <section id="blog" className="p-8">
        <h1 className="text-3xl font-bold mb-6">Latest Blog</h1>
        <div className="p-6 border rounded-lg hover:shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Awareness on a bug risking your funds
          </h2>
          <a
            href="https://medium.com/@anshitraj4/i-am-writing-this-article-to-help-you-aware-of-a-bug-which-may-result-in-loss-of-your-funds-kept-in-cab841dabddf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read Blog
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AchievementsPage;
