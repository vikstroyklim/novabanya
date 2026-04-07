import React, { useState, useEffect, useCallback } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles, ArrowUpRight, MousePointer2 } from 'lucide-react';

const IMAGES = [
  {
    url: '/gallery/image4.jpg',
    title: 'Квадро-баня в лесу',
    size: 'lg',
    category: 'Экстерьер',
    location: 'Ленинградская обл.'
  },
  {
    url: '/gallery/image1.jpg',
    title: 'Интерьер из кедра',
    size: 'sm',
    category: 'Внутренняя отделка',
    location: 'Подмосковье'
  },
  {
    url: '/gallery/image2.jpg',
    title: 'Баня-бочка на закате',
    size: 'sm',
    category: 'Экстерьер',
    location: 'Карелия'
  },
  {
    url: '/gallery/image3.jpg',
    title: 'Панорамное остекление',
    size: 'md',
    category: 'Детали',
    location: 'Санкт-Петербург'
  },
  {
    url: '/gallery/image1.jpg',
    title: 'Зимний отдых',
    size: 'md',
    category: 'Экстерьер',
    location: 'Алтай'
  },
  {
    url: '/gallery/image2.jpg',
    title: 'Вечерняя подсветка',
    size: 'lg',
    category: 'Детали',
    location: 'Сочи'
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['Все', 'Экстерьер', 'Внутренняя отделка', 'Детали'];
  
  const getCount = (cat) => cat === 'Все' ? IMAGES.length : IMAGES.filter(img => img.category === cat).length;

  const filteredImages = activeCategory === 'Все' 
    ? IMAGES 
    : IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (idx) => {
    setSelectedImage(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback((e) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, nextImage, prevImage]);

  return (
    <section 
      id="gallery" 
      className="section-padding bg-transparent relative overflow-hidden group/gallery-section"
    >
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/[0.03] blur-[220px] rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand/[0.02] blur-[220px] rounded-full -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container-width relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-brand text-[10px] font-black uppercase tracking-widest mb-6 border-brand/20">
              <ImageIcon className="w-4 h-4" />
              Наши работы
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
              Эстетика <span className="text-gradient">кедра</span> <br />в деталях
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Каждый проект — это история о комфорте, качестве и любви к своему делу.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  relative px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-500
                  ${activeCategory === cat 
                    ? 'bg-brand text-white shadow-lg shadow-brand/20 scale-105' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'}
                `}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cat}
                  <span className={`
                    text-[9px] px-1.5 py-0.5 rounded-md transition-colors duration-500
                    ${activeCategory === cat ? 'bg-black/20 text-white' : 'bg-white/10 text-slate-500'}
                  `}>
                    {getCount(cat)}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredImages.map((img, idx) => (
            <div 
              key={img.title + idx}
              onClick={() => openLightbox(idx)}
              className={`
                group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/5 aspect-[4/5] cursor-pointer
                transition-all duration-700 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5
                ${idx % 3 === 1 ? 'lg:translate-y-12' : ''}
                animate-in fade-in slide-in-bottom-10
              `}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img 
                src={img.url} 
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-700" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="px-3 py-1 rounded-lg bg-brand/20 text-brand text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                    {img.category}
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {img.location}
                  </div>
                </div>
                <h3 className="text-xl font-black text-white tracking-tight uppercase mb-2">
                  {img.title}
                </h3>
                <div className="h-px w-0 group-hover:w-full bg-brand/30 transition-all duration-700 mb-3" />
                <p className="text-slate-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center gap-2">
                  <Maximize2 className="w-3 h-3 text-brand" />
                  Нажмите для детального просмотра
                </p>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:rotate-12 group-hover:scale-100 shadow-xl">
                <Sparkles className="w-5 h-5 text-brand" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 flex flex-col items-center gap-8">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0a0a0b] bg-white/10 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0b] bg-brand flex items-center justify-center text-white text-xs font-black">
              +500
            </div>
          </div>
          <p className="text-slate-500 text-sm font-medium">Более 500 довольных клиентов в Instagram</p>
          <button className="btn-secondary px-12 py-6 flex items-center gap-4 group text-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-brand/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 flex items-center gap-4">
              Подписаться на проекты
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0b]/98 backdrop-blur-2xl p-4 md:p-10 animate-in fade-in duration-500"
          onClick={closeLightbox}
        >
          {/* Close Area */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={closeLightbox} />

          <button 
            className="absolute top-8 right-8 z-[110] w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:rotate-90 transition-all duration-500 group"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 group-hover:scale-110" />
          </button>

          <button 
            className="absolute left-8 top-1/2 -translate-y-1/2 z-[110] w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-white hover:border-brand transition-all duration-500 hidden md:flex"
            onClick={nextImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            className="absolute right-8 top-1/2 -translate-y-1/2 z-[110] w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-white hover:border-brand transition-all duration-500 hidden md:flex"
            onClick={prevImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-8" onClick={e => e.stopPropagation()}>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
              <img 
                key={filteredImages[selectedImage].url}
                src={filteredImages[selectedImage].url} 
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-700"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-4 py-1.5 rounded-xl bg-brand/20 text-brand text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-xl border border-brand/30">
                    {filteredImages[selectedImage].category}
                  </div>
                  <div className="px-4 py-1.5 rounded-xl bg-white/5 text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-xl border border-white/10">
                    {filteredImages[selectedImage].location}
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight max-w-3xl">
                  {filteredImages[selectedImage].title}
                </h3>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-brand text-xl font-black">{String(selectedImage + 1).padStart(2, '0')}</span>
              <div className="w-24 h-px bg-gradient-to-r from-brand/50 to-transparent" />
              <span className="text-white/20 text-xl font-black">{String(filteredImages.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      )}

      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Gallery;
