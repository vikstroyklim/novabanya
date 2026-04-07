import React from 'react';
import { 
  ClipboardList, 
  Settings, 
  Truck, 
  FileText, 
  Hammer,
  Sparkles,
  ChevronRight,
  Eye
} from 'lucide-react';

const STEPS = [
  {
    id: '01',
    title: 'Консультация',
    description: 'Обсуждаем пожелания, выбираем модель и составляем точную смету.',
    icon: ClipboardList,
    image: '/gallery/image1.jpg'
  },
  {
    id: '02',
    title: 'Визит и Договор',
    description: 'Приглашаем на выставку для оценки качества и заключаем официальный договор.',
    icon: Eye,
    image: '/gallery/image2.jpg'
  },
  {
    id: '03',
    title: 'Производство',
    description: 'Изготавливаем баню на нашем производстве из отборного кедра.',
    icon: Hammer,
    image: '/gallery/image4.jpg'
  },
  {
    id: '04',
    title: 'Доставка',
    description: 'Привозим готовую баню и устанавливаем на вашем участке за 1 день.',
    icon: Truck,
    image: '/gallery/image3.jpg'
  }
];

const Process = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/[0.02] blur-[220px] rounded-full" />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-brand text-[10px] font-black uppercase tracking-widest mb-6 border-brand/20">
            <Settings className="w-4 h-4" />
            Ваш путь к релаксу
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            4 шага до <span className="text-gradient">первого пара</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Мы максимально упростили процесс, чтобы вы могли наслаждаться результатом без лишних хлопот.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => (
            <div key={step.id} className="group relative">
              {idx < STEPS.length - 1 && (
                <div className="absolute top-12 -right-4 z-20 hidden lg:block text-white/10 group-hover:text-brand/30 transition-all duration-500">
                  <ChevronRight className="w-10 h-10" />
                </div>
              )}

              <div className="relative z-10 p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2 overflow-hidden">
                <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <span className="text-5xl font-black text-white/5 group-hover:text-brand/10 transition-colors">
                    {step.id}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-brand/20">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-brand transition-colors uppercase">
                  {step.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {step.description}
                </p>

                <div className="mt-auto pt-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Этап проекта</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[40px] bg-transparent border border-white/5 relative overflow-hidden group hover:border-brand/20 transition-all duration-500">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 text-center lg:text-left">
            <div>
              <h4 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase">Готовы начать строительство?</h4>
              <p className="text-slate-400 text-lg font-medium">Получите бесплатную консультацию инженера и 3D-макет вашей бани сегодня.</p>
            </div>
            
            <button className="btn-primary flex items-center gap-3 px-12 py-6 text-xs shadow-2xl">
              <Sparkles className="w-5 h-5" />
              Оставить заявку
            </button>
          </div>
          
          {/* Subtle decor for the CTA box */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Process;
