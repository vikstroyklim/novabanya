import React from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  Send, 
  Youtube,
  ArrowUpRight,
  ChevronRight,
  Globe,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0b] pt-32 pb-12 relative overflow-hidden">
      {/* Cinematic Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-30" />
      <div className="absolute -top-24 left-1/4 w-[600px] h-[400px] bg-brand/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container-width relative z-10">
        {/* Giant Hero Title in Footer */}
        <div className="mb-32 select-none pointer-events-none">
          <h2 className="text-[12vw] lg:text-[15vw] font-black leading-[0.8] tracking-tighter uppercase opacity-[0.03] text-white whitespace-nowrap -ml-4">
            Nova Banya
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Main Info Card */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20">
                <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand">Премиальное качество</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase">
                Давайте создадим <br />
                <span className="text-brand">вашу идеальную</span> <br />
                баню вместе
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <a href="tel:+79994445005" className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand/30 hover:bg-brand/[0.02] transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Позвонить нам</div>
                <div className="text-xl font-black text-white group-hover:text-brand transition-colors">+7 999 444 50 05</div>
              </a>
              <a href="mailto:hello@novabanya.ru" className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand/30 hover:bg-brand/[0.02] transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Написать нам</div>
                <div className="text-xl font-black text-white group-hover:text-brand transition-colors">hello@novabanya.ru</div>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-white font-black uppercase tracking-widest text-xs">Компания</h4>
              <ul className="space-y-4">
                {['О нас', 'Технология', 'Производство', 'Галерея', 'Отзывы'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-brand font-bold text-sm transition-all flex items-center gap-2 group">
                      <div className="w-0 h-[1.5px] bg-brand group-hover:w-4 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-black uppercase tracking-widest text-xs">Продукция</h4>
              <ul className="space-y-4">
                {['Бани-бочки', 'Квадро-бани', 'Овальные бани', 'Викинг-бани', 'Индивидуальные'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-brand font-bold text-sm transition-all flex items-center gap-2 group">
                      <div className="w-0 h-[1.5px] bg-brand group-hover:w-4 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 col-span-2 md:col-span-1">
              <h4 className="text-white font-black uppercase tracking-widest text-xs">Мы в сети</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Instagram, color: 'hover:text-[#E4405F]' },
                  { icon: Send, color: 'hover:text-[#229ED9]' },
                  { icon: Youtube, color: 'hover:text-[#FF0000]' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-slate-400 ${social.color} hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
              <div className="pt-6 space-y-4">
                <div className="flex items-start gap-3 text-slate-500">
                  <MapPin className="w-4 h-4 mt-1 text-brand" />
                  <span className="text-sm font-medium leading-relaxed">
                    г.Москва, 65 км МКАД (внутренняя сторона). <br />
                    ТК-Синдика. Метро Строгино, Мякинино
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with luxury feel */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <span>© {currentYear} NOVA BANYA</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5">
              <Globe className="w-3.5 h-3.5 text-brand" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">RU / EN</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-brand transition-colors">Back to top</span>
              <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-slate-900 transition-all duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
