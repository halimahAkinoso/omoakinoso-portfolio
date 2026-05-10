import React, { useEffect, useRef, useState } from "react";
import { LoaderCircle, MessageSquare, Send, Sparkles, X } from "lucide-react";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000"
).replace(/\/$/, "");

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
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || loading) {
      return;
    }

    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: trimmedInput }]);
    setInput("");

    try {
      const res = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmedInput }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.detail || "The chat request failed.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.response || "I couldn't generate a reply just now. Please try again.",
        },
      ]);
    } catch (error) {
      const fallbackMessage =
        error instanceof Error
          ? error.message
          : "I couldn't reach the portfolio assistant right now. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: fallbackMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <div
        className={`
        mb-4 h-[500px] w-[350px] origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]
        transition-all duration-300 sm:w-[400px]
        ${isOpen ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-10 scale-0 opacity-0"}
      `}
      >
        <div className="flex items-center justify-between bg-[#7843e9] p-5 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white/20 p-2">
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
            className="p-1 transition-transform hover:rotate-90"
            aria-label="Close chat"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex h-[calc(100%-145px)] flex-col overflow-y-auto bg-[#f8f9fa] p-6">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-none bg-[#7843e9] text-white shadow-md"
                      : "rounded-bl-none border border-gray-100 bg-white text-gray-800 shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-none border border-gray-100 bg-white p-4 text-sm text-gray-800 shadow-sm">
                  Halimah&apos;s assistant is thinking...
                </div>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="flex gap-2 border-t border-gray-100 bg-white p-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 rounded-xl bg-gray-100 px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-[#7843e9]/20"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            className="rounded-xl bg-[#7843e9] p-3 text-white shadow-md transition-colors hover:bg-[#6635d0] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={loading}
            aria-label="Send message"
          >
            {loading ? (
              <LoaderCircle className="animate-spin text-white" size={18} />
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_10px_30px_rgba(120,67,233,0.4)]
          transition-all duration-300 hover:scale-110 active:scale-95
          ${isOpen ? "rotate-0 bg-gray-800" : "bg-[#7843e9]"}
        `}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default ChatBot;
