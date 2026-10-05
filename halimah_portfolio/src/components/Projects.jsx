import React from "react";
import trackerImage from "../assets/tracker image.png";
import shopping from "../assets/shopping.png";

function Projects() {
  // 1. All project DATA goes here inside the array
  const projects = [
    {
      title: "AI-Shopping Assistance",
      description:
        "ShopperAI is a full-stack, AI-integrated e-commerce platform designed to bridge the gap between traditional online shopping and personalized assistance. It features a modern, responsive storefront where users can browse products, but its core innovation is a Retrieval-Augmented Generation (RAG) shopping assistant.",
      image: shopping,
      link: "https://ai-shopping-assistance-szna.onrender.com",
    },
    {
      title: "SpendWise Personal Expense Tracker",
      description:
        "Take control of your finances with a simple, privacy-first expense tracker. Monitor your spending in real-time, stay under budget with automated alerts, and visualize where your money goes all in one clean dashboard.",
      image: trackerImage,
      link: "https://spendwise-personal-expense-tracker.onrender.com",
    },
    {
      title: "MicroSave Community Savings & Lending Platform",
      description:
        "MicroSave is a full-stack community savings and lending platform designed to simplify group-based financial management. It features a modern, responsive dashboard where members can manage savings, join communities, request and track micro-loans, monitor repayments, and access protected financial information, with an AI-powered RAG assistant providing personalized guidance based on relevant financial and group data.",
      image: trackerImage,
      link: "https://microsave-app.netlify.app",
    },
    {
      title: "Lagos Traffic Congestion Predictor",
      description:
        "Lagos Traffic Congestion Predictor is a full-stack AI/ML application that predicts traffic congestion levels in Lagos using traffic conditions, location, time, speed, vehicle density, and road incidents. The system uses a machine-learning model with a FastAPI backend and React frontend to provide congestion predictions, confidence scores, and map-based traffic visualization to help commuters make smarter travel decisions.",
      image:traffic prediction,
      link: "https://traffic-congestion-predictor-app.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-extrabold tracking-widest uppercase text-gray-900 mb-6 relative inline-block">
            Projects
            <span className="block h-1.5 w-8 bg-[#7843e9] rounded-lg absolute -bottom-4 left-1/2 -translate-x-1/2"></span>
          </h2>
          <p className="text-xl text-[#555] max-w-3xl mx-auto leading-relaxed mt-10">
            Here you will find some of the Full Stack and AI systems I've
            developed, focusing on data-driven solutions and intelligent user
            interfaces.
          </p>
        </div>

        {/* 2. The loop automatically handles the display */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="flex flex-col items-start space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-lg text-[#666] leading-relaxed">
                  {project.description}
                </p>
                <a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-10 py-4 bg-[#7843e9] text-white font-bold rounded-md shadow-lg hover:translate-y-[-3px] transition-all uppercase tracking-widest text-sm inline-block text-center"
>
  Case Study
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
