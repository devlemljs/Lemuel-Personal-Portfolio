import React, { useState, useEffect } from 'react';
import MainView from './components/MainView';
import ProjectDetailView from './components/ProjectDetailView';
import BlogView from './components/BlogView';
import Footer from './components/Footer';
import { Project } from './types';
import { StarsBackground } from './components/ui/StarsBackground';
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isViewingBlogs, setIsViewingBlogs] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeToggle = (e?: React.MouseEvent | MouseEvent) => {
    if (isAnimating) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nextThemeIsDark = !isDarkMode;

    if (prefersReducedMotion || !(document as any).startViewTransition) {
      setIsDarkMode(nextThemeIsDark);
      return;
    }

    setIsAnimating(true);
    
    // Get mouse coordinates for the circle center
    const x = e ? (e as any).clientX : window.innerWidth / 2;
    const y = e ? (e as any).clientY : window.innerHeight / 2;

    // Set CSS variables for the transition center
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);

    const transition = (document as any).startViewTransition(() => {
      // Set theme state within the transition callback
      setIsDarkMode(nextThemeIsDark);
    });

    transition.finished.finally(() => {
      setIsAnimating(false);
    });
  };

  const effectiveDarkMode = (selectedProject !== null || isViewingBlogs) ? true : isDarkMode;

  // Apply theme class to html element
  useEffect(() => {
    if (effectiveDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [effectiveDarkMode]);

  // Prevent background scrolling when a modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Scroll to top and reset modal state when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsModalOpen(false);
  }, [selectedProject, isViewingBlogs]);

  // Determine if footer should be hidden
  const hideFooter = selectedProject !== null || isModalOpen || isViewingBlogs;

  const toggleTheme = handleThemeToggle;

  return (
    <div className={`min-h-screen relative flex flex-col ${effectiveDarkMode ? 'text-white' : 'text-[#0a0a0a]'}`}>
      {/* Base Background Layer */}
      <div className={`fixed inset-0 z-0 ${effectiveDarkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`} />
      
      {/* Stars Background - Global Viewport Coverage for Projects and Blogs */}
      {(selectedProject || isViewingBlogs) && (
        <StarsBackground count={400} className="fixed inset-0 z-[2]" />
      )}

      {/* Background Sheen Gradient */}
      <div className={`fixed inset-0 pointer-events-none opacity-40 z-[3] ${effectiveDarkMode ? 'block' : 'hidden'}`}>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="flex-grow container mx-auto px-4 pt-12 pb-32 max-w-5xl z-10 relative">
        {selectedProject ? (
          <ProjectDetailView 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
            isDarkMode={effectiveDarkMode}
          />
        ) : isViewingBlogs ? (
          <BlogView 
            onBack={() => setIsViewingBlogs(false)} 
            isDarkMode={effectiveDarkMode}
          />
        ) : (
          <MainView 
            onSelectProject={setSelectedProject} 
            onViewBlogs={() => setIsViewingBlogs(true)}
            onModalToggle={setIsModalOpen}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            isAnimating={isAnimating}
          />
        )}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
