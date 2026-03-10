import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ChatBot from './components/chatbot'; // Import the ChatBot component
import './index.css';

function App() {
  return (
    <div className="min-h-screen selection:bg-[#7843e9] selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </main>
      <Footer />
      
      {/* Placing ChatBot here allows it to float over 
          all sections using the 'fixed' class we added. 
      */}
      <ChatBot />
    </div>
  );
}

export default App;