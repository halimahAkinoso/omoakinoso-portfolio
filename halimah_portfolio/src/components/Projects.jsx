import React from "react";
import trackerImage from "../assets/tracker image.png";

function Projects() {
  // 1. All project DATA goes here inside the array
  const projects = [
    {
      title: "AI-Powered Analytics Suite",
      description:
        "Built a full-stack dashboard that uses RAG (Retrieval-Augmented Generation) to let users chat with their private PDF data. Developed with React, FastAPI, and OpenAI.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", // Example AI image
      link: "#",
    },
    {
      title: "SpendWise Personal Expense Tracker",
      description:
        "Take control of your finances with a simple, privacy-first expense tracker. Monitor your spending in real-time, stay under budget with automated alerts, and visualize where your money goes all in one clean dashboard.",
      image: trackerImage,
      link: "https://spendwise-personal-expense-tracker.onrender.com",
    },
    {
      title: "Dopefolio Open Source",
      description:
        "A successful Open-Source project featured on CSS-Tricks and used by thousands of developers globally to showcase high-performance applications.",
      image:
        "https://d33wubrfki0l68.cloudfront.net/19c708670a3b839351c996153ad57303061f06bb/9083e/assets/jpeg/dopefolio.jpeg",
      link: "#",
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
