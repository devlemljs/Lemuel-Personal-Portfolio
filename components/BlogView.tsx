import React, { useState } from 'react';
import { BLOGS } from '../constants';
import { Blog } from '../types';

const astro = 'images/astronaut_no_bg.png';

interface BlogViewProps {
  onBack: () => void;
  isDarkMode: boolean;
}

const BlogView: React.FC<BlogViewProps> = ({ onBack, isDarkMode }) => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  if (selectedBlog) {
    return (
      <div className="animate-in fade-in slide-in-from-right-4 duration-500 relative min-h-screen">
        <img 
          src={astro}
          alt="Astronaut placeholder" 
          className="fixed top-0 right-2 md:top-10 md:right-4 w-32 md:w-64 opacity-80 animate-drift pointer-events-none drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] z-0"
        />
        <div className="relative z-10">
          <button 
            onClick={() => setSelectedBlog(null)}
            className={`flex items-center gap-1 transition-colors text-xs md:text-sm mb-8 group ${isDarkMode ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <span className="transition-transform group-hover:-translate-x-1 font-bold">← Back</span>
            <span className="hidden md:inline ml-1">to Blog List</span>
          </button>

          <article className="max-w-3xl mx-auto">
            <div className="mb-8">
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${
                selectedBlog.category === 'Professional' ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                {selectedBlog.category}
              </span>
              <h1 className={`text-3xl md:text-5xl font-bold mb-4 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedBlog.title}</h1>
              <p className="text-gray-500 text-sm font-medium">{selectedBlog.date}</p>
            </div>

            <div className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
              <p className={`text-lg leading-relaxed mb-6 italic border-l-4 border-purple-500 pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedBlog.preview}
              </p>
              <div className={`text-base leading-relaxed space-y-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {selectedBlog.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-left-4 duration-500 relative min-h-screen">
      <img 
        src={astro}
        alt="Astronaut placeholder" 
        className="fixed top-0 right-2 md:right-4 w-32 md:w-48 opacity-80 animate-drift pointer-events-none drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] z-0"
      />
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onBack}
            className={`flex items-center gap-1 transition-colors text-xs md:text-sm group ${isDarkMode ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <span className="transition-transform group-hover:-translate-x-1 font-bold">← Back</span>
            <span className="hidden md:inline ml-1">to Portfolio</span>
          </button>
          <h2 className={`text-2xl font-bold tracking-tight italic ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Lemuel's Blog</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {BLOGS.map((blog) => (
            <div 
              key={blog.id} 
              onClick={() => setSelectedBlog(blog)}
              className={`p-6 md:p-8 rounded-2xl border glossy-glow hover:border-purple-500/30 transition-all cursor-pointer group relative overflow-hidden ${isDarkMode ? 'bg-[#111111]/80 border-white/5' : 'bg-gray-50/80 border-black/5'}`}
            >
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit ${
                    blog.category === 'Professional' ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {blog.category}
                  </span>
                  <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>{blog.date}</span>
                </div>
                
                <h3 className={`text-xl md:text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {blog.title}
                </h3>
                
                <p className={`text-sm md:text-base leading-relaxed mb-6 line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {blog.preview}
                </p>
                
                <div className="flex items-center gap-2 text-purple-500 hover:text-purple-400 font-bold text-xs uppercase tracking-widest transition-all group/btn">
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogView;