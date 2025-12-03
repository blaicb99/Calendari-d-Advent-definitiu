
import React, { useEffect, useState } from 'react';
import { ModalProps } from '../types';
import { X, HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { TeamShield } from './TeamShield';

export const InfoModal: React.FC<ModalProps> = ({ isOpen, onClose, day, isCompleted, onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [quizState, setQuizState] = useState<'question' | 'success'>('question');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // If already completed, go straight to success (show content)
      // If not, show question
      setQuizState(isCompleted ? 'success' : 'question');
      setSelectedOption(null);
      setIsWrong(false);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen, isCompleted]);

  const handleOptionClick = (index: number) => {
    if (!day) return;
    
    setSelectedOption(index);
    
    if (index === day.correctAnswer) {
      // Correct!
      setIsWrong(false);
      setTimeout(() => {
        setQuizState('success');
        onComplete(); // Mark as done in parent
      }, 600);
    } else {
      // Wrong!
      setIsWrong(true);
      // Reset error state after animation
      setTimeout(() => {
        setSelectedOption(null);
        setIsWrong(false);
      }, 800);
    }
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${isOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-none'}`}
      role="dialog" 
      aria-modal="true"
    >
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-green-950/80"
        onClick={onClose}
      ></div>

      {/* Card Content */}
      <div 
        className={`relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${isOpen ? 'translate-y-0 scale-100 rotate-0' : 'translate-y-10 scale-90 rotate-3'}`}
      >
        {day && (
          <>
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 z-30 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 transition-colors backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header / Logo Section */}
            <div className="relative h-32 bg-slate-100 overflow-hidden flex items-center justify-center">
               <div className="absolute top-0 left-0 w-full h-full opacity-30">
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70" style={{backgroundColor: day.colors[0]}}></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70" style={{backgroundColor: day.colors[1] || day.colors[0]}}></div>
               </div>
               
               {day.logoUrl && (
                 <img 
                   src={day.logoUrl} 
                   className="absolute w-64 h-64 object-contain opacity-10 blur-sm pointer-events-none" 
                   alt=""
                 />
               )}

               <div className="relative z-10 transform translate-y-4">
                  <TeamShield colors={day.colors} logoUrl={day.logoUrl} className="w-28 h-28 drop-shadow-2xl" />
               </div>
            </div>

            {/* Body */}
            <div className="px-6 pb-10 pt-12 text-center relative z-10 min-h-[300px] flex flex-col justify-center">
              
              {/* QUIZ MODE */}
              {quizState === 'question' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-200">
                    <HelpCircle className="w-3 h-3" /> Pregunta Dia {day.id}
                  </span>

                  <h3 className="text-xl font-bold text-slate-800 mb-8 leading-snug">
                    {day.question}
                  </h3>

                  <div className="space-y-3">
                    {day.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(idx)}
                        className={`w-full p-4 rounded-xl text-sm font-bold transition-all duration-200 border-2 relative
                          ${selectedOption === idx 
                            ? (isWrong 
                                ? 'bg-red-100 border-red-500 text-red-700 animate-[shake_0.5s_ease-in-out]' 
                                : 'bg-green-100 border-green-500 text-green-700 scale-105')
                            : 'bg-white border-slate-200 text-slate-600 hover:border-amber-400 hover:bg-amber-50 shadow-sm hover:shadow-md'
                          }
                        `}
                      >
                         {option}
                         {selectedOption === idx && !isWrong && (
                           <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
                         )}
                         {selectedOption === idx && isWrong && (
                           <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600" />
                         )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SUCCESS / STORY MODE */}
              {quizState === 'success' && (
                <div className="animate-in fade-in zoom-in duration-500">
                   <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase mb-4 border border-amber-200">
                    Curiositat Desbloquejada
                  </span>

                  <h2 className="mb-6 text-3xl font-black text-slate-900 font-serif leading-none tracking-tight">
                    {day.title}
                  </h2>

                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-amber-500/20 font-serif">"</span>
                    <p className="text-lg leading-relaxed text-slate-600 font-medium relative z-10">
                      {day.content}
                    </p>
                    <span className="absolute -bottom-8 -right-2 text-6xl text-amber-500/20 font-serif rotate-180">"</span>
                  </div>

                  <button
                    type="button"
                    className="mt-10 w-full rounded-2xl bg-gradient-to-r from-red-700 to-red-600 px-5 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                    onClick={onClose}
                  >
                    Continuar
                  </button>
                </div>
              )}

            </div>
          </>
        )}
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};
