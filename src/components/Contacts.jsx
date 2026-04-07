import React from 'react';
import { MapPin, Phone, Mail, Instagram, Send, MessageCircle, Clock, Map } from 'lucide-react';

const CONTACTS = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (900) 123-45-67',
    link: 'tel:+79001234567'
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Написать нам',
    link: 'https://wa.me/79001234567'
  },
  {
    icon: Send,
    label: 'Telegram',
    value: '@novabochka_pro',
    link: 'https://t.me/novabochka'
  }
];

const Contacts = () => {
  return (
    <section id="contacts" className="section-padding bg-transparent relative overflow-hidden">
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          {/* Left Side: Info */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-brand text-[10px] font-black uppercase tracking-widest mb-6 border-brand/20">
              <MapPin className="w-4 h-4" />
              Приезжайте на тест-драйв
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Ждем вас в <br />
              <span className="text-gradient">нашем офисе</span>
            </h2>
            
            <div className="space-y-8 mb-12 flex-grow">
              <div className="flex gap-6 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                  <Map className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black mb-2">Адрес выставки</div>
                  <div className="text-xl text-white font-black uppercase tracking-tight leading-tight">
                    г.Москва, 65 км МКАД (внутренняя сторона). <br />
                    ТК-Синдика. Метро Строгино, Мякинино
                  </div>
                  <div className="text-sm text-slate-400 mt-2 font-medium italic">Ежедневно с 10:00 до 20:00. <br />Пожалуйста, предупредите о визите.</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {CONTACTS.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link}
                    className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand/30 hover:bg-brand/5 transition-all group"
                  >
                    <item.icon className="w-6 h-6 text-brand mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-[9px] uppercase tracking-widest text-slate-500 font-black mb-1">{item.label}</div>
                    <div className="text-[11px] text-white font-bold">{item.value}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[32px] bg-brand text-slate-900">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-6 h-6" />
                <span className="font-black uppercase tracking-widest text-xs">Запись на тест-драйв</span>
              </div>
              <p className="text-sm font-bold leading-relaxed mb-6">
                Запишитесь на просмотр бани сегодня и получите бесплатный набор банных аксессуаров при покупке.
              </p>
              <button className="w-full py-4 bg-slate-900 text-brand rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-colors">
                Записаться сейчас
              </button>
            </div>
          </div>

          {/* Right Side: Map/Image Overlay */}
          <div className="relative min-h-[500px] lg:min-h-full rounded-[48px] overflow-hidden border border-white/10 group">
            <img 
              src="/gallery/image2.jpg" 
              alt="Office" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
            
            {/* Simple Map Placeholder Design */}
            <div className="absolute inset-10 rounded-[32px] bg-[#111113]/80 backdrop-blur-md border border-white/10 p-2 flex flex-col overflow-hidden shadow-2xl">
              <div className="flex-grow bg-slate-900/50 relative overflow-hidden rounded-[24px]">
                {/* Visual Map Pattern */}
                <div className="absolute inset-0 opacity-10 grid-pattern" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-brand/20 rounded-full animate-ping absolute -inset-0" />
                    <div className="w-16 h-16 bg-brand/20 rounded-full animate-pulse absolute -inset-0" />
                    <div className="relative w-16 h-16 bg-brand rounded-full flex items-center justify-center shadow-2xl shadow-brand/50">
                      <MapPin className="w-8 h-8 text-slate-900" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-white font-black uppercase tracking-tighter text-lg">Выставочный центр</div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">Открыто для посещения</div>
                </div>
                <button className="btn-primary py-3 px-6">Маршрут</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
