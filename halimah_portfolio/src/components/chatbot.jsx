import React, { useState } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, LoaderCircle } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Halimah's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const payload = {
      message: input,
    };
    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch (error) {
      console.log(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: error,
        },
      ]);
    } finally{
        setLoading(false)
    }

    // Simulated AI Logic
    // setTimeout(() => {
    //   setMessages(prev => [...prev, {
    //     role: 'assistant',
    //     content: "I've analyzed your query. Halimah specializes in RAG and Full Stack AI development. Want to see her AWS projects?"
    //   }]);
    // }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Modal Sheet / Chat Window */}
      <div
        className={`
        mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] 
        flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
        ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"}
      `}
      >
        {/* Header */}
        <div className="bg-[#7843e9] p-5 text-white flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Sparkles size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                AI Agent
              </p>
              <p className="text-sm font-bold">Halimah AI v1.0</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:rotate-90 transition-transform p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8f9fa]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#7843e9] text-white rounded-br-none shadow-md"
                    : "bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 bg-gray-100 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#7843e9]/20 transition-all"
          />
          <button
            onClick={handleSend}
            className="bg-[#7843e9] text-white p-3 rounded-xl hover:bg-[#6635d0] transition-colors shadow-md"
          >
            {
                loading ? <LoaderCircle className="animate-spin text-white" size={18} /> : <Send size={18} />
            }
          </button>
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(120,67,233,0.4)]
          transition-all duration-300 hover:scale-110 active:scale-95
          ${isOpen ? "bg-gray-800 rotate-0" : "bg-[#7843e9]"}
        `}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatBot;
