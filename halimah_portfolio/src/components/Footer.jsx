import React from 'react';
import { Linkedin, Github, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          {/* Left Side */}
          <div className="md:w-3/5">
            <h2 className="text-xl font-bold uppercase tracking-[2px] mb-8">
              Halimah Ibrahim-Akinoso
            </h2>
           <p className="text-sm leading-relaxed text-[#eee] max-w-sm">
  Full Stack AI Developer building intelligent, scalable systems. Bridging the gap between sophisticated AI models and intuitive user interfaces.
</p>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-auto">
            <h2 className="text-xl font-bold uppercase tracking-[2px] mb-8">Social</h2>
            <div className="flex gap-5">
              <a href="#" className="hover:text-[#7843e9] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-[#7843e9] transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-[#7843e9] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#7843e9] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
            

          <p className="text-[10px] text-center uppercase tracking-widest text-gray-400">
            © Copyright {new Date().getFullYear()}. Made by {" "}
            <span className="font-bold text-white underline decoration-[#7843e9] underline-offset-4">
              Halimah Ibrahim-Akinoso
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;