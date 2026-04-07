import React, { useState, useEffect } from 'react';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds for loading as requested
    const interval = 20; 
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              if (onLoadingComplete) onLoadingComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#0a0a0b] transition-opacity duration-1000 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/[0.05] blur-[180px] rounded-full animate-pulse" />
      </div>

      <div className="relative flex flex-col items-center translate-y-12 will-change-transform">
        {/* Animated Square Logo N */}
        <div className="relative mb-10 group">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-[28px] bg-white/[0.03] border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
            {/* Filling background inside square */}
            <div 
              className="absolute inset-0 bg-brand transition-[height] duration-300 ease-out"
              style={{ height: `${progress}%`, top: 'auto', bottom: 0 }}
            />
            
            {/* The letter N (Always white) */}
            <span className="text-4xl md:text-5xl font-black relative z-10 text-white transform-gpu">
              N
            </span>
          </div>
          
          {/* Subtle Glow under square */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-12 bg-brand/30 blur-md rounded-full transition-opacity duration-500" 
               style={{ opacity: progress / 100 }} />
        </div>

        {/* Brand Text */}
        <div className="flex flex-col items-center mb-8 text-center transform-gpu">
          <div className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2 text-white">
            Nova <span className="text-brand">Banya</span>
          </div>
          <div className="text-[14px] md:text-[16px] font-medium tracking-[0.3em] text-brand/60 lowercase">
            premium woodcraft
          </div>
        </div>

        {/* Loading Bar Container */}
        <div className="w-64 h-1.5 bg-white/[0.05] rounded-full overflow-hidden mb-5 relative">
          <div 
            className="absolute inset-y-0 left-0 bg-brand transition-[width] duration-300 ease-out shadow-[0_0_20px_rgba(85,107,47,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="flex flex-col items-center h-6 w-20 justify-center">
          <div className="text-white/60 font-black text-sm tabular-nums tracking-widest uppercase transform-gpu">
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-12 left-12 w-12 h-12 border-t-2 border-l-2 border-white/5" />
      <div className="absolute top-12 right-12 w-12 h-12 border-t-2 border-r-2 border-white/5" />
      <div className="absolute bottom-12 left-12 w-12 h-12 border-b-2 border-l-2 border-white/5" />
      <div className="absolute bottom-12 right-12 w-12 h-12 border-b-2 border-r-2 border-white/5" />
    </div>
  );
};

export default Preloader;
