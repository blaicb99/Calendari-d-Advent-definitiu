
import React, { useState, useEffect } from 'react';
import { CALENDAR_DATA } from './constants';
import { DayData } from './types';
import { DayCard } from './components/DayCard';
import { InfoModal } from './components/InfoModal';
import { RewardModal } from './components/RewardModal';
import { Gift, RotateCcw, Star } from 'lucide-react';

// Decorative Lights Component
const ChristmasLights = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-12 overflow-hidden pointer-events-none z-30">
      <div className="relative w-full h-full">
        {/* Wire */}
        <svg className="absolute top-0 left-0 w-[200%] h-full text-gray-800" preserveAspectRatio="none">
          <path d="M0,0 Q50,20 100,0 T200,0 T300,0 T400,0" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        
        {/* Bulbs */}
        <div className="absolute top-2 left-[5%] w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-twinkle"></div>
        <div className="absolute top-4 left-[15%] w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15] animate-twinkle delay-300"></div>
        <div className="absolute top-2 left-[25%] w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-twinkle delay-700"></div>
        <div className="absolute top-4 left-[35%] w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-twinkle delay-200"></div>
        <div className="absolute top-2 left-[45%] w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-twinkle delay-500"></div>
        <div className="absolute top-4 left-[55%] w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15] animate-twinkle delay-100"></div>
        <div className="absolute top-2 left-[65%] w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-twinkle delay-300"></div>
        <div className="absolute top-4 left-[75%] w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-twinkle delay-700"></div>
        <div className="absolute top-2 left-[85%] w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-twinkle delay-200"></div>
        <div className="absolute top-4 left-[95%] w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15] animate-twinkle delay-500"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<DayData | null>(null);
  const [showReward, setShowReward] = useState(false);
  
  const [openedDays, setOpenedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('laliga-calendar-opened');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('laliga-calendar-opened', JSON.stringify(openedDays));
  }, [openedDays]);

  const handleOpenDay = (day: DayData) => {
    setSelectedDay(day);
    // Note: We do NOT mark as opened here anymore. 
    // It happens in handleDayComplete when the quiz is passed.
  };

  const handleDayComplete = () => {
    if (selectedDay && !openedDays.includes(selectedDay.id)) {
      setOpenedDays(prev => [...prev, selectedDay.id]);
    }
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  const handleReset = () => {
    // 1. Clear Local Storage
    localStorage.removeItem('laliga-calendar-opened');
    
    // 2. Reset React State (This triggers the re-render immediately)
    setOpenedDays([]);
    setSelectedDay(null);
    setShowReward(false);
  };

  const allOpened = openedDays.length === 24;

  return (
    <div className="min-h-screen w-full text-amber-50 pb-20 relative overflow-x-hidden">
      
      {/* Lights Decoration */}
      <ChristmasLights />

      {/* Header */}
      <header className="pt-10 pb-6 px-4 text-center relative z-20">
        <div className="inline-flex items-center justify-center gap-3 mb-2">
           <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
             <Gift className="w-6 h-6 text-amber-400 animate-bounce-gentle" />
           </div>
           <span className="text-xs font-bold tracking-[0.3em] text-amber-400 uppercase">Edició 25/26</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-black text-white font-serif tracking-tight drop-shadow-lg mb-2">
          LALIGA <span className="font-festive text-5xl sm:text-6xl animate-shimmer">Advent</span>
        </h1>
        
        <div className="flex items-center justify-center gap-2 mt-4">
           <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/30"></div>
           <p className="text-sm text-green-100/60 font-medium italic">Descobreix la màgia del futbol</p>
           <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/30"></div>
        </div>
      </header>

      {/* Progress Bar (Floating) */}
      <div className="sticky top-6 z-40 px-4 mb-8 flex justify-center pointer-events-none">
        <div className="bg-green-900/80 backdrop-blur-md border border-green-700/50 rounded-full px-4 py-2 flex items-center gap-3 shadow-xl pointer-events-auto transition-transform hover:scale-105">
           <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold text-green-200/80 tracking-wider">Progrés</span>
              <div className="w-24 h-1.5 bg-black/40 rounded-full overflow-hidden mt-0.5">
                 <div className="h-full bg-amber-500 transition-all duration-1000 ease-out" style={{width: `${(openedDays.length / 24) * 100}%`}}></div>
              </div>
           </div>
           <div className="flex items-center gap-1.5 pl-3 border-l border-white/10">
              <Star className={`w-4 h-4 ${allOpened ? 'text-amber-400 fill-amber-400 animate-spin-slow' : 'text-slate-500'}`} />
              <span className="font-festive text-xl text-white pt-1">{openedDays.length}/24</span>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto max-w-5xl px-4 relative z-10">
        
        {/* Reward Banner */}
        {allOpened && !showReward && (
          <button 
            onClick={() => setShowReward(true)}
            className="w-full mb-8 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-xl p-1 shadow-lg transform hover:scale-[1.02] transition-transform animate-bounce-gentle"
          >
            <div className="bg-red-900/40 rounded-lg p-4 flex items-center justify-between backdrop-blur-sm">
               <div className="text-left">
                  <span className="block text-xs font-bold uppercase text-amber-200 tracking-wider">Objectiu Complet</span>
                  <span className="text-xl font-festive font-bold text-white">Obrir el teu regal exclusiu &rarr;</span>
               </div>
               <Gift className="w-8 h-8 text-white" />
            </div>
          </button>
        )}

        {/* The Calendar Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {CALENDAR_DATA.map((day) => (
            <DayCard 
              key={day.id} 
              day={day} 
              onOpen={handleOpenDay}
              isOpened={openedDays.includes(day.id)}
            />
          ))}
        </div>

        {/* Footer actions */}
        <div className="mt-16 text-center pb-10">
          {openedDays.length > 0 && (
            <button 
              onClick={handleReset}
              className="relative z-50 text-sm font-medium text-green-200/60 hover:text-white flex items-center justify-center gap-2 mx-auto transition-colors border border-green-800/50 rounded-full px-6 py-3 hover:bg-green-900/80 shadow-lg bg-green-950/30 backdrop-blur-sm cursor-pointer hover:shadow-green-900/50"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar calendari
            </button>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center bg-black/20 backdrop-blur-lg">
        <p className="font-festive text-xl text-amber-500">
          Bon Nadal!
        </p>
        <p className="text-xs mt-2 text-white/30 font-serif">
          Fet per Dionisio Reyes, Blai Camatxo i Edu Jimenez
        </p>
      </footer>

      {/* Modals */}
      <InfoModal 
        isOpen={!!selectedDay} 
        onClose={handleCloseModal} 
        day={selectedDay}
        isCompleted={selectedDay ? openedDays.includes(selectedDay.id) : false}
        onComplete={handleDayComplete}
      />
      
      <RewardModal
        isOpen={showReward}
        onClose={() => setShowReward(false)}
      />
    </div>
  );
};

export default App;
