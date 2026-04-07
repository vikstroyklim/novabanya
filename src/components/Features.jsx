import React from 'react';
import { 
  ShieldCheck, 
  Flame, 
  TreePine, 
  Hammer,
  Award
} from 'lucide-react';

const FEATURE_CARDS = [
  {
    title: 'Лучшие породы',
    description: 'Используем ель, кедр высших сортов камерной сушки. Долговечность и аромат.',
    icon: TreePine,
    stats: 'Экстра класс'
  },
  {
    title: 'Финская технология',
    description: 'Соединение «лунный паз» обеспечивает идеальную герметичность без клея.',
    icon: Hammer,
    stats: 'Без клея'
  },
  {
    title: 'Быстрый прогрев',
    description: 'Готова к парению за 30 минут даже в сильный мороз благодаря форме.',
    icon: Flame,
    stats: '30 мин'
  },
  {
    title: 'Гарантия 5 лет',
    description: 'Официальная гарантия на конструкцию и печь. Уверены в каждой детали.',
    icon: ShieldCheck,
    stats: '5 лет'
  }
];

const Features = () => {
  return (
    <section id="tech" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
      </div>

      {/* Background Large Text Decor */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/[0.02] uppercase tracking-[0.2em] pointer-events-none select-none whitespace-nowrap z-0">
        Perfection
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand/[0.04] blur-[180px] rounded-full -translate-x-1/2" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand/[0.02] blur-[180px] rounded-full translate-x-1/2" />
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass text-brand text-[11px] font-black uppercase tracking-[0.3em] mb-10 border-brand/30 shadow-2xl shadow-brand/10 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Award className="w-4 h-4" />
            Бескомпромиссное качество
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            Стандарты <span className="text-gradient">совершенства</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed font-medium">
            Мы объединили вековые традиции деревообработки с современными технологиями комфорта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="group relative p-12 rounded-[48px] bg-[#0a0a0b]/40 backdrop-blur-xl border border-white/5 hover:border-brand/40 transition-all duration-700 hover:-translate-y-3 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[28px] bg-white/[0.03] border border-white/10 flex items-center justify-center text-brand mb-10 transition-all duration-700 group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:rotate-[10deg] shadow-2xl group-hover:shadow-brand/40">
                  <card.icon className="w-10 h-10" />
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-brand/10 border border-brand/20 text-brand text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  {card.stats}
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase group-hover:text-brand transition-colors duration-500">
                  {card.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {card.description}
                </p>
              </div>

              {/* Scanning Line Effect */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent animate-scan" />
              </div>

              {/* Decorative Corner Line */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Decor */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-brand/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px] animate-pulse-slow pointer-events-none [animation-delay:3000ms]" />
    </section>
  );
};

export default Features;
