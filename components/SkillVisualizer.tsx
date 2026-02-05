
import React from 'react';
import { CVContent } from '../types';
import { SKILLS_DATA } from '../constants';

interface SkillVisualizerProps {
  content: CVContent;
  theme?: 'dark' | 'light';
}

const SkillVisualizer: React.FC<SkillVisualizerProps> = ({ content, theme = 'dark' }) => {
  const t = content;
  const isDark = theme === 'dark';
  const borderColor = isDark ? 'border-white/20' : 'border-black/20';
  const textColor = isDark ? 'text-white' : 'text-black';

  return (
    <div className={`flex flex-col gap-32 transition-colors duration-700 ${textColor}`}>

      {/* SECTION 1: THE ATOMIC GRID (Periodic Table) */}
      <div className="flex flex-col w-full">
        <div className={`folio mb-12 text-center opacity-60 font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          {t.ui.proficiency}
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-white/10">
          {t.skills.map((skill: any, i: number) => {
            const level = SKILLS_DATA[i]?.level || 80;
            // Generate "Atomic Symbol" logic: First 2 letters usually, or specific overrides if needed
            const symbol = skill.name.slice(0, 2);

            return (
              <div key={i} className={`group relative aspect-square border-b border-r ${borderColor} p-4 flex flex-col justify-between transition-colors duration-500 hover:bg-white/5`}>

                {/* Atomic Number (Level) */}
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs opacity-50">{i + 1}</span>
                  <span className="font-mono text-xs font-bold opacity-100">{level}</span>
                </div>

                {/* Atomic Symbol */}
                <div className="text-center">
                  <span className={`block font-serif font-bold text-5xl md:text-6xl tracking-tighter ${isDark ? 'text-white' : 'text-black'} group-hover:scale-110 transition-transform duration-300`}>
                    {symbol}
                  </span>
                </div>

                {/* Full Name & Category */}
                <div className="text-center">
                  <h4 className="font-medium text-sm md:text-base leading-tight mb-1">{skill.name}</h4>
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-50">{skill.category}</span>
                </div>

                {/* Category Color Bar (Optional Detail) */}
                <div className="absolute top-0 right-0 w-1 h-0 group-hover:h-full bg-current transition-all duration-500 opacity-20" />
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: SOFT SKILLS */}
      <div className={`border-t pt-32 ${borderColor}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-12 mb-16">
            <div className={`folio mb-2 opacity-60 font-bold ${textColor}`}>
              {t.ui.humanLogic}
            </div>
            <h3 className={`font-serif text-6xl md:text-7xl font-bold italic mt-4 ${textColor}`}>
              Factores Humanos.
            </h3>
            <div className={`rule mt-12 ${isDark ? 'bg-white' : 'bg-black'} opacity-20`} />
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.softSkills.map((skill: any, i: number) => (
              <div key={i} className={`group relative border p-10 transition-all duration-500 overflow-hidden ${isDark ? 'border-white/10 hover:border-white/40' : 'border-black/10 hover:border-black/40'}`}>
                <span className={`absolute -right-4 -bottom-8 text-[8rem] font-serif italic pointer-events-none transition-colors ${isDark ? 'text-white/5 group-hover:text-white/10' : 'text-black/5 group-hover:text-black/10'}`}>0{i + 1}</span>
                <div className="relative z-10">
                  <h4 className={`text-3xl font-serif font-bold leading-tight mb-4 ${textColor}`}>{skill.name}</h4>
                  <p className={`text-lg font-light leading-relaxed opacity-60 group-hover:opacity-100`}>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillVisualizer;
