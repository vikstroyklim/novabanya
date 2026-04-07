import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    
    const handleScroll = () => {
      const currentY = window.scrollY;
      
      // 1. Состояние "прокручено" (для уменьшения хедера)
      setIsScrolled(currentY > 20);

      // 2. Логика скрытия/показа
      if (currentY <= 60) {
        // В самом верху всегда показываем
        setIsVisible(true);
      } else {
        // Вычисляем разницу
        const diff = currentY - lastY;
        
        // Если проскроллили достаточно много в любую сторону
        if (Math.abs(diff) > 8) {
          if (diff > 0) {
            // Скроллим вниз - скрываем
            setIsVisible(false);
          } else {
            // Скроллим вверх - показываем
            setIsVisible(true);
          }
          // Обновляем lastY только когда сработал порог
          lastY = currentY;
        }
      }

      // Всегда обновляем lastY в экстремальных точках
      if (currentY <= 0) {
        lastY = 0;
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'Технология', href: '#tech' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className={`w-full transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-5'
        }`}>
          <div className="container-width">
            <div className={`relative flex items-center justify-between px-6 py-2.5 transition-all duration-500 ease-out ${
              isScrolled 
                ? 'bg-[#0a0a0b]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl' 
                : 'bg-transparent border border-transparent'
            }`}>
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group relative">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center font-black text-slate-900 transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg shadow-brand/20">
                  N
                </div>
                {/* Decorative dots around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase text-white leading-none">
                  Nova <span className="text-brand group-hover:text-brand-light transition-colors duration-500">Banya</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-bold group-hover:text-slate-400 transition-colors duration-500">
                  Premium Woodcraft
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="relative px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all duration-300 group overflow-hidden rounded-xl hover:bg-white/5"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-brand/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a 
            href="tel:+79994445005" 
            className="hidden xl:flex flex-col items-end gap-0.5 group"
          >
            <span className="text-[9px] font-black text-brand/80 uppercase tracking-[0.2em] leading-none group-hover:text-brand transition-colors">Свяжитесь с нами</span>
            <span className="font-black text-sm tracking-tighter text-white group-hover:text-brand transition-all duration-300">+7 (999) 444-50-05</span>
          </a>

              <div className="h-8 w-[1px] bg-white/10 hidden xl:block mx-2" />

              <button className="hidden sm:flex btn-primary !py-3 !px-6 !text-[10px] items-center gap-2 group/btn relative overflow-hidden">
                <div className="shimmer-effect opacity-20 group-hover/btn:opacity-40" />
                <span className="relative z-10 flex items-center gap-2">
                  Консультация
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden w-11 h-11 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-[#0a0a0b]/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-black tracking-tighter text-white uppercase">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-black uppercase tracking-tighter text-white hover:text-brand transition-all duration-300 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-8">
            <div className="h-[1px] w-full bg-white/10" />
            <div className="flex flex-col gap-4">
              <a href="tel:+79994445005" className="text-2xl font-black text-white">+7 (999) 444-50-05</a>
              <p className="text-slate-500 font-medium">г.Москва, 65 км МКАД (внутренняя сторона). ТК-Синдика. Метро Строгино, Мякинино</p>
            </div>
            <button className="w-full btn-primary py-5 text-sm flex items-center justify-center gap-3">
              Заказать звонок
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
