import React from 'react';

const About = () => {
  const skills = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/white' },
  { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/white' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/white' },
  { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/white' },
  { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi/white' },
  // Fixed Slugs below
//   { name: 'Vector DBs', icon: 'https://cdn.simpleicons.org/pinecone/white' }, 
//   { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/white' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/white' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/white' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/white' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/white' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/white' },
];

  return (
    <section id="about" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-widest uppercase text-gray-900 mb-6 relative inline-block">
            About Me
            <span className="block h-1.5 w-8 bg-[#7843e9] rounded-lg absolute -bottom-4 left-1/2 -translate-x-1/2"></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Get to know me!</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a <strong>Full Stack AI Developer</strong> building intelligent applications that bridge the gap between complex backend models and seamless user experiences. I specialize in <strong>LLM integration</strong>, <strong>Vector Databases</strong>, and scalable cloud architecture.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Check out my technical stack to see the tools I use to build production-ready AI systems.
            </p>
          </div>

          {/* Right: The Grid Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-[#1a1c2e] p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-[#252843] hover:-translate-y-1 shadow-lg border border-gray-800"
              >
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                <span className="text-white font-medium text-xs tracking-wide uppercase">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;