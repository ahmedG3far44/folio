
import React from 'react';


export interface Theme {
  id: string | number;
  themeName: string;
  backgroundColor: string;
  cardColor: string;
  borderColor: string;
  primaryText: string;
  secondaryText: string;
  accentColor: string;
}


interface ThemeCardProps extends Partial<Theme> {
    isSelected?: boolean;
}

const ThemeCard: React.FC<ThemeCardProps> = ({
  backgroundColor,
  cardColor,
  borderColor,
  primaryText,
  secondaryText,
  themeName,
  accentColor,
  isSelected
}) => {
  return (
    <div 
      /* Fix: Combine multiple style attributes into one */
      className="w-full h-32 rounded-lg p-3 border relative overflow-hidden flex flex-col gap-2 transition-all"
      style={{ 
        borderColor: isSelected ? accentColor : borderColor, 
        backgroundColor: backgroundColor 
      }}
    >
      <div className="flex justify-between items-start">
         <span style={{ color: primaryText }} className="text-[10px] font-bold uppercase tracking-wider opacity-60">
            {themeName}
         </span>
         {isSelected && (
             <div style={{ backgroundColor: accentColor }} className="rounded-full p-1 shadow-lg">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
             </div>
         )}
      </div>

      <div style={{ backgroundColor: cardColor, borderColor: borderColor }} className="w-full h-12 rounded border p-2 flex flex-col gap-1 shadow-sm">
        <div style={{ backgroundColor: accentColor }} className="w-1/2 h-1 rounded-full" />
        <div style={{ backgroundColor: secondaryText }} className="w-3/4 h-1 rounded-full opacity-30" />
        <div style={{ backgroundColor: secondaryText }} className="w-1/4 h-1 rounded-full opacity-30" />
      </div>

      <div className="flex gap-1 mt-auto">
        <div style={{ backgroundColor: accentColor }} className="w-3 h-3 rounded-full" />
        <div style={{ backgroundColor: primaryText }} className="w-3 h-3 rounded-full opacity-50" />
        <div style={{ backgroundColor: secondaryText }} className="w-3 h-3 rounded-full opacity-30" />
      </div>
    </div>
  );
};

export default ThemeCard;
