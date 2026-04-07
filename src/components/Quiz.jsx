import { useState, useEffect } from 'react';
import { 
  Check, 
  ChevronLeft, 
  Home, 
  Maximize, 
  TreePine, 
  Gift,
  ArrowRight,
  Flame,
  Thermometer,
  Sparkles,
  Info,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';

const QUIZ_STEPS = [
  {
    id: 'type',
    question: 'Какую форму бани выберем?',
    description: 'Форма влияет на прогрев и удобство внутри',
    options: [
      { id: 'barrel', label: 'Бочка', icon: Maximize, desc: 'Быстрый прогрев и уют', image: '/bochka.png', price: 180000 },
      { id: 'quadro', label: 'Квадро', icon: Home, desc: 'Больше места в углах', image: '/kvadro.png', price: 250000 },
      { id: 'parus', label: 'Парус', icon: TreePine, desc: 'Уникальный стиль', image: '/parus.png', price: 320000 },
      { id: 'viking', label: 'Викинг', icon: ShieldCheck, desc: 'Брутальный вид', image: '/viking.png', price: 280000 },
      { id: 'quadrooval', label: 'Квадро-овал', icon: Maximize, desc: 'Для большой семьи', image: '/kvadrooval.png', price: 290000 },
      { id: 'karkas', label: 'Каркасная', icon: Sparkles, desc: 'Премиум комфорт', image: '/karkas.png', price: 350000 },
    ]
  },
  {
    id: 'size',
    question: 'Сколько человек будет париться?',
    description: 'Подберем оптимальную длину корпуса',
    options: [
      { id: '2m', label: '2-3 человека', icon: Thermometer, desc: 'Длина 2 метра', image: '/gallery/image1.jpg', price: 0 },
      { id: '3m', label: '3-4 человека', icon: Thermometer, desc: 'Длина 3 метра', image: '/gallery/image1.jpg', price: 40000 },
      { id: '4m', label: '4-6 человек', icon: Thermometer, desc: 'Длина 4 метра', image: '/gallery/image1.jpg', price: 80000 },
      { id: '6m', label: 'Большая компания', icon: Thermometer, desc: 'Длина 6 метров', image: '/gallery/image1.jpg', price: 150000 },
    ]
  },
  {
    id: 'wood',
    question: 'Материал отделки?',
    description: 'Кедр или ель — аромат и польза',
    options: [
      { id: 'spruce', label: 'Северная ель', icon: TreePine, desc: 'Практично и надежно', image: '/gallery/image1.jpg', price: 0, info: 'Отборная северная древесина камерной сушки.' },
      { id: 'cedar', label: 'Алтайский кедр', icon: Flame, desc: 'Целебный аромат', image: '/gallery/image1.jpg', price: 90000, info: 'Природный антисептик, благотворно влияет на здоровье.' },
    ]
  },
  {
    id: 'extras',
    question: 'Добавим комфорта?',
    description: 'Опции для идеального первого пара',
    isMultiple: true,
    options: [
      { id: 'stove', label: 'Печь помощнее', icon: Flame, desc: 'Быстрый жар', image: '/gallery/image1.jpg', price: 35000 },
      { id: 'glass', label: 'Стеклянная стена', icon: Sparkles, desc: 'Панорамный вид', image: '/gallery/image1.jpg', price: 45000 },
      { id: 'lighting', label: 'LED-пакет', icon: Zap, desc: 'Красивый свет', image: '/gallery/image1.jpg', price: 15000 },
      { id: 'tank', label: 'Бак 50л', icon: Thermometer, desc: 'Горячая вода', image: '/gallery/image1.jpg', price: 12000 },
    ]
  },
  {
    id: 'gift',
    question: 'Выберите ваш подарок',
    description: 'Забронируйте подарок, который мы привезем вместе с баней',
    options: [
      { id: 'set', label: 'Банный набор', icon: Gift, desc: 'Шапки, ковшик, термометр', image: '/gallery/image1.jpg', price: 0 },
      { id: 'stones', label: 'Камни для печи', icon: Zap, desc: 'Жадеит — лучший для пара', image: '/gallery/image1.jpg', price: 0 },
      { id: 'delivery', label: 'Бесплатная сборка', icon: ShieldCheck, desc: 'Профессиональный монтаж', image: '/gallery/image1.jpg', price: 0 },
    ]
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showInfo, setShowInfo] = useState(null);

  const step = QUIZ_STEPS[currentStep];
  const progress = ((currentStep + 1) / QUIZ_STEPS.length) * 100;

  // Calculate price dynamically
  useEffect(() => {
    let price = 0;
    Object.keys(answers).forEach(stepId => {
      const stepData = QUIZ_STEPS.find(s => s.id === stepId);
      if (stepData) {
        if (stepData.isMultiple) {
          answers[stepId].forEach(optionId => {
            const option = stepData.options.find(o => o.id === optionId);
            if (option) price += option.price;
          });
        } else {
          const option = stepData.options.find(o => o.id === answers[stepId]);
          if (option) price += option.price;
        }
      }
    });
    setTotalPrice(price);
  }, [answers]);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleSelect = (optionId) => {
    if (step.isMultiple) {
      const currentOptions = answers[step.id] || [];
      const newOptions = currentOptions.includes(optionId)
        ? currentOptions.filter(id => id !== optionId)
        : [...currentOptions, optionId];
      setAnswers({ ...answers, [step.id]: newOptions });
    } else {
      setAnswers({ ...answers, [step.id]: optionId });
      setTimeout(() => handleNext(), 400);
    }
  };

  const handleNext = () => {
    if (currentStep < QUIZ_STEPS.length - 1) {
      triggerAnimation();
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        window.scrollTo({ top: document.getElementById('квиз').offsetTop - 100, behavior: 'smooth' });
      }, 50);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      triggerAnimation();
      setTimeout(() => setCurrentStep(prev => prev - 1), 50);
    }
  };

  return (
    <section id="quiz" className="relative py-12 md:py-16 overflow-hidden bg-transparent">
      {/* Seamless transition masks */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0b] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0b] to-transparent" />
      </div>

      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-brand/[0.03] rounded-full blur-[180px] glow-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-brand/[0.05] rounded-full blur-[200px] glow-pulse pointer-events-none" />

      <div className="container-width relative z-10">
        {!isFinished ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Info Side */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full glass text-brand text-[10px] font-black uppercase tracking-[0.2em] mb-4 border-brand/20 shadow-xl shadow-brand/5">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                Расчет {'<'} 1 мин
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                Соберите <br />
                свою <span className="text-gradient">баню</span>
              </h2>
              
              {/* Dynamic Price Counter */}
              <div className="bg-white/5 border border-white/10 rounded-[24px] p-5 mb-6 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1.5">Предварительная стоимость</div>
                  <div className="flex items-end gap-1.5">
                    <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                      {totalPrice > 0 ? totalPrice.toLocaleString() : '---'}
                    </span>
                    <span className="text-lg font-black text-brand mb-0.5">₽</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { id: 1, text: 'Конфигурация' },
                  { id: 2, text: 'Выбор подарка' },
                  { id: 3, text: 'Готовый расчет' }
                ].map((item) => {
                  const isActive = (item.id === 1 && currentStep < 4) || (item.id === 2 && currentStep === 4) || (item.id === 3 && isFinished);
                  const isDone = (item.id === 1 && currentStep >= 4) || (item.id === 2 && isFinished);
                  
                  return (
                    <div key={item.id} className={`flex items-center gap-4 transition-all duration-500 ${isActive || isDone ? 'opacity-100' : 'opacity-30'}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-base transition-all duration-500 ${isDone ? 'bg-green-500 text-white' : isActive ? 'bg-brand text-white shadow-lg shadow-brand/30 scale-105' : 'bg-white/5 border border-white/10 text-white'}`}>
                        {isDone ? <Check className="w-5 h-5 stroke-[3px]" /> : item.id}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-white font-black uppercase tracking-widest text-[10px]">{item.text}</div>
                        <div className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Этап {item.id}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Quiz Side */}
            <div className="lg:col-span-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 via-brand/10 to-transparent rounded-[52px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-[#111113] border border-white/10 rounded-[32px] p-5 md:p-6 shadow-2xl shadow-black/80">
                  {/* Progress Header */}
                  <div className="mb-6">
                    <div className="flex justify-between items-end mb-3">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Вопрос {currentStep + 1} из {QUIZ_STEPS.length}</span>
                        <span className="text-2xl font-black text-white tracking-tighter uppercase">{step.question}</span>
                      </div>
                      <span className="text-2xl font-black text-brand tracking-tighter">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-dark to-brand transition-all duration-700 ease-out rounded-full relative"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute top-0 right-0 w-8 h-full bg-white/20 blur-sm rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className={isAnimating ? 'animate-slide-up' : ''}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                      {step.options.map((option) => {
                        const isSelected = step.isMultiple 
                          ? (answers[step.id] || []).includes(option.id)
                          : answers[step.id] === option.id;
                        
                        return (
                          <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={`
                              group relative flex flex-col rounded-[24px] border transition-all duration-700 text-left overflow-hidden h-[160px] md:h-[180px]
                              ${isSelected 
                                ? 'border-brand shadow-[0_0_30px_rgba(85,107,47,0.15)] scale-[1.02] z-10' 
                                : 'border-white/10 hover:border-white/30'}
                            `}
                          >
                            {/* Background Image with Gradient */}
                            <div className="absolute inset-0 z-0">
                              <img 
                                src={option.image} 
                                alt={option.label}
                                className={`w-full h-full object-cover transition-transform duration-1000 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}
                                loading="lazy"
                              />
                              {/* Multi-layer Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 transition-opacity duration-500" />
                              <div className={`absolute inset-0 bg-brand/10 opacity-0 transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'group-hover:opacity-40'}`} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 px-4 pb-4 mt-auto flex flex-col gap-1">
                              <div className="flex items-center justify-between">
                                <div className={`
                                  w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500
                                  ${isSelected ? 'bg-brand text-slate-900 shadow-lg shadow-brand/20' : 'bg-white/10 backdrop-blur-md text-white group-hover:bg-brand group-hover:text-slate-900'}
                                `}>
                                  <option.icon className="w-4 h-4" />
                                </div>
                              </div>

                              <div>
                                <h3 className={`text-base font-black tracking-tight transition-colors duration-500 ${isSelected ? 'text-brand' : 'text-white'}`}>
                                  {option.label}
                                </h3>
                                <p className="text-[10px] text-slate-300 font-medium leading-relaxed line-clamp-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                  {option.desc}
                                </p>
                              </div>

                              {option.price > 0 && (
                                <div className={`text-[9px] font-black uppercase tracking-widest ${isSelected ? 'text-brand' : 'text-slate-400'}`}>
                                  +{option.price.toLocaleString() / 1000}к ₽
                                </div>
                              )}
                            </div>

                            {/* Selection Indicator */}
                            {isSelected && (
                              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-brand flex items-center justify-center text-slate-900 animate-slide-up z-20 shadow-lg shadow-brand/30">
                                <Check className="w-4 h-4 stroke-[4px]" />
                              </div>
                            )}

                            {/* Border Glow for Selected */}
                            {isSelected && (
                              <div className="absolute inset-0 border-2 border-brand/50 rounded-[24px] pointer-events-none" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className={`
                        flex items-center gap-2 px-4 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all
                        ${currentStep === 0 
                          ? 'opacity-0 pointer-events-none' 
                          : 'text-slate-500 hover:text-white hover:bg-white/5'}
                      `}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Назад
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={!answers[step.id] || (step.isMultiple && answers[step.id].length === 0)}
                      className={`
                        btn-primary flex items-center gap-2 py-3 px-8 text-[10px]
                        ${(!answers[step.id] || (step.isMultiple && answers[step.id].length === 0)) ? 'opacity-50 grayscale pointer-events-none' : ''}
                      `}
                    >
                      {currentStep === QUIZ_STEPS.length - 1 ? 'Получить расчет' : 'Далее'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="relative p-1 bg-gradient-to-b from-brand/30 to-transparent rounded-[52px]">
              <div className="bg-[#111113] p-12 md:p-20 rounded-[48px] text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(85,107,47,0.1),transparent_70%)] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-brand rounded-[32px] flex items-center justify-center text-slate-900 mx-auto mb-10 shadow-2xl shadow-brand/40 scale-110">
                    <Check className="w-12 h-12 stroke-[3px]" />
                  </div>
                  
                  <h2 className="text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
                    Расчет <span className="text-gradient">готов!</span>
                  </h2>
                  <p className="text-slate-400 text-xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                    Мы закрепили за вами выбранный подарок и <span className="text-white font-bold">скидку 15%</span>. Оставьте контакты, чтобы получить смету в WhatsApp.
                  </p>
                  
                  <form className="max-w-xl mx-auto">
                    <div className="space-y-4 mb-8">
                      <div className="relative group">
                        <input 
                          type="text" 
                          placeholder="Ваше имя"
                          required
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white text-lg focus:outline-none focus:border-brand/50 transition-all font-medium placeholder:text-slate-600 focus:bg-white/[0.05]"
                        />
                      </div>
                      <div className="relative group">
                        <input 
                          type="tel" 
                          placeholder="+7 (___) ___-__-__"
                          required
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white text-lg focus:outline-none focus:border-brand/50 transition-all font-medium placeholder:text-slate-600 focus:bg-white/[0.05]"
                        />
                      </div>
                    </div>
                    
                    <button className="btn-primary w-full py-6 text-xs flex items-center justify-center gap-4 group shadow-xl shadow-brand/20">
                      Получить смету в WhatsApp
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </button>
                    
                    <div className="mt-8 flex items-center justify-center gap-3 text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black">
                        Ваши данные в безопасности
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
