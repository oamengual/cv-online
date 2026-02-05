
import React, { useMemo } from 'react';
import { SKILLS_DATA } from '../constants';
import { CVContent } from '../types';

interface SkillVisualizerProps {
  content: CVContent;
  theme?: 'dark' | 'light';
}

const SkillVisualizer: React.FC<SkillVisualizerProps> = ({ content, theme = 'dark' }) => {
  const t = content;
  const isDark = theme === 'dark';
  const mainColor = isDark ? 'white' : 'black';

  const radarPoints = useMemo(() => {
    const totalSkills = t.skills.length;
    const centerX = 150;
    const centerY = 150;
    const radius = 90;
    const labelRadius = 115;

    return t.skills.map((skill: any, i: number) => {
      const level = (SKILLS_DATA[i]?.level || 80) / 100;
      const angle = (Math.PI * 2 * i) / totalSkills - Math.PI / 2;

      let textAnchor = "middle";
      if (Math.cos(angle) > 0.2) textAnchor = "start";
      if (Math.cos(angle) < -0.2) textAnchor = "end";

      return {
        x: centerX + radius * level * Math.cos(angle),
        y: centerY + radius * level * Math.sin(angle),
        labelX: centerX + labelRadius * Math.cos(angle),
        labelY: centerY + labelRadius * Math.sin(angle),
        name: skill.name,
        category: skill.category,
        anchor: textAnchor,
        angle: angle
      };
    });
  }, [t.skills]);

  const radarPolygon = radarPoints.map((p: any) => `${p.x},${p.y}`).join(' ');

  return (
    <div className={`flex flex-col gap-48 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl relative">
          <div className={`folio mb-16 text-center opacity-60 font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {t.ui.proficiency}
          </div>

          <div className="relative aspect-square md:aspect-video flex justify-center items-center w-full">
            <svg viewBox="-20 -20 340 340" className="w-full max-w-full md:max-w-[650px] h-auto overflow-visible">
              {[0.25, 0.5, 0.75, 1].map((r, i) => (
                <circle key={i} cx="150" cy="150" r={90 * r} fill="none" stroke={mainColor} strokeOpacity={0.15} strokeWidth="0.5" />
              ))}

              {radarPoints.map((p: any, i: number) => (
                <line key={i} x1="150" y1="150" x2={150 + 90 * Math.cos(p.angle)} y2={150 + 90 * Math.sin(p.angle)} stroke={mainColor} strokeOpacity="0.1" strokeWidth="0.5" />
              ))}

              <polygon points={radarPolygon} fill={mainColor} fillOpacity="0.15" stroke={mainColor} strokeWidth="1.5" strokeOpacity="0.9" className="transition-all duration-1000 ease-in-out" />

              {radarPoints.map((p: any, i: number) => (
                <g key={i} className="group/point">
                  <circle cx={p.x} cy={p.y} r="2.5" fill={mainColor} />
                  <text x={p.labelX} y={p.labelY} textAnchor={p.anchor} className={`font-mono text-[7px] uppercase tracking-widest font-bold ${isDark ? 'fill-white' : 'fill-black'}`} style={{ dominantBaseline: 'middle' }}>{p.name}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

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
