
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
  const subTextColor = isDark ? 'text-white/60' : 'text-black/60';
  const dataColor = isDark ? 'text-white/80' : 'text-black/80';

  return (
    <div className={`flex flex-col gap-32 transition-colors duration-700 ${textColor}`}>

      {/* SECTION 1: THE BLUEPRINT (Technical Specs) */}
      <div className="flex flex-col w-full">
        <div className={`folio mb-16 opacity-60 font-bold flex justify-between items-end ${borderColor} border-b pb-4`}>
          <span>{t.ui.proficiency}</span>
          <span className="font-mono text-[10px] tracking-widest">SYS.DIAGNOSTIC.V.2.5</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-0">
          {t.skills.map((skill: any, i: number) => {
            const level = SKILLS_DATA[i]?.level || 80;
            return (
              <div key={i} className={`group relative py-6 border-b ${borderColor} flex flex-col justify-center`}>
                <div className="flex items-baseline justify-between mb-2 relative z-10">
                  <h4 className="text-3xl md:text-4xl font-serif italic tracking-tight">
                    {skill.name}
                  </h4>
                  <span className={`font-mono text-sm md:text-base tracking-widest ${dataColor} opacity-50 group-hover:opacity-100 transition-opacity`}>
                    {level < 100 ? `0${level}` : level}%
                  </span>
                </div>

                {/* Technical Specs Line */}
                <div className="w-full flex items-center gap-4 opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                  <span className="text-[9px] font-mono tracking-widest uppercase shrink-0">{skill.category}</span>
                  <div className={`h-px flex-1 ${isDark ? 'bg-white/30' : 'bg-black/30'}`}></div>
                  <span className="text-[9px] font-mono tracking-widest uppercase shrink-0">IDX_0{i + 1}</span>
                </div>

                {/* Progress Indicator (Background) */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100`}
                  style={{ width: `${level}%` }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer Metadata for the Blueprint */}
        <div className="mt-8 flex justify-between font-mono text-[9px] tracking-[0.2em] opacity-40 uppercase">
          <span>Core System Architecture</span>
          <span>EST. 2025</span>
        </div>
      </div>

      {/* SECTION 2: SOFT SKILLS (Maintains balance) */}
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
                  <p className={`text-lg font-light leading-relaxed ${subTextColor} group-hover:opacity-100`}>{skill.description}</p>
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
