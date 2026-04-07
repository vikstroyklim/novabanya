import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-transparent selection:bg-brand/30 overflow-hidden group-hero-hover">
      {/* Background System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0b] z-0" />
        
        {/* Mouse Glow Effect */}
        <div 
          className="absolute z-10 w-[1000px] h-[1000px] bg-brand/[0.05] rounded-full blur-[180px] pointer-events-none transition-opacity duration-1000 group-hover/hero:opacity-100 opacity-0"
          style={{
            left: mousePos.x - 500,
            top: mousePos.y - 500,
            transition: 'opacity 1s ease, transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)'
          }}
        />
        
        {/* Full Screen Video Container */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/hero-poster.jpg"
            className="w-full h-full object-cover opacity-60 pointer-events-none scale-105 group-hover/hero:scale-100 transition-transform duration-[3s] ease-out"
          >
            <source src="/newfon.webm" type="video/webm" />
          </video>
          
          {/* Gradients for readability when text is on the left */}
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent z-10" />
        </div>
      </div>

      {/* Spacing for Header */}
      <div className="h-24" />

      {/* Main Content */}
      <div className="container-width w-full flex-grow flex flex-col justify-center relative z-20 pt-20 pb-12">
        <div className="max-w-2xl text-left flex flex-col items-start mb-12">
          <div className="animate-fade-in-up inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
              450+ реализованных проектов
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[85px] font-black mb-6 leading-[0.9] tracking-tighter text-white uppercase">
            <span className="block overflow-hidden">
              <span className="block animate-slide-up">Искусство</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-slide-up [animation-delay:200ms] text-brand hero-title-gradient">Правильной</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-slide-up [animation-delay:400ms]">Бани</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed animate-fade-in [animation-delay:800ms]">
            Премиальные бани-бочки из отборной древесины. 
            Безупречный комфорт в каждой детали вашего отдыха.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in [animation-delay:1000ms]">
            <button className="btn-primary flex items-center justify-center gap-3 group/btn relative overflow-hidden animate-pulse-brand">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            {/* Inner glow pulse */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:animate-pulse transition-opacity" />
            
            <span className="relative z-10 flex items-center gap-3">
              Рассчитать стоимость
              <div className="relative flex items-center justify-center">
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-500" />
                {/* Micro-sparkle on arrow */}
                <div className="absolute inset-0 bg-white/40 blur-sm scale-150 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </div>
            </span>
          </button>
            
            <button className="btn-secondary flex items-center justify-center gap-3 group/btn relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center gap-3">
                <Play className="w-3.5 h-3.5 fill-white group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-500" />
                Видео-тур
              </div>
              {/* Border glow effect */}
              <div className="absolute inset-0 border border-white/0 group-hover/btn:border-white/20 rounded-2xl transition-all duration-500 scale-110 group-hover/btn:scale-100" />
            </button>
          </div>
        </div>

        {/* Bottom Stats Grid (Glassmorphism) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-4xl animate-fade-in [animation-delay:1200ms]">
          {/* Card 1 */}
          <div className="group/card relative p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-brand/50 cursor-default">
            {/* Animated Inner Glow */}
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-brand/20 blur-[40px] rounded-full" />
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-brand/10 blur-[40px] rounded-full" />
            </div>
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center text-brand group-hover/card:scale-110 group-hover/card:rotate-[10deg] transition-all duration-500 shadow-lg shadow-brand/10">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-1 h-1 rounded-full bg-brand" />
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Безопасность</div>
                </div>
                <div className="text-lg font-black text-white uppercase tracking-tight leading-none group-hover/card:text-brand transition-colors duration-500">15 лет <span className="text-[10px] font-bold text-slate-400 ml-1 lowercase tracking-normal">гарантии</span></div>
              </div>
            </div>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-transparent via-brand to-transparent group-hover/card:w-full transition-all duration-700 opacity-50" />
          </div>

          {/* Card 2 */}
          <div className="group/card relative p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-brand/50 cursor-default [transition-delay:100ms]">
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-brand/20 blur-[40px] rounded-full" />
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-brand/10 blur-[40px] rounded-full" />
            </div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center text-brand group-hover/card:scale-110 group-hover/card:rotate-[10deg] transition-all duration-500 shadow-lg shadow-brand/10">
                < Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-1 h-1 rounded-full bg-brand" />
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Эффективность</div>
                </div>
                <div className="text-lg font-black text-white uppercase tracking-tight leading-none group-hover/card:text-brand transition-colors duration-500">За 1 день <span className="text-[10px] font-bold text-slate-400 ml-1 lowercase tracking-normal">установка</span></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-transparent via-brand to-transparent group-hover/card:w-full transition-all duration-700 opacity-50" />
          </div>

          {/* Card 3 */}
          <div className="group/card relative p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1.5 hover:bg-white/[0.04] hover:border-brand/50 cursor-default [transition-delay:200ms]">
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-brand/20 blur-[40px] rounded-full" />
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-brand/10 blur-[40px] rounded-full" />
            </div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center text-brand group-hover/card:scale-110 group-hover/card:rotate-[10deg] transition-all duration-500 shadow-lg shadow-brand/10">
                < Star className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-1 h-1 rounded-full bg-brand" />
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Престиж</div>
                </div>
                <div className="text-lg font-black text-white uppercase tracking-tight leading-none group-hover/card:text-brand transition-colors duration-500">Premium <span className="text-[10px] font-bold text-slate-400 ml-1 lowercase tracking-normal">отделка</span></div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-transparent via-brand to-transparent group-hover/card:w-full transition-all duration-700 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
