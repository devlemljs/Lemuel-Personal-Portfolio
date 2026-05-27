import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  color: string;
  twinkleSpeed: number;
}

interface StarsBackgroundProps {
  count?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({ 
  count = 350,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const constellationPositions = useRef({
    taurus: { x: 0.2, y: 0.4 },
    auriga: { x: 0.15, y: 0.15 },
    caelum: { x: 0.7, y: 0.75 }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const colors = ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ffffff', '#6366f1', '#4f46e5', '#fef9c3', '#ec4899'];

    const orionStars = [
      { name: 'Betelgeuse', rx: 50, ry: -100, size: 2.5, color: '#ffb366' },
      { name: 'Rigel', rx: -40, ry: 110, size: 3, color: '#99ccff' },
      { name: 'Bellatrix', rx: -50, ry: -90, size: 1.8, color: '#ffffff' },
      { name: 'Saiph', rx: 60, ry: 100, size: 1.8, color: '#ffffff' },
      { name: 'Alnitak', rx: 5, ry: 5, size: 1.5, color: '#ffffff' },
      { name: 'Alnilam', rx: 0, ry: 0, size: 1.5, color: '#ffffff' },
      { name: 'Mintaka', rx: -5, ry: -5, size: 1.5, color: '#ffffff' },
    ];

    const taurusStars = [
      { rx: 0, ry: 0, size: 3.2, color: '#ffbd59' }, // Aldebaran
      { rx: -60, ry: 60, size: 1.5, color: '#ffffff' }, // Gamma Tauri
      { rx: -35, ry: 35, size: 1.3, color: '#ffffff' }, // Delta Tauri
      { rx: -45, ry: -45, size: 1.6, color: '#ffffff' }, // Epsilon Tauri
      { rx: 140, ry: -40, size: 1.8, color: '#ffffff' }, // Zeta Tauri (Horn tip)
      { rx: 100, ry: -160, size: 1.8, color: '#ffffff' }, // Elnath (Horn tip)
      { rx: -100, ry: -10, size: 2.2, color: '#ffffff' }, // Pleiades (represented as a cluster point nearby)
    ];

    const aurigaStars = [
      { rx: 0, ry: -80, size: 3.2, color: '#fef9c3' }, // Capella
      { rx: 60, ry: -40, size: 2.0, color: '#ffffff' }, // Menkalinan
      { rx: 80, ry: 50, size: 1.8, color: '#ffffff' }, // Mahasim
      { rx: 30, ry: 100, size: 2.2, color: '#ffffff' }, // Elnath (sharing area)
      { rx: -50, ry: 70, size: 2.0, color: '#ffffff' }, // Hassaleh
    ];

    const caelumStars = [
      { rx: 0, ry: 0, size: 2.2, color: '#ffffff' },
      { rx: 15, ry: 40, size: 1.8, color: '#ffffff' },
      { rx: 10, ry: 85, size: 2.0, color: '#ffffff' },
    ];

    const ursaMajorStars = [
      { rx: 0, ry: 0, size: 2.2, color: '#ffffff' }, // Dubhe
      { rx: 0, ry: 35, size: 2.0, color: '#ffffff' }, // Merak
      { rx: -35, ry: 45, size: 2.0, color: '#ffffff' }, // Phecda
      { rx: -45, ry: 10, size: 1.8, color: '#ffffff' }, // Megrez
      { rx: -80, ry: 5, size: 1.8, color: '#ffffff' }, // Alioth
      { rx: -110, ry: 20, size: 2.0, color: '#ffffff' }, // Mizar
      { rx: -140, ry: 40, size: 1.8, color: '#ffffff' }, // Alkaid
    ];

    const initStars = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (width === 0 || height === 0) return;

      // Randomize positions based on requested regions
      constellationPositions.current = {
        taurus: { x: 0.1 + Math.random() * 0.2, y: 0.65 + Math.random() * 0.15 }, // Lower Left
        auriga: { x: 0.15 + Math.random() * 0.2, y: 0.15 + Math.random() * 0.15 }, // Top-ish Left
        caelum: { x: 0.75 + Math.random() * 0.1, y: 0.70 + Math.random() * 0.2 } // Lower Right
      };
      
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      stars = Array.from({ length: count }, () => {
        const isBright = Math.random() > 0.95; 
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          size: isBright ? Math.random() * 1.5 + 0.8 : Math.random() * 0.6 + 0.2,
          vx: (Math.random() - 0.5) * 0.08, 
          vy: (Math.random() - 0.5) * 0.08,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkleSpeed: (Math.random() - 0.5) * 0.025
        };
      });
    };

    const drawConstellation = (
      stars: { rx: number; ry: number; size: number; color: string }[], 
      centerX: number, 
      centerY: number, 
      scale: number,
      lines: [number, number][]
    ) => {
      ctx.save();
      
      // Draw faint lines
      ctx.strokeStyle = '#ffffff';
      ctx.globalAlpha = 0.04;
      ctx.lineWidth = 1;
      ctx.beginPath();
      lines.forEach(([startIdx, endIdx]) => {
        ctx.moveTo(centerX + stars[startIdx].rx * scale, centerY + stars[startIdx].ry * scale);
        ctx.lineTo(centerX + stars[endIdx].rx * scale, centerY + stars[endIdx].ry * scale);
      });
      ctx.stroke();

      // Draw Stars
      stars.forEach(star => {
        const x = centerX + star.rx * scale;
        const y = centerY + star.ry * scale;
        
        ctx.globalAlpha = 0.7 + Math.sin(Date.now() * 0.0015) * 0.2;
        ctx.fillStyle = star.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = star.color;
        
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    };

    const drawAllConstellations = (width: number, height: number) => {
      const scale = 0.7;

      // Draw Orion (Fixed Right-Middle)
      drawConstellation(
        orionStars, 
        width * 0.92, 
        height * 0.5, 
        0.8, 
        [[0, 2], [2, 5], [5, 1], [1, 3], [3, 5], [5, 0]]
      );

      // Draw Ursa Major (Fixed Middle-Upper)
      drawConstellation(
        ursaMajorStars,
        width * 0.58,
        height * 0.08,
        1.6,
        [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 6]]
      );

      // Draw Taurus
      drawConstellation(
        taurusStars,
        width * constellationPositions.current.taurus.x,
        height * constellationPositions.current.taurus.y,
        scale,
        [[1, 2], [2, 0], [1, 3], [0, 4], [3, 5]] // Hyades V and Horns
      );

      // Draw Caelum
      drawConstellation(
        caelumStars,
        width * constellationPositions.current.caelum.x,
        height * constellationPositions.current.caelum.y,
        scale,
        [[0, 1], [1, 2]]
      );
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      
      ctx.clearRect(0, 0, width, height);
      
      stars.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = star.color;
        
        if (star.size > 1.2) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = star.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
        
        star.opacity += star.twinkleSpeed;
        if (star.opacity < 0.1 || star.opacity > 0.9) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
      });

      drawAllConstellations(width, height);

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      initStars();
    };

    const observer = new ResizeObserver(() => {
      handleResize();
    });
    
    observer.observe(canvas);
    initStars();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [count]);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Subtle edge nebulas - slightly more visible */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />
      </div>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ opacity: 1.0 }}
      />
    </div>
  );
};
