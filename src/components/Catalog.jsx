import React, { useState, useEffect } from 'react';
import sanityClient from '../sanityClient';
import * as LucideIcons from 'lucide-react';
import {
  ArrowUpRight, 
  CheckCircle2,
  Maximize2,
  CircleDot,
  Filter,
  Flame,
  LayoutGrid,
  X,
  Info,
  Phone,
  Clock,
  Users,
  Ruler,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  TreePine
} from 'lucide-react';

const Catalog = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const categoryQuery = `*[_type == "category"]{
      "id": slug.current,
      "label": title,
      "iconName": iconName
    }`;

    const productQuery = `*[_type == "product"]{
      _id,
      title,
      price,
      "images": images[].asset->url,
      description,
      specs,
      features,
      badge,
      "category": (categories[0]->slug).current
    }`;

    Promise.all([
      sanityClient.fetch(categoryQuery),
      sanityClient.fetch(productQuery)
    ]).then(([fetchedCategories, fetchedProducts]) => {
      const categoriesWithIcons = fetchedCategories.map(cat => {
        const IconComponent = LucideIcons[cat.iconName] || HelpCircle;
        return { ...cat, icon: IconComponent };
      });

      const allCategory = {
          id: 'all', 
          label: 'Все модели', 
          icon: LayoutGrid
      };

      setCategories([allCategory, ...categoriesWithIcons]);
      setProducts(fetchedProducts);
    }).catch(console.error);

  }, []);

  useEffect(() => {
    if (selectedProduct) {
      setActiveImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProduct) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProduct) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="section-padding bg-gradient-to-b from-[#0a0a0b] to-[#111112] relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Выберите свою <br />
              <span className="text-gradient">идеальную баню</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  group flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all duration-300
                  ${activeCategory === cat.id 
                    ? 'bg-brand border-brand text-white shadow-lg shadow-brand/20' 
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:border-brand/50 hover:text-white'}
                `}
              >
                <cat.icon className={`w-4 h-4 ${activeCategory === cat.id ? 'text-white' : 'group-hover:text-brand'}`} />
                <span className="text-[11px] font-black uppercase tracking-widest">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product._id}
              onClick={() => setSelectedProduct(product)}
              className="group relative bg-[#111112] border border-white/10 rounded-[40px] overflow-hidden cursor-pointer hover:border-brand/30 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={product.images?.[0] || '/bochka.png'} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111112] via-transparent to-transparent opacity-80" />
                
                {product.badge && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-brand text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl">
                    {product.badge}
                  </div>
                )}

                <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-brand text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                    {categories.find(c => c.id === product.category)?.label}
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{product.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users className="w-3 h-3 text-brand" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{product.specs?.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Ruler className="w-3 h-3 text-brand" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{product.specs?.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex items-center justify-between border-t border-white/5">
                <div className="text-xl font-black text-white">{product.price}</div>
                <div className="text-brand text-[9px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Подробнее
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedProduct(null)}
          />
          
          <div className="relative w-full max-w-6xl bg-[#111112] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-500 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 z-50 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] bg-slate-900">
                <img 
                  src={selectedProduct.images?.[activeImageIndex] || '/bochka.png'} 
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                
                {(selectedProduct.images?.length || 0) > 1 && (
                  <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-4">
                    <button 
                      onClick={prevImage}
                      className="w-12 h-12 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-white transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest">
                      {activeImageIndex + 1} / {selectedProduct.images.length}
                    </div>
                    <button 
                      onClick={nextImage}
                      className="w-12 h-12 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand hover:text-white transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-8 md:p-12 lg:p-16">
                <div className="text-brand text-xs font-black uppercase tracking-[0.3em] mb-4">
                  {categories.find(c => c.id === selectedProduct.category)?.label}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                  {selectedProduct.title}
                </h2>
                <div className="text-3xl font-black text-brand mb-8">{selectedProduct.price}</div>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  {selectedProduct.specs && Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-2">
                      <div className="text-slate-500 text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                        {key === 'capacity' && <Users className="w-3 h-3" />}
                        {key === 'length' && <Ruler className="w-3 h-3" />}
                        {key === 'time' && <Clock className="w-3 h-3" />}
                        {key === 'material' && <TreePine className="w-3 h-3" />}
                        {key === 'diameter' && <Maximize2 className="w-3 h-3" />}
                        {key === 'capacity' ? 'Вместимость' : 
                         key === 'length' ? 'Длина' : 
                         key === 'time' ? 'Срок сборки' : 
                         key === 'material' ? 'Материал' : 'Диаметр'}
                      </div>
                      <div className="text-white text-sm font-black uppercase tracking-tight">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-10">
                  <div className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Особенности:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-brand text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-brand/20">
                    Хочу такую же
                  </button>
                  <button className="flex-1 bg-white/[0.03] border border-white/10 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                    <Phone className="w-4 h-4" />
                    Консультация
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalog;
