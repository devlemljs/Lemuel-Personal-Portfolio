
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';
import SectionHeader from './SectionHeader';

const Gallery: React.FC = () => {
  // Duplicate images for infinite loop
  const duplicatedImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <div className="w-full overflow-hidden py-6 md:py-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Gallery" icon={<ImageIcon className="w-4 h-4" />} />
      </div>
      <div className="relative group">
        <div className="animate-scroll gap-3 md:gap-4 flex">
          {duplicatedImages.map((src, index) => (
            <div 
              key={index} 
              className="w-48 h-64 md:w-64 md:h-80 rounded-xl overflow-hidden border glossy-glow shrink-0 transition-all duration-300 dark:border-white/10 border-black/10"
            >
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover hover:scale-110 transition-all duration-700" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
