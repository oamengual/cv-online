
import React, { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CVContent } from '../types';
import { SKILLS_DATA } from '../constants';

interface SkillVisualizerProps {
  content: CVContent;
  theme?: 'dark' | 'light';
}

const SkillVisualizer: React.FC<SkillVisualizerProps> = ({ content, theme = 'dark' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = content;
  const isDark = theme === 'dark';

  // Generate random positions and properties for the "cloud"
  const nodes = useMemo(() => {
    return t.skills.map((skill: any, i: number) => {
      const level = (SKILLS_DATA[i]?.level || 80) / 100;
      // Deterministic randomness based on index
      const rng = (seed: number) => {
        const x = Math.sin(seed + i) * 10000;
        return x - Math.floor(x);
      };

      return {
        ...skill,
        level,
        x: rng(1) * 80 + 10, // 10% to 90%
        y: rng(2) * 80 + 10, // 10% to 90%
        size: 1 + level * 2, // Scale factor
        speed: 0.5 + rng(3) * 0.5,
        delay: rng(4) * 2,
        font: rng(5) > 0.5 ? 'font-serif italic' : 'font-sans font-bold uppercase tracking-widest',
        rotation: (rng(6) - 0.5) * 20, // -10deg to 10deg
      };
    });
  }, [t.skills]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = gsap.utils.toArray('.skill-node');

    // Floating animation
    elements.forEach((el: any, i) => {
      const node = nodes[i];

      // Random floating movement
      gsap.to(el, {
        y: `+=${30 * node.speed}`,
        x: `+=${20 * node.speed}`,
        rotation: `+=${node.rotation}`,
        duration: 3 + node.speed * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: node.delay,
      });

      // Mouse interaction (Magnetic effect)
      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });

      const mouseMove = (e: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate center of element
        const elRect = el.getBoundingClientRect();
        const elX = elRect.left - rect.left + elRect.width / 2;
        const elY = elRect.top - rect.top + elRect.height / 2;

        const dist = Math.sqrt(Math.pow(mouseX - elX, 2) + Math.pow(mouseY - elY, 2));
        const maxDist = 300;

        if (dist < maxDist) {
          const power = (maxDist - dist) / maxDist;
          const moveX = (mouseX - elX) * power * 0.3; // Move towards mouse
          const moveY = (mouseY - elY) * power * 0.3;

          gsap.to(el, {
            x: moveX,
            y: moveY,
            overwrite: 'auto',
            duration: 0.5
          });
        } else {
          gsap.to(el, {
            x: 0,
            y: 0,
            overwrite: 'auto',
            duration: 1.5
          });
        }
      };

      // Add and remove listeners handled by useGSAP cleanup slightly differently, 
      // but for simplicity in this setup we'll attach to container
      containerRef.current?.addEventListener('mousemove', mouseMove);
    });

  }, { scope: containerRef, dependencies: [nodes] });

  return (
    <div className={`flex flex-col gap-32 transition-colors duration-700 ${isDark ? 'text-white' : 'text-black'}`}>

      {/* SECTION 1: KINETIC CORE */}
      <div className="flex flex-col items-center">
        <div className={`folio mb-8 text-center opacity-60 font-bold ${isDark ? 'text-white' : 'text-black'}`}>
          {t.ui.proficiency}
        </div>

        <div
          ref={containerRef}
          className="relative w-full h-[600px] md:h-[700px] overflow-hidden rounded-sm border border-black/5 bg-black/[0.02]"
        >
          {/* Center Gravity Point Visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-black/10 rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-black/10 rotate-45" />

          {nodes.map((node: any, i: number) => (
            <div
              key={i}
              className={`skill-node absolute cursor-default select-none flex flex-col items-center justify-center text-center p-4 transition-colors duration-500 hover:z-50 group`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
            >
              <span
                className={`block ${node.font} ${isDark ? 'text-white' : 'text-black'} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                style={{
                  fontSize: `${Math.max(1, node.size)}rem`
                }}
              >
                {node.name}
              </span>
              <span className={`block text-[10px] tracking-widest font-bold uppercase opacity-0 group-hover:opacity-60 transition-opacity duration-300 translate-y-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {Math.round(node.level * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: SOFT SKILLS */}
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
