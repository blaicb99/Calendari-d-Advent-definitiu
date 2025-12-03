import React from 'react';
import { DayData } from '../types';
import { Check, Lock, Snowflake } from 'lucide-react';
import { TeamShield } from './TeamShield';

interface DayCardProps {
  day: DayData;
  onOpen: (day: DayData) => void;
  isOpened: boolean;
}

export const DayCard: React.FC<DayCardProps> = ({ day, onOpen, isOpened }) => {
  return (
    <button
      onClick={() => onOpen(day)}
      className="group relative w-full aspect-[4/5] rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-green-950"
    >
      {/* Container Background (The "Inside" of the calendar - Revealed) */}
      <div className="absolute inset-0 bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center">
        {/* If opened, show a subtle glow inside */}
        {isOpened && (
           <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-green-900/20"></div>
        )}
      </div>

      {/* The Door (Front Card - Closed) */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-700 origin-left z-20
          ${isOpened 
            ? 'opacity-0 rotate-y-180 pointer-events-none' // "Opens" the door visually
            : 'bg-red-900 border-dashed border-amber-500/40 shadow-inner bg-texture' // Closed state
          }
        `}
        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
      >
        {/* Decorative corner accents */}
        <div className="absolute top-2 left-2 text-amber-500/20">✦</div>
        <div className="absolute bottom-2 right-2 text-amber-500/20">✦</div>

        {/* Big Center Number */}
        <span className="font-festive text-6xl text-amber-100 drop-shadow-md leading-none z-10">
          {day.id}
        </span>

        {/* Mystery Icon (Instead of Logo) */}
        <div className="mt-2 text-amber-500/30 group-hover:text-amber-500/50 transition-colors">
          <Snowflake className="w-8 h-8 animate-pulse-slow" />
        </div>

        {/* Status Icon (Lock) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
           <Lock className="w-3 h-3 text-black/40" />
        </div>
      </div>

      {/* The Revealed Content (Behind the door) */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center p-2 rounded-xl bg-white transition-all duration-500 z-10
           ${isOpened ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Magic Sparkles (Only visible when opened) */}
        {isOpened && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400 rounded-full animate-twinkle"></div>
            <div className="absolute bottom-4 right-3 w-1.5 h-1.5 bg-amber-300 rounded-full animate-twinkle delay-300"></div>
            <div className="absolute top-1/2 left-1 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle delay-700"></div>
            <div className="absolute top-3 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-200"></div>
          </div>
        )}

        {/* Status Indicator */}
        <div className="absolute top-2 right-2">
          <div className="bg-green-100 rounded-full p-1">
            <Check className="w-4 h-4 text-green-600" />
          </div>
        </div>

        <TeamShield colors={day.colors} logoUrl={day.logoUrl} className="w-20 h-20 mb-3 drop-shadow-xl transform hover:scale-110 transition-transform duration-300" />
        
        <div className="w-full text-center">
          <span className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase font-serif mb-1">
            DIA {day.id}
          </span>
          <h4 className="text-xs font-black text-slate-800 leading-tight line-clamp-2 uppercase">
            {day.title}
          </h4>
        </div>
        
        <div className="mt-3 text-[10px] text-amber-600 font-bold underline decoration-amber-200">
          Llegir història
        </div>
      </div>
    </button>
  );
};