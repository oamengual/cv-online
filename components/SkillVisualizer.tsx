
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

  // Mobile: Planetary Alignment (Vertical List with Circles)
  const MobileView = () => (
    <div className="md:hidden w-full flex flex-col items-center gap-12 py-12 relative overflow-visible">

      {/* Decorative Axis Line */}
      <div className={`absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 ${axisColor} border-l border-dashed opacity-50`} />

      {t.skills.map((skill: any, i: number) => {
        const level = SKILLS_DATA[i]?.level || 80;
        // Size dynamic based on level: 100px to 130px
        const size = 110 + (level - 80) * 1.5;

        return (
          <div key={i} className="relative z-10 my-4">
            <div
              className={`rounded-full flex flex-col items-center justify-center text-center p-4 shadow-[0_0_30px_rgba(0,0,0,0.1)] backdrop-blur-md border ${borderColor} transition-transform duration-500 hover:scale-110`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: isDark ? 'rgba(20,20,20,0.9)' : 'rgba(255,255,255,0.9)'
              }}
            >
              <div className="flex flex-col items-center justify-center h-full w-full">
                <h4 className={`text-sm font-serif font-bold italic leading-tight ${isDark ? 'text-white' : 'text-black'} break-words w-full px-2`}>
                  {skill.name}
                </h4>
                <span className="text-[9px] font-mono tracking-widest mt-2 opacity-60">{level}%</span>
              </div>

              {/* Orbit Ring visual for mobile (decorative) */}
              <div className={`absolute -inset-4 rounded-full border ${borderColor} opacity-30 animate-pulse`} style={{ animationDuration: '4s' }} />
            </div>
          </div>
        )
      })}
    </div>
  );

  // Desktop: Solar System (Orbits with Text Inside)
  const DesktopView = () => {
    const totalSkills = t.skills.length;

    // Generate orbits
    const orbits = useMemo(() => {
      return t.skills.map((skill: any, i: number) => {
        const level = SKILLS_DATA[i]?.level || 80;

        // Radius Logic:
        // Needs enough gap for the circles. Circles are ~100-140px.
        // Gap should be at least 70px (radius difference).
        // Start further out to clear core.
        const radius = 200 + (i * 75);

        // Duration: Outer planets move slower
        const duration = 60 + (i * 10);

        // Start Angle: Stagger them to ensure they don't overlap visually at start.
        // Using logic to spread them out. 
        // We can pick specific "quadrants" or just a fixed step.
        const startAngle = (i * 130) % 360;

        return { ...skill, radius, duration, startAngle, level };
      });
    }, [t.skills]);

    return (
      <div className="hidden md:flex justify-center items-center w-full h-[1000px] relative overflow-hidden my-12">
        {/* Central Sun/Core */}
        <div className={`absolute z-20 flex flex-col items-center justify-center w-48 h-48 rounded-full border border-dashed ${borderColor} backdrop-blur-md bg-white/5 shadow-[0_0_60px_rgba(255,255,255,0.05)]`}>
          <span className={`font-serif italic text-3xl ${isDark ? 'text-white' : 'text-black'}`}>The Core</span>
          <span className="font-mono text-[9px] tracking-[0.3em] mt-3 opacity-50 uppercase">System Integrity</span>
        </div>

        {/* Orbits Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {orbits.map((orbit: any, i: number) => (
            <div
              key={i}
              className={`absolute rounded-full border ${borderColor} opacity-20`}
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
              }}
            />
          ))}
        </div>

        {/* Planets */}
        {orbits.map((orbit: any, i: number) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 flex items-center justify-center"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
              marginLeft: -orbit.radius,
              marginTop: -orbit.radius,
              animation: `spin ${orbit.duration}s linear infinite`,
              transform: `rotate(${orbit.startAngle}deg)`
            }}
          >
            {/* The Planet Container - Positioned on the ring */}
            <div
              className="absolute -top-[0px] left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                animation: `spin ${orbit.duration}s linear infinite reverse`,
              }}
            >
              {/* Planet Body (Circle with Text) */}
              <div
                className={`rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-500 hover:scale-110 hover:z-50 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] border ${borderColor} backdrop-blur-md`}
                style={{
                  width: `${110 + (orbit.level - 80) * 1.5}px`, // Size 110px - 140px
                  height: `${110 + (orbit.level - 80) * 1.5}px`,
                  backgroundColor: isDark ? 'rgba(10,10,10,0.9)' : 'rgba(255,255,255,0.95)'
                }}
              >
                <h4 className={`text-sm md:text-base font-serif font-bold italic leading-tight ${isDark ? 'text-white' : 'text-black'} break-words w-full px-1`}>
                  {orbit.name}
                </h4>
                <span className="text-[9px] font-mono tracking-widest mt-2 opacity-60 block">{orbit.level}%</span>
              </div>
            </div>
          </div>
        ))}

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
