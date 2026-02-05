
import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { GeminiService } from '../services/geminiService';
import { Message, Language, CVContent } from '../types';

interface AIChatAssistantProps {
  lang: string;
  content: CVContent;
}

export interface AIChatAssistantRef {
  open: () => void;
}

const AIChatAssistant = forwardRef<AIChatAssistantRef, AIChatAssistantProps>(({ lang, content }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const gemini = useRef(new GeminiService());

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true)
  }));

  // Reset messages when content (language) changes
  useEffect(() => {
    if (content && content.ui) {
      setMessages([
        { role: 'assistant', text: content.ui.aiWelcome || "Hola, ¿en qué puedo ayudarte?" }
      ]);
    }
  }, [content]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role === 'user' ? 'user' as const : 'assistant' as const,
      content: m.text
    }));

    const response = await gemini.current.chat(userMessage, lang, history);
    
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setIsLoading(false);
  };

  if (!content || !content.ui) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-[#050505] border border-white/20 w-[350px] h-[500px] shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-white p-5 flex justify-between items-center text-black">
            <div className="flex flex-col">
              <span className="folio text-[9px] opacity-60">Suplemento de Lectura</span>
              <span className="font-serif italic text-lg leading-none">IA del Editor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform opacity-60 hover:opacity-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className="folio text-[8px] mb-1 opacity-40 text-white">{m.role === 'user' ? 'INVITADO' : 'EDITOR'}</div>
                <div className={`p-4 text-xs leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-white text-black font-medium italic' 
                  : 'bg-black border border-white/10 text-white'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-black p-4 border border-white/5 flex gap-2">
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-black border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe algo..."
              className="flex-1 bg-transparent border-b border-white/10 px-2 py-2 text-xs text-white focus:outline-none focus:border-white placeholder:opacity-30 italic"
            />
            <button onClick={handleSend} className="text-white hover:opacity-50 transition-all p-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white text-black px-6 py-4 flex items-center gap-4 hover:bg-gray-200 transition-all group shadow-xl"
        >
          <span className="folio text-[9px] text-black">{content.ui.aiLabel || 'ASISTENTE IA'}</span>
          <div className="w-8 h-px bg-black/40 group-hover:w-12 transition-all" />
        </button>
      )}
    </div>
  );
});

export default AIChatAssistant;
