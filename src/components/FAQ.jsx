import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'Нужен ли фундамент для установки бани?',
    answer: 'Для наших бань-бочек не требуется капитальный фундамент. Достаточно ровной площадки с гравийной подсыпкой или установки на бетонные блоки/винтовые сваи.'
  },
  {
    question: 'Сколько времени баня держит тепло зимой?',
    answer: 'Благодаря круглой форме, отсутствию углов и использованию кедра толщиной 45мм, баня остывает очень медленно. При -20°C тепло сохраняется до 4-5 часов.'
  },
  {
    question: 'Каков срок службы бани из кедра?',
    answer: 'При правильном уходе баня из кедра прослужит более 25 лет. Кедр естественным образом устойчив к гниению и насекомым.'
  },
  {
    question: 'Можно ли заказать индивидуальную планировку?',
    answer: 'Да, мы можем изменить расположение перегородок, добавить окна, полки или увеличить террасу. Все изменения обсуждаются на этапе проектирования.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-transparent relative overflow-hidden">
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand/[0.03] blur-[180px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-brand/[0.02] blur-[180px] rounded-full translate-x-1/2" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-brand text-[10px] font-black uppercase tracking-widest mb-6 border-brand/20">
              <HelpCircle className="w-4 h-4" />
              Популярные вопросы
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              Отвечаем на <br />
              ваши <span className="text-gradient">вопросы</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed font-medium">
              Мы собрали самые частые вопросы, чтобы вам было проще определиться с выбором.
            </p>
            
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-black text-white mb-4 tracking-tight uppercase">Нужна личная помощь?</h4>
                <p className="text-slate-400 text-sm mb-8 font-medium">Наши эксперты готовы ответить на любые технические вопросы.</p>
                <button className="btn-primary w-full py-5 text-[10px]">
                  Заказать звонок инженера
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-2xl" />
            </div>
          </div>

          <div className="space-y-4">
            {FAQS.map((item, idx) => (
              <div 
                key={idx}
                className={`
                  group rounded-[32px] border transition-all duration-500 overflow-hidden
                  ${openIndex === idx 
                    ? 'bg-white/[0.03] border-brand/30 shadow-2xl shadow-brand/5' 
                    : 'bg-white/[0.01] border-white/5 hover:border-white/10'}
                `}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left"
                >
                  <span className={`text-xl font-black tracking-tight uppercase transition-colors ${openIndex === idx ? 'text-brand' : 'text-white'}`}>
                    {item.question}
                  </span>
                  <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500
                    ${openIndex === idx ? 'bg-brand text-white rotate-180' : 'bg-white/5 text-slate-500'}
                  `}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                
                <div className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="px-10 pb-10 text-slate-400 text-base leading-relaxed font-medium">
                    <div className="pt-2 border-t border-white/5">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
};

export default FAQ;
