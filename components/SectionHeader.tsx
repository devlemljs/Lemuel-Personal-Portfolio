
import React from 'react';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => {
  return (
    <h2 className="text-sm font-bold uppercase tracking-widest mb-4 border-b pb-1 transition-colors duration-300 dark:text-white/50 dark:border-white/5 text-gray-900/50 border-black/5 flex items-center gap-2">
      {icon && <span className="shrink-0">{icon}</span>}
      {title}
    </h2>
  );
};

export default SectionHeader;
