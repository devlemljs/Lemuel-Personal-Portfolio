
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div 
      className="group relative border rounded-xl overflow-hidden glossy-glow flex flex-col h-full transition-all duration-300 dark:bg-[#111111] dark:border-white/5 bg-gray-50 border-black/5"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-base mb-1 transition-colors duration-300 dark:text-white text-gray-900">{project.title}</h3>
          <p className="text-[13px] leading-snug transition-colors duration-300 dark:text-gray-400 text-gray-600">{project.shortDescription}</p>
        </div>
        <button 
          onClick={() => onViewDetails(project)}
          className="mt-4 w-full py-2 border rounded-md text-[12px] font-medium transition-all duration-300 uppercase tracking-wider dark:bg-[#181818] dark:border-white/10 dark:text-white hover:bg-purple-600 dark:hover:bg-purple-600 bg-white border-black/10 text-gray-900 hover:text-white"
        >
          View Details ↗
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
