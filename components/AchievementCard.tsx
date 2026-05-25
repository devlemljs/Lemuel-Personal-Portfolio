import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, BarChart3, FileBadge } from 'lucide-react';

const AchievementCard: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const achievements = [
        {
            icon: <Trophy className="w-10 h-10 text-yellow-400" />,
            label: "ACADEMIC AWARD",
            labelColor: "text-yellow-400/80",
            title: "Consistent Awardee Student",
            subtitle: "Recognized across all levels of academic pursuit"
        },
        {
            icon: <BarChart3 className="w-10 h-10 text-emerald-400" />,
            label: "PERFORMANCE",
            labelColor: "text-emerald-400/80",
            title: "3-Quarter Top Performer Agent (2025)",
            subtitle: "Excellence in service and metrics"
        },
        {
            icon: <FileBadge className="w-10 h-10 text-blue-400" />,
            label: "CERTIFICATION",
            labelColor: "text-blue-400/80",
            title: "Diploma: MS Excel (All Levels)",
            subtitle: "Advanced proficiency & automation"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % achievements.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [achievements.length]);

    return (
        <div 
            className="relative w-full rounded-[16px] overflow-hidden p-6 md:p-7 min-h-[200px] md:min-h-[213px] flex flex-col justify-start shadow-xl select-none"
            style={{ 
                background: 'linear-gradient(135deg, #4E1380 0%, #3a0e60 100%)',
            }}
        >
            {/* Upper Right to Lower Left Highlight */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background: 'linear-gradient(225deg, rgba(255,255,255,0.4) 0%, transparent 50%)'
                }}
            />
            
            {/* Lower Left to Upper Right Highlight - Significantly increased visibility */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.5) 0%, transparent 60%)'
                }}
            />

            {/* Grid pattern overlay - Increased visibility */}
            <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{ 
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '25px 25px'
                }}
            />

            <div className="relative z-10 flex flex-col items-start text-left h-full">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentIndex}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-start"
                    >
                        <div className="mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                            {achievements[currentIndex].icon}
                        </div>
                        <span className={`text-[12px] font-black tracking-[0.2em] uppercase mb-1.5 ${achievements[currentIndex].labelColor}`}>
                            {achievements[currentIndex].label}
                        </span>
                        <h3 className="text-[20px] md:text-[22px] font-bold text-white leading-tight tracking-tight">
                            {achievements[currentIndex].title}
                        </h3>
                        {achievements[currentIndex].subtitle && (
                            <p className="text-[14px] text-white/50 font-medium mt-2 italic tracking-wide">
                                {achievements[currentIndex].subtitle}
                            </p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dynamic Pagination dots */}
            <div className="absolute bottom-6 right-8 z-10 flex gap-2">
                {achievements.map((_, i) => (
                    <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            i === currentIndex ? 'bg-white shadow-[0_0_12px_rgba(255,255,255,1)] scale-125' : 'bg-white/20'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AchievementCard;
