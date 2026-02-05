
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

  return (
    <div className={`flex flex-col gap-32 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>

      {/* SECTION 1: BRUTALIST TYPOGRAPHY (Knowledge Weight) */}
      <div className="flex flex-col items-start w-full">
        <div className={`folio mb-24 opacity-60 font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          {t.ui.proficiency}
        </div>

        <div className="w-full flex flex-wrap items-baseline leading-[0.8] mix-blend-difference">
          {t.skills.map((skill: any, i: number) => {
            const level = SKILLS_DATA[i]?.level || 80;
            // Calculate visual weight based on level
            // 90-100: "Hero" sizes
            // 80-90: "Headline" sizes
            // <80: "Body" sizes

            let fontSizeClass = "text-4xl md:text-5xl";
            let fontWeightClass = "font-light";
            let opacityClass = "opacity-70";
            let marginClass = "mr-8 mb-4";

            if (level >= 95) {
              fontSizeClass = "text-[15vw] md:text-[8vw]"; // Massive
              fontWeightClass = "font-black tracking-tighter";
              opacityClass = "opacity-100";
              marginClass = "w-full mb-0 leading-[0.8]"; // Force full width line break often
            } else if (level >= 90) {
              fontSizeClass = "text-[10vw] md:text-[6vw]";
              fontWeightClass = "font-bold tracking-tight";
              opacityClass = "opacity-90";
              marginClass = "mr-12 mb-2";
            } else if (level >= 80) {
              fontSizeClass = "text-[8vw] md:text-[4vw]";
              fontWeightClass = "font-medium italic";
              opacityClass = "opacity-80";
              marginClass = "mr-8 mb-4";
            }

            return (
              <div key={i} className={`relative group ${marginClass} transition-all duration-500 hover:opacity-100`}>
                <span className={`${fontSizeClass} ${fontWeightClass} ${opacityClass} font-serif ${isDark ? 'text-white' : 'text-black'} block transition-transform duration-300 group-hover:scale-[1.02] origin-left`}>
                  {skill.name}
                  <span className="text-sm md:text-lg font-sans font-bold tracking-widest align-top ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-4 right-0">
                    {level}%
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: SOFT SKILLS (Kept as is for balance) */}
      <div className={`border-t pt-32 ${isDark ? 'border-white/20' : 'border-black/20'}`}>
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
