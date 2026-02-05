
import React, { useRef, useEffect, useState, useMemo } from 'react';
// Removed unused GeminiService import
import { TRANSLATIONS } from './constants';
import { CVContent, Language } from './types';
import SkillVisualizer from './components/SkillVisualizer';

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [options]);

  return [elementRef, isVisible] as const;
};

type Theme = 'dark' | 'light';

const PageSection = React.forwardRef<HTMLElement, {
  children: React.ReactNode;
  id?: string;
  className?: string;
  pageNum?: string;
  theme?: Theme;
}>(
  ({ children, id, className, pageNum, theme = 'dark' }, ref) => {
    const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const themeClasses = theme === 'dark'
      ? 'bg-black text-white border-white/5'
      : 'bg-white text-black border-black/5';

    const folioClasses = theme === 'dark' ? 'text-white' : 'text-black';

    return (
      <section
        id={id}
        ref={(node) => {
          if (node) {
            (elementRef.current as any) = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              (ref as any).current = node;
            }
          }
        }}
        className={`relative min-h-screen w-full py-32 px-8 md:px-24 flex flex-col justify-center border-b transition-colors duration-700 ${themeClasses} ${className} ${isVisible ? 'is-visible' : ''}`}
      >
        {pageNum && (
          <div className={`absolute bottom-12 right-12 folio hidden md:block opacity-60 ${folioClasses}`}>
            PÁG.{pageNum}
          </div>
        )}
        {children}
      </section>
    );
  }
);

const ImpactBackground: React.FC<{ progress: number; theme?: Theme }> = ({ progress, theme = 'dark' }) => {
  const squares = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: 40 + Math.random() * 100,
      ratio: 0.8 + Math.random() * 1.2,
      delay: Math.random() * 0.3,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
    }));
  }, []);

  const borderColor = theme === 'dark' ? 'border-white' : 'border-black';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
      {squares.map((sq) => {
        const p = Math.max(0, progress - sq.delay);
        const x = 50 + (sq.targetX - 50) * p;
        const y = 50 + (sq.targetY - 50) * p;
        const rotation = p * 90;
        const scale = 0.5 + p * 1.5;

        return (
          <div
            key={sq.id}
            className={`absolute border ${borderColor}`}
            style={{
              width: `${sq.size}px`,
              height: `${sq.size * sq.ratio}px`,
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
              opacity: Math.min(1, p * 4),
            }}
          />
        );
      })}
    </div>
  );
};

const App: React.FC = () => {
  const [langName, setLangName] = useState('ES');
  const [content, setContent] = useState<CVContent>(TRANSLATIONS.es);
  const [impactScrollProgress, setImpactScrollProgress] = useState(0);
  const [heroProgress, setHeroProgress] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const impactRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollState = useRef({
    current: 0,
    target: 0,
    lerp: 0.1,
  });

  const handleLanguageChange = (lang: Language) => {
    if (TRANSLATIONS[lang]) {
      setContent(TRANSLATIONS[lang]);
      setLangName(lang.toUpperCase());
    }
  };


  useEffect(() => {
    let frameId: number;
    const update = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const winHeight = window.innerHeight;
        const totalTravel = rect.height - winHeight;
        const progress = totalTravel > 0 ? Math.max(0, Math.min(-rect.top / totalTravel, 1)) : 0;

        scrollState.current.target = progress;
        scrollState.current.current += (scrollState.current.target - scrollState.current.current) * scrollState.current.lerp;
        setHeroProgress(scrollState.current.current);

        // Sync video time to scroll progress
        if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
          // Inverse playback: progress 0 -> end, progress 1 -> start
          const videoTime = videoRef.current.duration * (1 - scrollState.current.current);

          // Smart Seeking: Only update if not currently seeking to prevent stutter
          if (!videoRef.current.seeking) {
            videoRef.current.currentTime = videoTime;
          }
        }
      }

      if (impactRef.current) {
        const rect = impactRef.current.getBoundingClientRect();
        const winHeight = window.innerHeight;
        let impactP = (winHeight - rect.top) / (winHeight + rect.height);
        impactP = Math.max(0, Math.min(impactP, 1));
        setImpactScrollProgress(impactP);
      }
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const t = content;

  return (
    <div className="relative w-full overflow-x-hidden bg-black text-white">



      <aside className="fixed left-0 top-0 h-full w-16 border-r border-white/5 z-50 bg-black hidden lg:flex flex-col items-center justify-between py-12">
        <div className="folio vertical-text opacity-40 text-white font-bold">ARCHIVO 2025</div>
        <div className="folio vertical-text text-white font-bold">{t.info.name.toUpperCase()}</div>
      </aside>

      <main className="lg:pl-16 relative bg-black">

        <section id="hero" ref={heroRef} className="relative min-h-[150vh] w-full flex flex-col is-visible bg-black">
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
            {/* Contenedor del Video Hero Local - Fixed synchronization and visual filters */}
            <div className="absolute inset-0 pointer-events-none grayscale brightness-75 contrast-125" style={{
              transform: `translateY(${heroProgress * 50}px)`,
              opacity: 1 - heroProgress * 0.5
            }}>
              <img
                src="/hero-fallback.jpg"
                alt="Hero fallback"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoReady ? 'opacity-0' : 'opacity-100'}`}
              />
              <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onCanPlay={() => setIsVideoReady(true)}
                onPlaying={() => {
                  // Hack for mobile: Force pause immediately after autoplay starts 
                  // to allow scroll-based scrubbing to take over.
                  if (videoRef.current) videoRef.current.pause();
                }}
              >
                <source src="video-hero.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
              </video>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          <div className="absolute inset-0 z-10 w-full h-full flex flex-col p-8 md:p-20 pointer-events-none">
            <div className="reveal-box max-w-lg pointer-events-auto">
              <div className="folio mb-4 text-white opacity-95 tracking-[0.3em] font-bold">{t.ui.langQuestion}</div>
              <div className="flex gap-4 items-center mt-2 flex-wrap">
                {['es', 'ca', 'en', 'fr', 'it', 'ru', 'zh'].map((lang, index, array) => (
                  <React.Fragment key={lang}>
                    <button
                      onClick={() => handleLanguageChange(lang)}
                      className={`text-2xl font-serif italic transition-all hover:text-white ${langName === lang.toUpperCase()
                        ? 'text-white font-bold scale-110'
                        : 'text-white/50 hover:scale-105'
                        }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                    {index < array.length - 1 && (
                      <span className="text-white/30 text-2xl font-serif italic">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="reveal-box my-12 mt-auto">
              <h1 className="font-serif text-white uppercase tracking-tighter leading-[0.82] italic">
                <span className="text-[4vw] md:text-[3.2vw] font-bold block">
                  {t.info.name.split(' ')[0]}
                </span>
                <span className="text-[4vw] md:text-[3.2vw] font-bold block mt-[10px]">
                  {t.info.name.split(' ').slice(1).join(' ') || ''}<span className="inline-block w-[0.1em] h-[0.1em] bg-white rounded-full ml-2" />
                </span>
              </h1>
              <div className="h-px w-24 bg-white my-10 opacity-70" />
              <div className="max-w-4xl">
                <p className="font-serif italic text-4xl md:text-5xl text-white leading-tight mb-16 opacity-100">
                  "{t.ui.quote}"
                </p>
                {t.ui.strategy && (
                  <div className="mt-12 max-w-2xl border-l border-white/30 pl-8 pointer-events-auto">
                    <h3 className="folio mb-4 text-white opacity-80 tracking-[0.2em] font-bold">{t.ui.strategy.title}</h3>
                    <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-8">
                      {t.ui.strategy.text}
                    </p>
                    <p className="font-serif italic text-2xl md:text-3xl text-white">
                      "{t.ui.strategy.quote}"
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-white/30">
              <div className="reveal-box flex gap-12">
                <div>
                  <div className="folio mb-2 text-white opacity-70">{t.ui.status}</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white opacity-95">{t.ui.available}</div>
                </div>
                <div>
                  <div className="folio mb-2 text-white opacity-70">{t.ui.location}</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white opacity-95">{t.info.contact.location}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02 - IMPACT */}
        <PageSection id="impact" ref={impactRef} pageNum="02" theme="light" className="overflow-hidden">
          <ImpactBackground progress={impactScrollProgress} theme="light" />
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="mb-24 reveal-box">
              <span className="folio mb-2 text-black/60 font-bold">{t.ui.impact}</span>
              <h2 className="font-serif text-4xl md:text-7xl font-bold text-black mt-4 italic break-words">{t.ui.impact}</h2>
              <div className="rule mt-12 bg-black opacity-20" />
            </div>
            <div className="editorial-grid">
              {t.impactProjects && t.impactProjects.map((proj: any, i: number) => (
                <div key={proj.id} className="col-span-12 md:col-span-6 mb-24 reveal-box">
                  <div className="p-0 border-l border-black/30 pl-12 h-full flex flex-col justify-between group">
                    <div>
                      <span className="font-serif italic text-3xl text-black/40 block mb-8">0{i + 1}</span>
                      <h3 className="font-serif text-3xl md:text-5xl font-bold text-black mb-10 leading-tight break-words">{proj.title}</h3>
                      <p className="text-xl md:text-2xl leading-relaxed text-black/70 font-light group-hover:text-black transition-colors">{proj.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        {/* SECTION 03 - ARCHIVE */}
        <PageSection id="archive" pageNum="03" theme="dark">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-24 reveal-box">
              <span className="folio mb-2 text-white/60 font-bold">{t.ui.archive}</span>
              <h2 className="font-serif text-4xl md:text-7xl font-bold text-white mt-4 italic break-words">{t.ui.legacy}</h2>
              <div className="rule mt-12 bg-white opacity-20" />
            </div>
            <div className="editorial-grid">
              {t.experiences.map((exp: any, i: number) => (
                <div key={exp.id} className="col-span-12 md:col-span-6 mb-24 reveal-box group">
                  <div className="flex gap-10 items-start">
                    <span className="font-serif italic text-5xl text-white/20 group-hover:text-white transition-colors duration-500">0{i + 1}</span>
                    <div className="space-y-8 flex-1">
                      <div>
                        <div className="folio mb-4 opacity-60 text-white font-bold">{exp.period}</div>
                        <h3 className="font-serif text-2xl md:text-4xl font-bold leading-tight mb-2 text-white">{exp.role}</h3>
                        <div className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">{exp.company}</div>
                      </div>
                      <p className="text-2xl leading-relaxed text-white/70 font-light group-hover:text-white transition-colors">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        {/* SECTION 05 - FOUNDATION (LOS CIMIENTOS) */}
        <PageSection id="foundation" pageNum="05" theme="dark">
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-24 reveal-box">
              <span className="folio mb-2 text-white/60 font-bold">{t.ui.pedigree}</span>
              <h2 className="font-serif text-4xl md:text-7xl font-bold text-white mt-4 italic break-words">{t.ui.foundation}</h2>
              <div className="rule mt-12 bg-white opacity-20" />
            </div>
            <div className="space-y-24">
              {t.education.map((edu: any) => (
                <div key={edu.id} className="reveal-box border-b border-white/10 pb-20 flex flex-col md:flex-row gap-12 md:gap-24 items-baseline group">
                  <div className="w-32 folio opacity-60 text-white font-bold">{edu.period}</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-4xl font-bold mb-4 text-white">{edu.degree}</h3>
                    <div className="text-sm font-bold uppercase tracking-widest text-white/60 mb-8">{edu.institution}</div>
                    <p className="text-2xl text-white/70 leading-relaxed font-light italic group-hover:text-white transition-colors">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        {/* SECTION 06 - EXPERTISE (EL NÚCLEO) */}
        <PageSection id="expertise" pageNum="06" theme="light">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-24 reveal-box">
              <span className="folio mb-2 text-black/60 font-bold">{t.ui.coreSubtitle}</span>
              <h2 className="font-serif text-4xl md:text-7xl font-bold text-black mt-4 italic break-words">
                {t.ui.coreTitle.split('.')[0]} <span className="text-black">.</span>
              </h2>
              <div className="rule mt-12 bg-black opacity-20" />
            </div>
            <div className="reveal-box">
              <SkillVisualizer content={content} theme="light" />
            </div>
          </div>
        </PageSection>

        <PageSection id="connection" pageNum="07" theme="dark" className="text-center">
          <div className="max-w-4xl mx-auto reveal-box">
            <div className="folio mb-16 opacity-60 text-white font-bold">{t.ui.contact}</div>
            <h2 className="font-serif text-[10vw] md:text-[7vw] italic leading-[0.85] tracking-tighter mb-24 text-white">
              {t.ui.craft}
            </h2>
            <div className="flex flex-col items-center gap-16">
              <a href={`mailto:${t.info.contact.email}`} className="text-2xl md:text-7xl font-light tracking-tight hover:text-white hover:border-white transition-all border-b border-white/30 pb-6 text-white/90 break-all text-center">
                {t.info.contact.email}
              </a>
              {t.info.contact.phone && (
                <a href={`tel:${t.info.contact.phone.replace(/\s+/g, '')}`} className="text-xl md:text-4xl font-light tracking-tight hover:text-white hover:border-white transition-all border-b border-white/30 pb-4 text-white/90">
                  {t.info.contact.phone}
                </a>
              )}
              <div className="h-24 w-px bg-white opacity-20" />
              <div className="folio opacity-70 tracking-[1em] text-white">CALVIÀ — MALLORCA</div>
            </div>
          </div>
          <footer className="mt-48 folio opacity-40 text-white font-bold pb-12">
            {t.info.name} — {t.ui.rights} — 2025
          </footer>
        </PageSection>

      </main>

      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
    </div>
  );
};

export default App;
