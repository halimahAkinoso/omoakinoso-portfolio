import React from 'react';
import { 
  Code2, Palette, Braces, Code, 
  Globe, GitBranch, Github, 
  Search, Terminal, Server
} from 'lucide-react';

function Skills() {
  const skills = [
    { name: 'HTML', icon: <Code2 className="w-8 h-8" />, color: 'text-orange-500' },
    { name: 'CSS', icon: <Palette className="w-8 h-8" />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <Braces className="w-8 h-8" />, color: 'text-yellow-500' },
    { name: 'React', icon: <Code className="w-8 h-8" />, color: 'text-cyan-500' },
    { name: 'WordPress', icon: <Globe className="w-8 h-8" />, color: 'text-blue-600' },
    { name: 'PHP', icon: <Server className="w-8 h-8" />, color: 'text-purple-500' },
    { name: 'SASS', icon: <Palette className="w-8 h-8" />, color: 'text-pink-500' },
    { name: 'GIT', icon: <GitBranch className="w-8 h-8" />, color: 'text-orange-600' },
    { name: 'Github', icon: <Github className="w-8 h-8" />, color: 'text-gray-800' },
    { name: 'Responsive Design', icon: <div className="text-2xl">📱</div>, color: 'text-green-500' },
    { name: 'SEO', icon: <Search className="w-8 h-8" />, color: 'text-blue-400' },
    { name: 'Terminal', icon: <Terminal className="w-8 h-8" />, color: 'text-gray-700' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item flex flex-col items-center justify-center p-6"
            >
              <div className={`${skill.color} mb-4`}>
                {skill.icon}
              </div>
              <span className="font-medium text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;