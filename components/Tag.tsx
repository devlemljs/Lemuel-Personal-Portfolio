
import React from 'react';

interface TagProps {
  label: string;
  index?: number;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <div 
      className="px-3 py-1 border rounded-md text-[13px] glossy-glow transition-all duration-300 dark:bg-[#141414] dark:border-white/10 dark:text-gray-300 dark:hover:text-white bg-gray-100 border-black/10 text-gray-700 hover:text-black cursor-default hover:-translate-y-0.5"
    >
      {label}
    </div>
  );
};

export default Tag;
