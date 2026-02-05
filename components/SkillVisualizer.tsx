
import React, { useMemo } from 'react';
import { CVContent } from '../types';
import { SKILLS_DATA } from '../constants';

interface SkillVisualizerProps {
  content: CVContent;
  theme?: 'dark' | 'light';
}

const SkillVisualizer: React.FC<SkillVisualizerProps> = ({ content, theme = 'dark' }) => {
  const t = content;
  const isDark = theme === 'dark';
  const mainColor = isDark ? 'white' : 'black';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';
  const axisColor = isDark ? 'bg-white/20' : 'bg-black/20';

  // Desktop Orbits Configuration
  const totalSkills = t.skills.length;

  // Mobile: Planetary Alignment (Vertical List)
  const MobileView = () => (
    <div className="md:hidden w-full pl-8 relative border-l border-dashed border-white/20 ml-4 py-8 space-y-12">
      {t.skills.map((skill: any, i: number) => {
        const level = SKILLS_DATA[i]?.level || 80;
        return (
          <div key={i} className="relative group">
            {/* Planet Node on Axis */}
            <div className={`absolute -left-[37px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${isDark ? 'bg-white' : 'bg-black'} flex items-center justify-center ring-4 ring-black`}>
              <div className="w-1 h-1 bg-black rounded-full animate-pulse" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-widest opacity-50 uppercase mb-1">Orbit {i + 1} • {level}%</span>
              <h4 className={`text-2xl font-serif italic ${isDark ? 'text-white' : 'text-black'}`}>{skill.name}</h4>
              <p className="text-xs opacity-60 max-w-[200px]">{skill.category}</p>
            </div>
          </div>
        )
      })}
    </div>
  );

  // Desktop: Solar System (Orbits)
  const DesktopView = () => {
    // Generate orbits
    const orbits = useMemo(() => {
      return t.skills.map((skill: any, i: number) => {
        const level = SKILLS_DATA[i]?.level || 80;
        // Distribute radii logarithmically or linearly
        const radius = 120 + (i * 35);
        const duration = 20 + (i * 5); // Slower outer orbits
        const startAngle = (i * (360 / totalSkills));

        return { ...skill, radius, duration, startAngle, level };
      });
    }, [t.skills]);

    return (
      <div className="hidden md:flex justify-center items-center w-full h-[800px] relative overflow-hidden">
        {/* Central Sun/Core */}
        <div className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 rounded-full border border-dashed border-white/30 backdrop-blur-sm bg-white/5">
          <span className="font-serif italic text-xl">The Core</span>
        </div>

        {/* Orbits */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          {orbits.map((orbit: any, i: number) => (
            <circle
              key={i}
              cx="50%"
              cy="50%"
              r={orbit.radius}
              fill="none"
              stroke={mainColor}
              strokeOpacity={0.1}
              strokeDasharray="4 4"
            />
          ))}
        </svg>

        {/* Planets */}
        {orbits.map((orbit: any, i: number) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 flex items-center"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
              marginLeft: -orbit.radius,
              marginTop: -orbit.radius,
              animation: `spin ${orbit.duration}s linear infinite`,
              animationDelay: `-${i * 2}s`
            }}
          >
            {/* The Planet & Label Container - Counter-rotates to keep text upright */}
            <div
              className="absolute -top-[6px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer"
              style={{
                animation: `spin ${orbit.duration}s linear infinite reverse`,
                animationDelay: `-${i * 2}s`
              }}
            >
              {/* Planet Body */}
              <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-white' : 'bg-black'} shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-transform duration-300 group-hover:scale-150`} />

              {/* Label */}
              <div className="flex flex-col items-center opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/50 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                <span className="font-serif text-sm">{orbit.name}</span>
                <span className="text-[8px] font-mono tracking-widest">{orbit.level}%</span>
              </div>
            </div>
          </div>
        ))}

        {/* CSS for Spin */}
        <style>{`
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
         `}</style>
      </div>
    );
  };

  return (
    <div className={`flex flex-col gap-32 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>

      {/* SECTION 1: THE SOLAR SYSTEM */}
      <div className="flex flex-col w-full">
        <div className={`folio mb-12 text-center opacity-60 font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          {t.ui.proficiency}
        </div>

        {/* Render Views */}
        <MobileView />
        <DesktopView />

      </div>

      {/* SECTION 2: SOFT SKILLS */}
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
