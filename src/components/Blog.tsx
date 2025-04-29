import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Blog</h1>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md bg-[#0e0e0e] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="md:w-40 md:h-40 h-48">
            <img
              src="/Blog/bl.webp"
              alt="Blog Thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Awareness on a bug risking your funds
            </h2>
            <a
              href="https://medium.com/@anshitraj4/i-am-writing-this-article-to-help-you-aware-of-a-bug-which-may-result-in-loss-of-your-funds-kept-in-cab841dabddf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read Blog
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
