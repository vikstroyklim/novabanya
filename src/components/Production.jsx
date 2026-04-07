import React from 'react';
import { Hammer, TreePine, ShieldCheck, Zap, Thermometer, Award } from 'lucide-react';

const PRODUCTION_STEPS = [
  {
    title: 'Отборный кедр',
    description: 'Используем только алтайский кедр камерной сушки (8-12% влажности). Это гарантирует отсутствие трещин и долговечность.',
    icon: TreePine,
    image: '/gallery/image1.jpg'
  },
  {
    title: 'Ручная работа',
    description: 'Каждый элемент проходит через руки наших мастеров. Контроль качества на каждом этапе сборки каркаса и отделки.',
    icon: Hammer,
    image: '/gallery/image2.jpg'
  },
  {
    title: 'Лунный паз',
    description: 'Финская технология соединения досок обеспечивает полную герметичность без использования вредного клея.',
    icon: ShieldCheck,
    image: '/gallery/image3.jpg'
  }
];

const Production = () => {
  return (
    <section id="производство" className="section-padding bg-transparent relative overflow-hidden">
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-brand/[0.03] blur-[200px] rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/[0.02] blur-[180px] rounded-full -translate-x-1/2" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-brand text-[10px] font-black uppercase tracking-widest mb-6 border-brand/20">
              <Award className="w-4 h-4" />
              Собственное производство в Сибири
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Где рождается <br />
              <span className="text-gradient">качество</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed font-medium">
              Мы не просто собираем бани — мы создаем искусство из дерева. 
              Наше производство площадью 2000 м² объединяет современные станки ЧПУ и ручной труд опытных плотников.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                <div className="text-3xl font-black text-white">2000 м²</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Площадь цеха</div>
              </div>
              <div className="flex flex-col gap-2 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                <div className="text-3xl font-black text-white">45 чел.</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Мастеров в штате</div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand/10 rounded-[60px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative aspect-video rounded-[48px] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/gallery/image4.jpg" 
                alt="Production" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-black uppercase tracking-widest text-xs">Прямой эфир с цеха</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTION_STEPS.map((step, idx) => (
            <div key={idx} className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden hover:border-brand/30 transition-all duration-500">
              <div className="h-48 overflow-hidden">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              </div>
              <div className="p-10">
                <div className="w-12 h-12 rounded-2xl bg-brand/5 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Production;
