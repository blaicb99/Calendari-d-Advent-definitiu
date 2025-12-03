import React, { useState } from 'react';

interface TeamShieldProps {
  colors: string[];
  logoUrl?: string;
  className?: string;
  type?: 'shield' | 'jersey';
}

export const TeamShield: React.FC<TeamShieldProps> = ({ colors, logoUrl, className = "w-12 h-12", type = 'shield' }) => {
  const primary = colors[0] || '#ccc';
  const secondary = colors[1] || '#fff';
  const [imageError, setImageError] = useState(false);

  // Helper for jersey rendering
  const renderJersey = () => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
           <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="rgba(0,0,0,0.3)" />
        </filter>
        {/* Base Jersey Shape */}
        <path d="M9 3L4 6V10C4 10 5 11 6 11V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V11C19 11 20 10 20 10V6L15 3L12 5L9 3Z" fill={primary} stroke={secondary} strokeWidth="0.5" filter="url(#shadow)"/>
        {/* Sleeves detail */}
        <path d="M4 6L9 3" stroke={secondary} strokeWidth="0.5" strokeOpacity="0.4"/>
        <path d="M20 6L15 3" stroke={secondary} strokeWidth="0.5" strokeOpacity="0.4"/>
        {/* Collar */}
        <path d="M12 5L9 3C9 3 10 5 12 5C14 5 15 3 15 3L12 5Z" fill={secondary} fillOpacity="0.3"/>
        {/* Bottom hem */}
        <path d="M7 20H17" stroke={secondary} strokeWidth="1"/>
      </svg>
      {/* Logo Overlay on Chest */}
      {logoUrl && !imageError && (
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[25%] h-[25%] z-10">
          <img 
            src={logoUrl} 
            alt="Team Crest" 
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </div>
  );

  if (type === 'jersey') {
    return renderJersey();
  }

  // Real Image
  if (logoUrl && !imageError) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img 
          src={logoUrl} 
          alt="Team Shield" 
          className="w-full h-full object-contain drop-shadow-md transition-all duration-300"
          onError={() => setImageError(true)}
        />
      </div>
    );
  }

  // Fallback Geometric Shield
  return (
    <svg viewBox="0 0 100 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 115 C10 85 5 35 5 10 L50 0 L95 10 C95 35 90 85 50 115Z" fill={secondary} stroke={primary} strokeWidth="3" />
      <path d="M50 0 L50 115 C25 95 15 50 15 10 L50 0Z" fill={primary} />
      <path d="M50 0 L85 10 C85 50 75 95 50 115 L50 0Z" fill={primary} opacity="0.8"/>
      <path d="M50 108 C15 80 12 35 12 15 L50 7 L88 15 C88 35 85 80 50 108Z" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
    </svg>
  );
};