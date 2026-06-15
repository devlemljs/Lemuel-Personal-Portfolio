
import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  MessageSquare, 
  Code2, 
  Wrench, 
  Target, 
  Folder 
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import Tag from './Tag';
import Gallery from './Gallery';
import FeedbackForm from './FeedbackForm';
import HeartCounter from './HeartCounter';
import { EXPERIENCES, PROJECTS } from '../constants';
import { Project } from '../types';

import AchievementCard from './AchievementCard';

const cv = 'files/Lemuel_Jan_Suico_Resume.png';
const cvpdf = 'files/Lemuel_Jan_Suico_Resume.pdf'

const profile = 'images/Lemuel_Profile.webp';
const profile2 = 'images/Lemuel_Shy.webp';

interface MainViewProps {
  onSelectProject: (project: Project) => void;
  onViewBlogs: () => void;
  onModalToggle?: (isOpen: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: (e?: React.MouseEvent) => void;
  isAnimating: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const MainView: React.FC<MainViewProps> = ({ onSelectProject, onViewBlogs, onModalToggle, isDarkMode, toggleTheme, isAnimating }) => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    if (onModalToggle) {
      onModalToggle(isCVModalOpen || isFeedbackModalOpen);
    }
  }, [isCVModalOpen, isFeedbackModalOpen, onModalToggle]);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  const placeholderResumeUrl = cv;
  const pdfResumeUrl = cvpdf;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start relative"
      >
        {/* Mobile Theme Toggle - Positioned top-right relative to section header */}
        <div className={`absolute top-[-30px] -right-2 md:hidden z-20 ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}>
          <button 
            onClick={(e) => toggleTheme(e)}
            disabled={isAnimating}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none shadow-lg ${isDarkMode ? 'bg-purple-600' : 'bg-gray-300'}`}
          >
            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 transform flex items-center justify-center ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}>
              {isDarkMode ? (
                <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 100 2V2a1 1 0 100-2zm0 18v2a1 1 0 100 2v-2a1 1 0 100-2zM5.99 4.58a1 1 0 111.41 1.41L6.34 7.05a1 1 0 11-1.41-1.41l1.06-1.06zm12.02 12.02a1 1 0 111.41 1.41l-1.06 1.06a1 1 0 11-1.41-1.41l1.06-1.06zM5.99 19.41a1 1 0 01-1.41-1.41l1.06-1.06a1 1 0 111.41 1.41l-1.06 1.06zm12.02-12.02a1 1 0 01-1.41-1.41l1.06-1.06a1 1 0 111.41 1.41l-1.06 1.06z" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Left side: Profile picture */}
        <div className="shrink-0 relative">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border-2 border-white/10 glossy-glow shadow-xl mx-auto md:mx-0 relative group">
            <img 
              src= {profile}
              alt="Lemuel Jan Suico" 
              className="w-full h-full object-cover transition-opacity duration-75 group-hover:opacity-0"
            />
            <img 
              src= {profile2}
              alt="Lemuel Jan Suico Hover" 
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-75 group-hover:opacity-100"
            />
          </div>
        </div>
        
        {/* Right side: Name, Role, Contact, Buttons */}
        <div className="flex-grow text-center md:text-left flex flex-col justify-start py-1 relative w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-start mb-1 gap-4 w-full">
            <h1 className={`text-3xl md:text-5xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#0a0a0a]'}`}>Lemuel Jan Suico</h1>
            
            {/* HeartCounter - Align to bottom on desktop, centered below name on mobile */}
            <div className="flex justify-center md:justify-start relative top-[-12px] md:top-0 md:translate-y-[1px]">
              <HeartCounter isDarkMode={isDarkMode} />
            </div>

            {/* Theme Toggle - Desktop Only */}
            <div className={`hidden md:flex flex-grow items-end justify-end pb-3 ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}>
              <button 
                onClick={(e) => toggleTheme(e)}
                disabled={isAnimating}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${isDarkMode ? 'bg-purple-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 transform flex items-center justify-center ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}>
                  {isDarkMode ? (
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 100 2V2a1 1 0 100-2zm0 18v2a1 1 0 100 2v-2a1 1 0 100-2zM5.99 4.58a1 1 0 111.41 1.41L6.34 7.05a1 1 0 11-1.41-1.41l1.06-1.06zm12.02 12.02a1 1 0 111.41 1.41l-1.06 1.06a1 1 0 11-1.41-1.41l1.06-1.06zM5.99 19.41a1 1 0 01-1.41-1.41l1.06-1.06a1 1 0 111.41 1.41l-1.06 1.06zm12.02-12.02a1 1 0 01-1.41-1.41l1.06-1.06a1 1 0 111.41 1.41l-1.06 1.06z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
          
          <p className={`font-medium text-sm md:text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            Buisness Intelligence | Web Development | AI Specialist
          </p>
          
          {/* Contact info line with Icons */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start items-center mb-6">
            <div className="flex items-center gap-2 text-[11px] md:text-[13px] text-purple-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>Pasig City, Philippines</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] md:text-[13px] text-purple-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>09942326765</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] md:text-[13px] text-purple-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>lemuelsuico.ljs@gmail.com</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button 
              onClick={() => setIsCVModalOpen(true)}
              className={`px-8 py-2.5 rounded-md font-bold text-xs glossy-glow transition-all transform hover:-translate-y-1.5 flex items-center justify-center border ${isDarkMode ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white/90' : 'bg-black text-white border-black shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:bg-black/90'}`}
            >
              View CV
            </button>
            <a href="mailto:lemuelsuico.ljs@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://mail.google.com/mail/?view=cm&to=lemuelsuico.ljs@gmail.com',
                '_blank'
              );
            }}
            className={`px-8 py-2.5 border rounded-md font-bold text-xs transition-all transform hover:-translate-y-1.5 flex items-center justify-center ${isDarkMode ? 'bg-black text-white border-white hover:bg-white/10' : 'bg-white text-black border-black hover:bg-black/10'}`}
            >
              Email Me
            </a>
            <button 
              onClick={onViewBlogs}
              className={`px-8 py-2.5 border rounded-md font-bold text-xs transition-all transform hover:-translate-y-1.5 flex items-center justify-center ${isDarkMode ? 'bg-purple-600 text-white border-purple-400 hover:bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]' : 'bg-purple-600 text-white border-purple-700 hover:bg-purple-700 shadow-[0_0_15px_rgba(147,51,234,0.3)]'}`}
            >
              Read my Blog
            </button>
          </div>
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-white/5 pt-8 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col space-y-4 md:space-y-[15px]">
          <div>
            <SectionHeader title="About" icon={<User className="w-4 h-4" />} />
            <div className={`p-4 rounded-xl border glossy-glow transition-colors duration-300 ${isDarkMode ? 'bg-[#111111] border-white/5' : 'bg-gray-50 border-black/5'}`}>
              <p className={`text-[13px] leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate about blending business insights with cutting-edge technology to solve real-world problems. Experienced in building responsive web applications and data-driven solutions using modern tools. Always eager to learn, collaborate, and deliver impactful results in fast-paced environments. Constantly exploring new ways to leverage AI and data to optimize operations and create value.
              </p>
            </div>
          </div>

          <div>
            <SectionHeader title="Experience" icon={<Briefcase className="w-4 h-4" />} />
            <div className="space-y-3">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className={`p-4 rounded-xl border glossy-glow transition-colors duration-300 ${isDarkMode ? 'bg-[#111111] border-white/5' : 'bg-gray-50 border-black/5'}`}>
                  <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}, <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{exp.company}</span></h3>
                  <p className="text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-2">{exp.period}</p>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((res, i) => (
                      <li key={i} className={`text-[12px] flex items-start gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="text-purple-500 mt-1.5 block w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Education" icon={<GraduationCap className="w-4 h-4" />} />
            <div className={`p-4 rounded-xl border glossy-glow transition-colors duration-300 ${isDarkMode ? 'bg-[#111111] border-white/5' : 'bg-gray-50 border-black/5'}`}>
              <h3 className={`font-bold text-sm flex items-start gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <span className="text-purple-500 mt-1.5 block w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                Bachelor of Science in Entrepreneurship
              </h3>
              <p className={`text-[12px] ml-3.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rizal Technological University (2024-2026)</p>
            </div>
          </div>

          <div>
            <SectionHeader title="Achievements" icon={<Award className="w-4 h-4" />} />
            <AchievementCard />
          </div>

          {/* Feedback Section */}
          <div className="mt-auto pt-4">
            <SectionHeader title="Feedback / Recommendation" icon={<MessageSquare className="w-4 h-4" />} />
            <FeedbackForm isDarkMode={isDarkMode} onModalToggle={setIsFeedbackModalOpen} />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4 md:space-y-[15px]">
          <div>
            <SectionHeader title="Tech Stack" icon={<Code2 className="w-4 h-4" />} />
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Python", "SQL", "TypeScript", "React", "Vite"].map((s, idx) => (
                <Tag key={s} label={s} index={idx} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Tools" icon={<Wrench className="w-4 h-4" />} />
            <div className="flex flex-wrap gap-2">
              {["VSCode", "GitHub", "OpenAI", "Gemini", "Claude", "Firebase", "Make.com", "Zapier", "MS Teams", "MS Excel", "Power BI", "MS Word", "Canva", "Google Workspace", "Google Colab"].map((t, idx) => (
                <Tag key={t} label={t} index={idx} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Business and Tech Focus" icon={<Target className="w-4 h-4" />} />
            <div className="flex flex-wrap gap-2">
              {[
                "Data Analysis", "Digital Marketing", "Technopreneurship", "Web Development", "Programming", 
                "Business Analytics", "Entrepreneurship", "Strategy & Planning", "Business Intelligence", "Market Analysis"
              ].map((s, idx) => (
                <Tag key={s} label={s} index={idx} />
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4">
            <SectionHeader title="Projects" icon={<Folder className="w-4 h-4" />} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECTS.map(p => (
                <ProjectCard key={p.id} project={p} onViewDetails={onSelectProject} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Gallery */}
      <Gallery />

      {/* CV Modal Overlay */}
      {isCVModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsCVModalOpen(false)}
          ></div>
          
          <div className={`relative w-full max-w-4xl h-[85vh] border rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 ${isDarkMode ? 'bg-[#0f0f0f] border-white/10' : 'bg-white border-black/10'}`}>
            {/* Header */}
            <div className={`px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center border-b shrink-0 ${isDarkMode ? 'bg-[#141414] border-white/5' : 'bg-gray-100 border-black/5'}`}>
              <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                <button 
                  onClick={() => setIsCVModalOpen(false)}
                  className={`flex items-center gap-2 transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  <span className="inline">Back</span>
                </button>
                <div className={`h-4 w-px hidden sm:block ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}></div>
                <h3 className={`font-bold text-[10px] sm:text-xs uppercase tracking-widest truncate max-w-[150px] sm:max-w-none ${isDarkMode ? 'text-white' : 'text-black'}`}>Curriculum Vitae</h3>
                
                {/* Mobile Download Icon (visible only on mobile) */}
                <a 
                  href={pdfResumeUrl}
                  download="Lemuel_Jan_Suico_CV.pdf"
                  className="sm:hidden bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg transition-all shadow-lg shadow-purple-900/20"
                  title="Download CV"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </a>
              </div>
              
              <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-3 border-t sm:border-t-0 pt-2 sm:pt-0 border-white/5">
                {/* Zoom Controls */}
                <div className={`flex items-center rounded-lg border p-0.5 sm:p-1 ${isDarkMode ? 'bg-black/40 border-white/5' : 'bg-white border-black/5'}`}>
                  <button 
                    onClick={handleZoomOut}
                    className={`p-2 sm:p-1.5 transition-colors ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`}
                    title="Zoom Out"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                    </svg>
                  </button>
                  <span className={`text-[9px] sm:text-[10px] font-mono w-8 sm:w-10 text-center select-none ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button 
                    onClick={handleZoomIn}
                    className={`p-2 sm:p-1.5 transition-colors ${isDarkMode ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`}
                    title="Zoom In"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={handleResetZoom}
                    className={`p-2 sm:p-1.5 transition-colors border-l ml-0.5 sm:ml-1 ${isDarkMode ? 'text-white/60 hover:text-white border-white/5' : 'text-black/60 hover:text-black border-black/5'}`}
                    title="Reset Zoom"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </button>
                </div>

                {/* Desktop Download Button (hidden on mobile) */}
                <a 
                  href={pdfResumeUrl}
                  download="Lemuel_Jan_Suico_CV.pdf"
                  className="hidden sm:flex bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest items-center gap-2 transition-all shadow-lg shadow-purple-900/20"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            {/* Content Area */}
            <div className={`flex-grow overflow-auto p-4 sm:p-8 flex justify-center items-start custom-scrollbar ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-gray-200'}`}>
              <div 
                className="bg-white shadow-2xl transition-transform duration-200 origin-top overflow-hidden rounded-sm"
                style={{ 
                  transform: `scale(${zoomLevel})`,
                  width: '100%',
                  maxWidth: '850px',
                }}
              >
                <img 
                  src={placeholderResumeUrl}
                  className="w-full h-auto"
                  alt="Resume Preview"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainView;
