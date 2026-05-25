
import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="fixed z-50 transition-all duration-300 opacity-100 bottom-6 left-6 right-6 md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-max">
      <div 
        className="backdrop-blur-2xl border rounded-2xl px-6 py-3 md:px-10 md:py-5 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 glossy-glow shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 dark:bg-black/70 dark:border-white/10 bg-white/70 border-black/10 lg:w-[699px] lg:h-[60.3px]"
      >
        <div className="flex items-center gap-5 md:gap-6">
          <a href="https://www.linkedin.com/in/lemuel-suico/" target="_blank" rel="noopener noreferrer" className="transition-all transform hover:scale-110 dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://www.facebook.com/lemuel.suico.96652" target="_blank" rel="noopener noreferrer" className="transition-all transform hover:scale-110 dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/lemm.ljs/?hl=en" target="_blank" rel="noopener noreferrer" className="transition-all transform hover:scale-110 dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black">
            <span className="sr-only">Instagram</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.261-2.911.558-.79.306-1.458.716-2.126 1.383-.667.667-1.077 1.336-1.383 2.126-.297.763-.501 1.634-.558 2.911-.058 1.28-.072 1.688-.072 4.947s.014 1.688.072 4.947c.057 1.277.261 2.148.558 2.911.306.79.716 1.458 1.383 2.126.667.667 1.336 1.077 2.126 1.383.763.297 1.634.501 2.911.558 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.261 2.911-.558.79-.306 1.458-.716 2.126-1.383.667-.667 1.077-1.336 1.383-2.126.297-.763.501-1.634.558-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.261-2.148-.558-2.911-.306-.79-.716-1.458-1.383-2.126-.667-.667-1.336-1.077-2.126-1.383-.763-.297-1.634-.501-2.911-.558-1.28-.058-1.688-.072-4.947-.072z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://github.com/devlemljs" target="_blank" rel="noopener noreferrer" className="transition-all transform hover:scale-110 dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <span className="hidden md:block select-none text-xl font-light dark:text-white/20 text-black/20">|</span>
        <span 
          className="text-[10px] md:text-base font-bold whitespace-nowrap tracking-tight dark:text-white/40 text-black/40 lg:ml-[34px] lg:pl-[16px]"
        >
          © Lemuel Suico. All rights reserved.
        </span>
      </div>
    </footer>
  );
};


export default Footer;
