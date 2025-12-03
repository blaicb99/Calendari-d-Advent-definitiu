import React, { useState, useMemo } from 'react';
import { CALENDAR_DATA } from '../constants';
import { TeamShield } from './TeamShield';
import { X, CheckCircle, Shirt } from 'lucide-react';

interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RewardModal: React.FC<RewardModalProps> = ({ isOpen, onClose }) => {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [isOrdered, setIsOrdered] = useState(false);

  // Filter out teams 21-24 which are generic and handle duplicates
  const uniqueTeams = useMemo(() => {
    const seenTitles = new Set();
    return CALENDAR_DATA.filter(day => {
      // Skip general LALIGA cards
      if (day.title.includes("LALIGA")) return false;
      
      // Ensure uniqueness by title
      if (seenTitles.has(day.title)) return false;
      
      seenTitles.add(day.title);
      return true;
    });
  }, []);

  const selectedTeamData = CALENDAR_DATA.find(t => t.id === selectedTeamId);

  if (!isOpen) return null;

  const handleOrder = () => {
    setIsOrdered(true);
  };
  
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-500" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-slate-900 to-red-950 p-6 sm:p-10 shadow-2xl border border-amber-500/30">
        <button onClick={onClose} className="absolute right-6 top-6 text-slate-400 hover:text-white transition-colors">
          <X className="h-8 w-8" />
        </button>

        {!isOrdered ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-400 mb-4 tracking-tight drop-shadow-sm">
                Escull el teu Regal
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Has demostrat ser un expert. Ara tria la samarreta del teu equip preferit.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-10 max-h-[50vh] overflow-y-auto p-2 custom-scrollbar">
              {uniqueTeams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => setSelectedTeamId(team.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 group
                    ${selectedTeamId === team.id 
                      ? 'bg-amber-500/20 border-amber-400 scale-105 shadow-[0_0_15px_rgba(251,191,36,0.3)]' 
                      : 'bg-slate-800/50 border-transparent hover:bg-slate-700 hover:border-slate-500'
                    }
                  `}
                >
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                     <TeamShield colors={team.colors} logoUrl={team.logoUrl} className="w-full h-full" />
                  </div>
                  <span className={`text-xs font-bold text-center leading-tight ${selectedTeamId === team.id ? 'text-amber-400' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {team.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-center border-t border-white/10 pt-8">
              <button
                disabled={!selectedTeamId}
                onClick={handleOrder}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-amber-500/40 disabled:opacity-50 disabled:grayscale disabled:hover:scale-100"
              >
                <Shirt className="h-6 w-6" />
                <span className="text-lg uppercase tracking-wider">Generar Samarreta</span>
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-in zoom-in duration-500">
            <div className="mb-6 rounded-full bg-green-500/20 p-6 text-green-400 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
              <CheckCircle className="h-16 w-16" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Aquí la tens!</h3>
            <p className="text-slate-300">Porta els colors amb orgull.</p>
            
            {selectedTeamData && (
               <div className="mt-10 mb-8 transform hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <TeamShield 
                    colors={selectedTeamData.colors} 
                    logoUrl={selectedTeamData.logoUrl} 
                    type="jersey" 
                    className="w-56 h-56 mx-auto" 
                  />
                  <div className="mt-6 text-xl font-black text-white uppercase tracking-widest">
                    {selectedTeamData.title}
                  </div>
               </div>
            )}

            <button onClick={onClose} className="mt-4 text-sm font-semibold text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              Tancar finestra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};