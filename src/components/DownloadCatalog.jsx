import React, { useState, useRef, useEffect } from 'react';
import { 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone,
  Loader2
} from 'lucide-react';

const DownloadCatalog = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [viewerCount, setViewerCount] = useState(12);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const interval = setInterval(() => {
      setViewerCount(prev => Math.max(8, Math.min(24, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length > 5) {
      setIsPreparing(true);
      setTimeout(() => {
        setIsPreparing(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="bg-transparent py-24 md:py-32 relative overflow-hidden"
    >
      {/* High-Visibility Background System with Seamless Integration */}
      <div className="absolute inset-0">
        {/* Real Background Image Overlay */}
        <div className="absolute inset-0 opacity-[0.07]">
          <img 
            src="/viking.png" 
            alt="" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
        </div>

        {/* Deep Abstract Base for Presence */}
        <div className="absolute inset-0 bg-[#0a0a0b]/60" />
        
        {/* Large Soft Glows for Depth */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-brand/[0.06] blur-[200px] rounded-full" 
            style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
          />
          <div 
            className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-brand/[0.03] blur-[200px] rounded-full" 
            style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
          />
        </div>

        {/* Seamless Transitions: Top and Bottom Gradient Masks */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        </div>

        {/* Dynamic Interactive Spotlight */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-700"
          style={{
            background: `radial-gradient(1200px circle at ${50 + mousePos.x * 40}% ${50 + mousePos.y * 40}%, rgba(85,107,47,0.03), transparent 80%)`
          }}
        />

        {/* Minimalist Structural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(85,107,47,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(85,107,47,0.2) 1px, transparent 1px)`,
            backgroundSize: '120px 120px',
            maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 90%)'
          }} 
        />
        
        {/* Fine Micro-dot Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: `radial-gradient(rgba(85,107,47,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} 
        />
        
        {/* Brand Glow Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div 
            className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-brand/10 blur-[120px] rounded-full" 
            style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
          />
          <div 
            className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand/5 blur-[100px] rounded-full" 
            style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
          />
        </div>
      </div>
      
      <div className="container-width relative z-10">
        {/* Main Glass Card Wrapper */}
        <div className="relative group/card">
          {/* Animated Gradient Border Layer */}
          <div className="absolute -inset-[1px] rounded-[48px] bg-gradient-to-br from-white/10 via-transparent to-white/5 group-hover/card:from-brand/30 transition-all duration-1000" />
          
          {/* Glass Content Card */}
          <div className="relative bg-[#111112] border border-white/10 rounded-[48px] p-8 md:p-12 lg:p-14 overflow-hidden shadow-2xl shadow-black/50">
            {/* Micro-noise Texture Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
              }} 
            />

            {/* Subtle Gradient Glow inside card */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Left: Content & Form */}
              <div className="relative z-10 order-2 lg:order-1 lg:col-span-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className="inline-flex items-center gap-2 text-brand text-[9px] font-black uppercase tracking-[0.3em]">
                    <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center">
                      <FileDown className="w-3 h-3" />
                    </div>
                    Каталог 2026
                  </div>
                  <div className="h-[1px] w-8 bg-white/10" />
                  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/[0.03] border border-white/5">
                    <div className="w-1 h-1 rounded-full bg-brand animate-pulse" />
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                      {viewerCount} онлайн
                    </span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tighter leading-[1] uppercase">
                  <span className="text-gradient">Скачайте</span> <br />
                  <span className="relative">
                    коллекцию
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand/30 rounded-full" />
                  </span> <br />
                  проектов 2026
                </h2>
                
                <p className="text-slate-400 text-sm md:text-base max-w-md mb-8 leading-relaxed font-medium">
                  Собрали лучшие модели бань с актуальными ценами и планировками в одном удобном PDF файле.
                </p>

                <div className="max-w-xl relative">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      {!isPreparing ? (
                        <>
                          <div className="relative group flex-1">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand/10 to-transparent blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
                            <div className="relative flex items-center">
                              <div className="absolute left-4 text-slate-500 group-focus-within:text-brand transition-all duration-300">
                                <Smartphone className="w-4 h-4" />
                              </div>
                              <input 
                                type="tel" 
                                required
                                placeholder="Ваш номер телефона"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-5 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-brand/40 focus:bg-white/[0.05] transition-all font-bold text-sm"
                              />
                            </div>
                          </div>

                          <button 
                            type="submit"
                            className="bg-brand text-white px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 font-black uppercase tracking-widest hover:bg-white transition-all group shadow-xl shadow-brand/10 active:scale-[0.98] whitespace-nowrap text-[11px]"
                          >
                            Получить
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </>
                      ) : (
                        <div className="flex-1 py-3.5 flex items-center justify-center gap-4 bg-white/[0.03] border border-white/5 rounded-xl">
                          <Loader2 className="w-4 h-4 text-brand animate-spin" />
                          <p className="text-white font-black uppercase tracking-widest text-[9px]">Готовим ссылку...</p>
                        </div>
                      )}
                    </form>
                  ) : (
                    <div className="bg-brand/5 border border-brand/20 p-5 rounded-2xl flex items-center gap-5 animate-in zoom-in-95 duration-500 shadow-xl shadow-brand/10">
                      <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand/20 shrink-0">
                        <CheckCircle2 className="w-5 h-5 stroke-[3px]" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-base font-black text-white uppercase tracking-tight">Отправлено!</h3>
                        <button 
                          onClick={() => setIsSubmitted(false)}
                          className="text-brand hover:text-white transition-colors text-[8px] font-black uppercase tracking-widest mt-0.5"
                        >
                          Изменить номер
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {!isSubmitted && (
                    <div className="flex items-center gap-3 mt-4 ml-1">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-5 h-5 rounded-full border border-black bg-slate-800 flex items-center justify-center overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">
                        Уже получили более 2,400 человек
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Visual Mockup */}
              <div className="relative order-1 lg:order-2 lg:col-span-5">
                <div 
                  className="relative transition-transform duration-700 ease-out max-w-[280px] mx-auto lg:ml-auto group/mockup"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)`
                  }}
                >
                  {/* Floating Elements Around Mockup */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-brand animate-bounce duration-[3000ms] z-20">
                    <FileDown className="w-5 h-5" />
                  </div>
                  <div className="absolute top-1/2 -right-8 w-10 h-10 bg-brand/20 backdrop-blur-md border border-brand/20 rounded-xl flex items-center justify-center text-brand animate-pulse z-20">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  {/* Tablet/Magazine Frame */}
                  <div className="relative aspect-[3/4] rounded-[32px] p-2.5 bg-white/[0.05] border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent pointer-events-none" />
                    
                    {/* Inner Content Image */}
                    <div className="relative h-full w-full rounded-[22px] overflow-hidden bg-slate-900">
                      <img 
                        src="/viking.png" 
                        alt="Catalog Preview" 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                      />

                      {/* Professional Overlay for the Image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Glass Card on Image */}
                      <div className="absolute bottom-3 left-3 right-3 z-20">
                        <div className="backdrop-blur-xl bg-black/50 border border-white/10 p-4 rounded-[18px] transform translate-y-2 group-hover:translate-y-0 transition-all duration-700 shadow-xl">
                          <div className="text-brand text-[7px] font-black uppercase tracking-[0.2em] mb-1.5">2026 EDITION</div>
                          <div className="text-lg font-black text-white uppercase tracking-tight leading-none">
                            Nova Bochka
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] pointer-events-none" />
                  </div>

                  {/* Floating PDF Badge */}
                  <div 
                    className="absolute -bottom-3 -right-3 px-4 py-2 bg-brand rounded-xl shadow-xl shadow-brand/30 z-30 transform rotate-6 group-hover:rotate-0 transition-all duration-500"
                  >
                    <div className="text-white font-black text-xs leading-none">PDF 12MB</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCatalog;
