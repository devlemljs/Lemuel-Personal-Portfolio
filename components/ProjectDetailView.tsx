
import React, { useMemo } from 'react';
import { Project } from '../types';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
  isDarkMode: boolean;
}

const astro = 'images/astronaut_no_bg.png';

const Icons = {
  React: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 21.933c-3.13 0-5.836-1.558-7.391-3.933 1.555-2.375 4.261-3.933 7.391-3.933s5.836 1.558 7.391 3.933C17.836 20.375 15.13 21.933 12 21.933z" />
      <path d="M12 2.067c3.13 0 5.836 1.558 7.391 3.933-1.555 2.375-4.261 3.933-7.391 3.933s-5.836-1.558-7.391-3.933C6.164 3.625 8.87 2.067 12 2.067z" />
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 0 1 5 5v2h-5V7H5V5a3 3 0 0 1 3-3h4z" />
      <path d="M12 22a5 5 0 0 0-5-5v-2h5v2h7v2a3 3 0 0 0-3 3h-4z" />
    </svg>
  ),
  JS: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h18v18H3V3z" />
      <path d="M11 11h4" /><path d="M13 11v6" />
    </svg>
  ),
  TS: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h18v18H3V3z" />
      <path d="M7 11h4" /><path d="M9 11v6" />
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 2l1.5 17L12 22l5.5-3L19 2H5z" />
      <path d="M12 15.5l-2.5-1l-.1-1.5h-2l.2 2.5 4.4 1.8 4.4-1.8.2-3.2H12" />
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 2l1.5 17L12 22l5.5-3L19 2H5z" />
      <path d="M12 11.5h3.5l.2-2.5h-3.7V6.5H16l-.3 3h-3.7" />
    </svg>
  ),
  SQL: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 5v7c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
      <path d="M3 12v7c0 1.66 4 3 9 3s9-1.34 9-3v-7" />
    </svg>
  ),
  PHP: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="10" ry="6" />
      <path d="M8 10v4" /><path d="M12 10v4" /><path d="M16 10v4" />
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 15c0 3 3 4 6 4s6-1 6-4" />
      <path d="M9 19c0 2 2 3 3 3s3-1 3-3" />
      <path d="M12 2c0 4-2 6-2 9s2 4 2 4" />
      <path d="M15 4c0 3-2 5-2 8s2 3 2 3" />
    </svg>
  ),
  Swift: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14c4 0 8-4 8-10 0 6 6 10 10 10-4 0-8 4-8 10 0-6-6-10-10-10z" />
    </svg>
  ),
  Rust: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10" /><path d="M7 12h10" />
      <path d="M8.5 8.5l7 7" /><path d="M15.5 8.5l-7 7" />
    </svg>
  ),
  Terminal: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
};

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack, isDarkMode }) => {
  const iconKeys = useMemo(() => Object.keys(Icons) as (keyof typeof Icons)[], []);

  const backgroundElements = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      iconKey: iconKeys[i % iconKeys.length],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${25 + Math.random() * 30}s`,
      delay: `${Math.random() * -30}s`,
      size: `${20 + Math.random() * 20}px`,
      opacity: 0.03 + Math.random() * 0.04,
    }));
  }, [iconKeys]);

  return (
    <div className="relative min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 overflow-hidden">
      <img 
        src= {astro}
        alt="Astronaut floating in space" 
        className="fixed top-0 right-2 md:top-10 md:right-4 w-32 md:w-64 opacity-80 animate-drift pointer-events-none drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] z-0"
      />
      <div className="relative z-10 p-6 md:p-10">
        <button 
          onClick={onBack}
          className={`mb-6 flex items-center gap-1 transition-colors text-xs md:text-sm group ${isDarkMode ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
        >
          <span className="transition-transform group-hover:-translate-x-1 font-bold">← Back</span>
          <span className="hidden md:inline ml-1">to Portfolio</span>
        </button>

        <div className="space-y-6 relative z-10">
          <h1 className={`text-3xl md:text-5xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h1>
          
          <div className="max-w-2xl space-y-4">
            <p className={`text-sm md:text-[15px] leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.fullDescription}
            </p>
          </div>

          {/* Responsive Mosaic Gallery */}
          {project.id === 'internshipfy' ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12">
              {project.images.slice(0, 3).map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative p-2 md:p-3 bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[3rem] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_15px_35px_rgba(0,0,0,0.6)] border-[4px] border-[#1a1a1a] group/img ${project.link ? 'cursor-pointer' : ''}`}
                  onClick={() => project.link && window.open(project.link, '_blank')}
                >
                  <div className="absolute top-4 md:top-5 left-1/2 -translate-x-1/2 w-[30%] max-w-[120px] h-5 md:h-6 bg-black rounded-full z-20 pointer-events-none flex items-center justify-end px-2 sm:px-3 shadow-[0_1px_2px_rgba(255,255,255,0.05)] border border-[#111]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] border border-[#222] shadow-[inset_0_0_2px_rgba(0,0,0,1)]"></div>
                  </div>
                  <div className="relative aspect-[9/16] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-black z-0 border border-[#111]">
                    <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" alt={`Phone Detail ${idx + 1}`} />
                    {project.link && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          View Project
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : ['swingbase', 'portfolio-website', 'data-analysis'].includes(project.id) ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 mt-16 px-2 sm:px-6">
              {project.images.slice(0, 4).map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative flex flex-col items-center justify-start pt-8 z-10 group/img ${project.link ? 'cursor-pointer' : ''}`}
                  onClick={() => project.link && window.open(project.link, '_blank')}
                >
                  <div className="relative w-full p-1.5 md:p-2 bg-[#000000] rounded-t-xl md:rounded-t-2xl shadow-[0_-5px_25px_rgba(0,0,0,0.6)] border-x-2 border-t-2 border-[#1a1a1a] flex flex-col z-0">
                    <div className="relative aspect-[16/10] bg-black overflow-hidden rounded-md md:rounded-lg z-0 border border-[#111]">
                      {/* MacBook Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20%] max-w-[100px] h-3 md:h-4 bg-[#000000] rounded-b-md md:rounded-b-lg z-20 flex items-center justify-center pointer-events-none">
                        <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(0,0,0,1)_80%)] shadow-sm"></div>
                      </div>
                      <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" alt={`Laptop Detail ${idx + 1}`} />
                      {project.link && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold flex items-center gap-2">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                            View Project
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="relative w-[112%] md:w-[116%] h-2 md:h-3 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-b-lg md:rounded-b-xl shadow-[0_20px_35px_rgba(0,0,0,0.7)] flex justify-center z-10 border-t border-[#2a2a2a]">
                    {/* Base indent / Thumb notch */}
                    <div className="w-1/6 md:w-24 h-1 md:h-1.5 bg-[#000000] rounded-b-md shadow-[inset_0_1px_2px_rgba(0,0,0,1)]"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:h-[500px] mt-8">
              <div 
                className={`relative col-span-2 row-span-1 md:row-span-2 rounded-xl overflow-hidden border glossy-glow group/img ${isDarkMode ? 'border-white/10 bg-black/40' : 'border-black/10 bg-gray-100'} ${project.link ? 'cursor-pointer' : ''}`}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <img src={project.images[0]} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" alt="Detail 1" />
                {project.link && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold flex items-center gap-2">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      View Project
                    </div>
                  </div>
                )}
              </div>
              <div 
                className={`relative col-span-2 md:col-span-2 row-span-1 rounded-xl overflow-hidden border glossy-glow group/img ${isDarkMode ? 'border-white/10 bg-black/40' : 'border-black/10 bg-gray-100'} ${project.link ? 'cursor-pointer' : ''}`}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <img src={project.images[1]} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" alt="Detail 2" />
                {project.link && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold flex items-center gap-2">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      View Project
                    </div>
                  </div>
                )}
              </div>
              <div 
                className={`relative col-span-1 row-span-1 rounded-xl overflow-hidden border glossy-glow group/img ${isDarkMode ? 'border-white/10 bg-black/40' : 'border-black/10 bg-gray-100'} ${project.link ? 'cursor-pointer' : ''}`}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <img src={project.images[2]} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" alt="Detail 3" />
                {project.link && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold flex items-center gap-2">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      View Project
                    </div>
                  </div>
                )}
              </div>
              <div 
                className={`relative col-span-1 row-span-1 rounded-xl overflow-hidden border glossy-glow group/img ${isDarkMode ? 'border-white/10 bg-black/40' : 'border-black/10 bg-gray-100'} ${project.link ? 'cursor-pointer' : ''}`}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <img src={project.images[3]} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" alt="Detail 4" />
                {project.link && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold flex items-center gap-2">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      View Project
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className={`py-12 border-t flex flex-col items-center ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}>
            <p className={`text-[9px] md:text-[10px] italic text-center max-w-lg leading-tight uppercase tracking-widest ${isDarkMode ? 'text-white/30' : 'text-gray-400'}`}>
              This project is my original work and was independently created for portfolio purposes. 
              It is not copied, plagiarized, or based on tutorial content. 
              Unauthorized use or reproduction is not permitted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;
