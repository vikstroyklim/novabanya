import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Александр Волков',
    role: 'Владелец Квадро-бани',
    content: 'Заказал баню из кедра 4 метра. Аромат стоит невероятный! Прогревается очень быстро, через 40 минут уже можно париться. Качество сборки на высоте, все стыки идеальные.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=alex',
    date: '12.12.2025'
  },
  {
    id: 2,
    name: 'Елена Соколова',
    role: 'Владелец Овальной бани',
    content: 'Долго выбирали и остановились на NOVA BANYA. Очень понравился современный дизайн и панорамное окно. Теперь это наше любимое место отдыха всей семьей по выходным.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=elena',
    date: '28.11.2025'
  },
  {
    id: 3,
    name: 'Дмитрий Петров',
    role: 'Владелец Бочки-классик',
    content: 'Отличное соотношение цены и качества. Ребята привезли и установили за один день. Сервис на высоте, менеджеры всегда на связи. Рекомендую всем ценителям хорошего пара.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=dmitry',
    date: '15.11.2025'
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-transparent relative overflow-hidden">
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/[0.02] blur-[200px] rounded-full" />
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-brand text-[10px] font-black uppercase tracking-widest mb-6 border-brand/20">
            <Star className="w-4 h-4 fill-brand" />
            Доверие наших клиентов
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            Истории <span className="text-gradient">удовольствия</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-medium">
            Более 1500 семей уже наслаждаются теплом наших кедровых бань. Читайте их честные отзывы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="group p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-700 relative flex flex-col h-full"
            >
              <div className="absolute top-8 right-10 text-brand/10 group-hover:text-brand/20 transition-colors">
                <Quote className="w-16 h-16 rotate-180" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand/20 p-1">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-tight text-lg">{review.name}</h4>
                  <p className="text-brand/60 text-[10px] font-black uppercase tracking-widest">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>

              <p className="text-slate-400 text-base leading-relaxed font-medium mb-8 flex-grow italic">
                "{review.content}"
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-black text-green-500 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" />
                  Подтвержденный отзыв
                </div>
                <span className="text-slate-600 text-[10px] font-bold">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="btn-secondary px-12 py-5 text-xs group">
            Смотреть все 150+ отзывов
          </button>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none -z-10" />
    </section>
  );
};

export default Reviews;
