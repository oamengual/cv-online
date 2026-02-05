
import React from 'react';
import { SKILLS_DATA } from '../constants';
import { CVContent } from '../types';

interface SkillVisualizerProps {
  content: CVContent;
  theme?: 'dark' | 'light';
}

const SkillVisualizer: React.FC<SkillVisualizerProps> = ({ content, theme = 'dark' }) => {
  const t = content;
  const isDark = theme === 'dark';
  const borderColor = isDark ? 'border-white/20' : 'border-black/20';
  const barBg = isDark ? 'bg-white/10' : 'bg-black/5';
  const barFill = isDark ? 'bg-white' : 'bg-black';

  return (
    <div className={`flex flex-col gap-32 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>

      {/* SECTION 1: HARD SKILLS (Replaces Radar Chart) */}
      <div className="flex flex-col">
        <div className={`folio mb-16 text-center opacity-60 font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          {t.ui.proficiency}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {t.skills.map((skill: any, i: number) => {
            const level = SKILLS_DATA[i]?.level || 80;
            return (
              <div key={i} className="group flex flex-col gap-4">
                <div className="flex justify-between items-baseline">
                  <h4 className={`text-2xl md:text-3xl font-serif font-bold italic ${isDark ? 'text-white' : 'text-black'}`}>
                    {skill.name}
                  </h4>
                  <span className="folio text-xs opacity-50 font-bold tracking-widest">
                    0{i + 1}
                  </span>
                </div>

                <div className={`w-full h-1 ${barBg} relative overflow-hidden`}>
                  <div
                    className={`absolute top-0 left-0 h-full ${barFill} transition-all duration-1000 ease-out`}
                    style={{ width: `${level}%` }}
                  />
                </div>

                <div className="flex justify-between text-xs opacity-50 font-bold uppercase tracking-wider">
                  <span>{skill.category}</span>
                  <span>{level}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: SOFT SKILLS (Unchanged, just ensuring consistent styling) */}
      <div className={`border-t pt-32 ${borderColor}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-12 mb-16">
            <div className={`folio mb-2 opacity-60 font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              {t.ui.humanLogic}
            </div>
            <h3 className={`font-serif text-6xl md:text-7xl font-bold italic mt-4 ${isDark ? 'text-white' : 'text-black'}`}>
              Factores Humanos.
            </h3>
            <div className={`rule mt-12 ${isDark ? 'bg-white' : 'bg-black'} opacity-20`} />
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.softSkills.map((skill: any, i: number) => (
              <div key={i} className={`group relative border p-10 transition-all duration-500 overflow-hidden ${isDark ? 'border-white/10 hover:border-white/40' : 'border-black/10 hover:border-black/40'}`}>
                <span className={`absolute -right-4 -bottom-8 text-[8rem] font-serif italic pointer-events-none transition-colors ${isDark ? 'text-white/5 group-hover:text-white/10' : 'text-black/5 group-hover:text-black/10'}`}>0{i + 1}</span>
                <div className="relative z-10">
                  <h4 className={`text-3xl font-serif font-bold leading-tight mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{skill.name}</h4>
                  <p className={`text-lg font-light leading-relaxed ${isDark ? 'text-white/60 group-hover:text-white/90' : 'text-black/60 group-hover:text-black/90'}`}>{skill.description}</p>
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
