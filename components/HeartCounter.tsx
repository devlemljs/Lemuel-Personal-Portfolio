
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { db } from '../lib/firebase';
import { doc, onSnapshot, updateDoc, increment, setDoc, getDoc } from 'firebase/firestore';

interface HeartCounterProps {
  isDarkMode: boolean;
}

const HeartCounter: React.FC<HeartCounterProps> = ({ isDarkMode }) => {
  const [likes, setLikes] = useState(0);
  const [animations, setAnimations] = useState<{ id: string; x: number; y: number }[]>([]);

  useEffect(() => {
    // Reference to the global likes counter document
    const likesRef = doc(db, 'counters', 'global');

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(likesRef, (docSnap) => {
      if (docSnap.exists()) {
        setLikes(docSnap.data().likes || 0);
      } else {
        // Initialize the document if it doesn't exist
        setDoc(likesRef, { likes: 0 }, { merge: true });
      }
    }, (error) => {
      console.error("Firestore subscription error:", error);
    });

    return () => unsubscribe();
  }, []);

  const handleTap = () => {
    // 1. Add animation bubble immediately
    const id = `${Date.now()}-${Math.random()}`;
    // Increase random spread for more chaotic spam look
    const x = (Math.random() - 0.5) * 80;
    const y = -40 - Math.random() * 40;
    
    setAnimations(prev => [...prev, { id, x, y }]);
    
    // 2. Optimistic update for UI feel (instant number change)
    setLikes(prev => prev + 1);

    // 3. Database sync (fire and forget to stay responsive)
    const likesRef = doc(db, 'counters', 'global');
    updateDoc(likesRef, {
      likes: increment(1)
    }).catch(err => {
      console.error("Firestore sync error:", err.message);
      if (err.code === 'not-found') {
        setDoc(likesRef, { likes: 1 }, { merge: true });
      }
    });
    
    // 4. Remove animation after it finishes (using a slightly shorter duration for snappier feel)
    setTimeout(() => {
      setAnimations(prev => prev.filter(a => a.id !== id));
    }, 800);
  };

  return (
    <div className="flex items-center gap-1.5 py-1 px-1 group select-none">
      <div className="relative">
        <motion.button
          whileTap={{ scale: 1.2 }}
          onClick={handleTap}
          className="relative transition-all duration-300 flex items-center justify-center focus:outline-none"
        >
          <Heart 
            className={`w-[23px] h-[23px] transition-all duration-300 ${
              animations.length > 0 
                ? 'text-purple-500 fill-purple-500 drop-shadow-[0_0_12px_rgba(168,85,247,1)]' 
                : isDarkMode ? 'text-white/90 hover:text-white' : 'text-black/80 hover:text-black'
            }`}
          />
        </motion.button>

        {/* Floating Hearts Animation */}
        <AnimatePresence>
          {animations.map(anim => (
            <motion.div
              key={anim.id}
              initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
              animate={{ opacity: 0, scale: 2, x: anim.x, y: anim.y }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
            >
              <Heart className="w-[23px] h-[23px] text-purple-500 fill-purple-500" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <span 
        className={`text-[16px] md:text-[17px] font-bold font-mono transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}
        style={{ 
          textShadow: animations.length > 0 
            ? '0 0 18px rgba(168,85,247,1), 0 0 8px rgba(168,85,247,0.8)' 
            : '0 0 12px rgba(168,85,247,0.8)' 
        }}
      >
        {likes.toLocaleString()}
      </span>
    </div>
  );
};

export default HeartCounter;
