import React from 'react';
import { ArrowRight, Gift, Sparkles, ShieldCheck } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
      </div>

      <div className="container-width">
        <div className="relative rounded-[60px] bg-gradient-to-br from-brand/20 via-brand/5 to-transparent border border-white/10 p-12 md:p-24 overflow-hidden group">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand/[0.05] rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/[0.08] transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/[0.03] rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-brand text-[10px] font-black uppercase tracking-widest mb-8 border-brand/20">
                <Gift className="w-4 h-4" />
                Специальное предложение
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
                Готовы начать <br />
                <span className="text-gradient">свою историю?</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium">
                Закажите расчет сегодня и зафиксируйте за собой <span className="text-white">бесплатную доставку</span> и набор премиальных аксессуаров для парения.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Договор и гарантия</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Кедр высшего сорта</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <div className="w-full max-w-md p-8 md:p-12 rounded-[48px] bg-[#111113] border border-white/10 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand rounded-full flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-[10px] font-black text-white leading-none">БОНУС</div>
                    <div className="text-xl font-black text-white leading-none">0₽</div>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Персональный расчет</h3>
                <p className="text-slate-500 text-xs font-medium mb-8 uppercase tracking-widest">Ответьте на 5 вопросов и получите смету</p>
                
                <div className="space-y-4">
                  <button className="btn-primary w-full py-6 flex items-center justify-center gap-4 text-xs group/btn">
                    Рассчитать стоимость
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                  <div className="text-center text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em] mt-6">
                    Или просто позвоните нам: <br />
                    <span className="text-brand/80 mt-1 inline-block">+7 (900) 123-45-67</span>
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

export default FinalCTA;
