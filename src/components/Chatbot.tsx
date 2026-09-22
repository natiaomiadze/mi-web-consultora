import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ChatMessage {
  role: 'bot' | 'user';
  text: string;
}

const BOT_FLOW: { bot: string; needsAnswer: boolean }[] = [
  {
    bot: '¡Hola! Antes de contactar a Natia, cuéntame: ¿Cuántos proveedores tiene tu empresa?',
    needsAnswer: true,
  },
  {
    bot: '¿Cuál es tu mayor reto con proveedores ahora mismo?',
    needsAnswer: true,
  },
  {
    bot: '¿Tu nombre y email para que Natia te contacte?',
    needsAnswer: true,
  },
  {
    bot: '¡Gracias! Natia responde en menos de 24h.',
    needsAnswer: false,
  },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const startChat = () => {
    setOpen(true);
    if (messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([{ role: 'bot', text: BOT_FLOW[0].bot }]);
      }, 700);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    const nextStep = step + 1;
    setStep(nextStep);

    setTimeout(() => {
      setTyping(false);
      if (nextStep < BOT_FLOW.length) {
        setMessages((prev) => [...prev, { role: 'bot', text: BOT_FLOW[nextStep].bot }]);
      }
    }, 900);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const chatEnded = step >= BOT_FLOW.length - 1 && messages.length > 0;

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => (open ? setOpen(false) : startChat())}
        className={`fixed bottom-6 right-6 z-[55] flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 active:scale-90 ${
          open
            ? 'bg-charcoal-800 text-white rotate-90'
            : 'bg-white border-2 border-forest-700 text-forest-700 hover:bg-forest-700 hover:text-white hover:shadow-xl hover:scale-105'
        }`}
        aria-label="Toggle chatbot"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[55] w-[calc(100vw-3rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-charcoal-100 overflow-hidden animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="bg-forest-700 px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Asistente de Natia</p>
              <p className="text-xs text-forest-100 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                En línea
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="chat-scroll px-4 py-5 h-72 overflow-y-auto space-y-3 bg-light"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-forest-700 text-white rounded-br-sm'
                      : 'bg-white text-charcoal-700 border border-charcoal-100 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white border border-charcoal-100 rounded-xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce" style={{ animationDelay: '0s' }} />
                  <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <span className="w-2 h-2 rounded-full bg-forest-400 animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-charcoal-100 bg-white">
            {chatEnded ? (
              <div className="text-center py-2">
                <p className="text-sm text-charcoal-400 mb-2">Conversación completada</p>
                <button
                  onClick={() => {
                    setMessages([]);
                    setStep(0);
                    startChat();
                  }}
                  className="text-sm font-bold text-forest-700 hover:text-forest-800 transition-colors"
                >
                  Iniciar nueva conversación
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Escribe tu respuesta..."
                  className="flex-grow px-4 py-2.5 text-sm rounded-lg bg-light border border-charcoal-100 text-charcoal-800 placeholder:text-charcoal-300 focus:outline-none focus:border-forest-700 focus:ring-2 focus:ring-forest-700/10 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-forest-700 text-white hover:bg-forest-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-90"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
