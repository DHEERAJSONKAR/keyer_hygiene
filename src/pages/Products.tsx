import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Shield, Sparkles, Award, X, CheckCircle, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      id: 'handwash',
      name: t('products.handwash.name'),
      description: t('products.handwash.description'),
      image: '/gallery-images/9.png',
      features: ['Antibacterial', '99.9% Germ Protection', 'Moisturizing Formula'],
      color: 'from-green-500 to-green-600',
      detailedInfo: {
        fullDescription: 'Keyar Handwash provides superior antibacterial protection with a moisturizing formula that keeps your hands soft and germ-free. Perfect for daily use by the entire family.',
        specifications: ['500ml, 1L, 5L bottles available', 'pH balanced formula', 'Dermatologically tested', 'Pleasant fragrance'],
        benefits: ['Kills 99.9% of germs and bacteria', 'Moisturizes while cleaning', 'Safe for frequent use', 'Suitable for all skin types'],
        usage: ['Apply 2-3 drops on wet hands', 'Rub for 20 seconds', 'Rinse thoroughly with water', 'Use regularly for best results'],
        price: '₹149 - ₹1099',
        rating: 4.8
      }
    },
    {
      id: 'white-phenyl',
      name: 'White Phenyle',
      description: 'Powerful disinfectant for floors and surfaces',
      image: '/gallery-images/8.png',
      features: ['Disinfectant', 'Floor Cleaner', 'Fresh Fragrance', 'Multi-Surface'],
      color: 'from-blue-500 to-blue-600',
      detailedInfo: {
        fullDescription: 'Keyar White Phenyle is a powerful disinfectant floor cleaner that eliminates germs while leaving your floors spotless and fresh. Perfect for homes, offices, and commercial spaces with superior cleaning power.',
        specifications: ['1L, 5L containers available', 'Concentrated white formula', 'Multiple fragrance options', 'Biodegradable ingredients', 'Non-staining formula'],
        benefits: ['Deep cleaning action', 'Long-lasting fresh fragrance', 'Kills 99.9% disease-causing germs', 'Safe for all floor types', 'Leaves floors streak-free'],
        usage: ['Mix 50ml in 1 bucket of water', 'Mop floors thoroughly', 'No need to rinse', 'Use daily for best hygiene', 'Ideal for bathroom and kitchen floors'],
        price: '₹69 - ₹329',
        rating: 4.7
      }
    },
    {
      id: 'toilet',
      name: t('products.toilet.name'),
      description: t('products.toilet.description'),
      image: '/gallery-images/3.png',
      features: ['Extra Power', 'Thick Formula', 'Stain Removal'],
      color: 'from-purple-500 to-purple-600',
      detailedInfo: {
        fullDescription: 'Keyar Toilet Cleaner with extra power formula removes tough stains, eliminates odors, and kills 99.9% germs. The thick formula clings to surfaces for deeper cleaning.',
        specifications: ['500ml, 1L bottles available', 'Thick gel formula', 'Hydrochloric acid based', 'Child-resistant cap'],
        benefits: ['Removes tough stains and limescale', 'Eliminates bad odors', 'Kills harmful bacteria and viruses', 'Fresh toilet fragrance'],
        usage: ['Apply under rim and bowl', 'Let sit for 10 minutes', 'Scrub with brush', 'Flush to rinse'],
        price: '₹99 - ₹799',
        rating: 4.9
      }
    },
    {
      id: 'glass',
      name: t('products.glass.name'),
      description: t('products.glass.description'),
      image: '/gallery-images/4.png',
      features: ['Streak-Free', 'Crystal Clear', 'Quick Action'],
      color: 'from-cyan-500 to-cyan-600',
      detailedInfo: {
        fullDescription: 'Keyar Glass Cleaner provides streak-free, crystal-clear results on glass surfaces, mirrors, and windows. Quick-drying formula for professional results.',
        specifications: ['500ml spray bottle', 'Ammonia-based formula', 'Anti-static properties', 'Pleasant blue color'],
        benefits: ['No streaks or residue', 'Crystal clear shine', 'Quick drying formula', 'Safe for tinted glass'],
        usage: ['Spray directly on surface', 'Wipe with clean cloth', 'Buff for extra shine', 'Works on mirrors too'],
        price: '₹99 - ₹999',
        rating: 4.6
      }
    },
    {
      id: 'detergent-gel',
      name: 'Liquid Detergent Gel',
      description: 'Premium concentrated liquid detergent gel for superior cleaning with advanced stain removal technology',
      image: '/gallery-images/5.png',
      features: ['Ultra Concentrated Gel', 'Advanced Stain Removal', 'Fabric Care Formula', 'Long Lasting Fragrance'],
      color: 'from-blue-500 to-green-500',
      detailedInfo: {
        fullDescription: 'Keyar Liquid Detergent Gel is a premium concentrated formula that delivers powerful cleaning performance while caring for your fabrics. Our advanced gel technology penetrates deep into fabric fibers to remove tough stains, dirt, and odors while maintaining fabric softness and color vibrancy.',
        specifications: ['Available in 500ml, 1L, 2L, 5L containers', 'Ultra-concentrated gel formula - 4x more cleaning power', 'Active enzyme technology for stain removal', 'pH balanced for fabric care', 'Biodegradable and eco-friendly ingredients', 'Anti-bacterial properties', 'Works in all water types'],
        benefits: ['Removes tough stains like oil, grease, mud, and food marks', 'Maintains fabric softness and color brightness', 'Deep cleaning action with gentle fabric care', 'Long-lasting fresh fragrance', 'Highly economical - concentrated formula lasts longer', 'Suitable for both hand wash and machine wash', 'Anti-bacterial protection for hygiene'],
        usage: ['For Machine Wash: Use 30ml gel for 1 full load', 'For Hand Wash: Mix 10ml gel in bucket of water', 'For tough stains: Apply directly and let sit for 5 minutes', 'Wash as usual with normal water temperature', 'Works effectively in cold water too'],
        price: '₹99 - ₹999',
        rating: 4.5
      }
    },
    {
      id: 'bathroom-cleaner',
      name: 'Bathroom Cleaner ',
      description: 'Specialized bathroom cleaner formulated to tackle the unique cleaning challenges of bathroom hygiene',
      image: '/gallery-images/Untitled-1.png',
      features: ['Anti-Bacterial Action', 'Removes Soap Scum', 'Tiles & Surfaces', 'Fresh Fragrance'],
      color: 'from-red-500 to-pink-600',
      detailedInfo: {
        fullDescription: 'Keyar Bathroom Cleaner & Tiles Cleaner is specially formulated to handle all bathroom cleaning challenges. From soap scum and hard water stains to mildew and bacterial growth, this powerful cleaner ensures your bathroom remains spotless, hygienic, and fresh.',
        specifications: ['Available in 500ml bottles', 'Specialized formula for bathroom surfaces', 'Anti-bacterial and anti-fungal properties', 'Safe for tiles, ceramics, and fixtures', 'pH balanced for different surface materials', 'Contains lime scale removal agents', 'Pleasant bathroom-fresh fragrance'],
        benefits: ['Removes soap scum, hard water stains, and mineral deposits', 'Anti-bacterial action prevents bacterial and fungal growth', 'Safe for all bathroom surfaces including tiles and fixtures', 'Eliminates bad odors and leaves fresh fragrance', 'Easy application with effective cleaning power', 'Prevents mildew and mold formation', 'Restores shine to tiles and ceramic surfaces'],
        usage: ['Spray directly on bathroom surfaces, tiles, and fixtures', 'For tough stains, let it sit for 3-5 minutes', 'Scrub with brush or sponge if needed', 'Rinse thoroughly with water', 'Use regularly to maintain bathroom hygiene', 'Ensure good ventilation while using'],
        price: '₹89 - ₹299',
        rating: 4.6
      }
    },
    {
      id: 'surface',
      name: t('products.surface.name'),
      description: t('products.surface.description'),
      image: '/gallery-images/2.png',
      features: ['Multi-Surface', '99% Germ Kill', 'Fresh Scent'],
      color: 'from-orange-500 to-orange-600',
      detailedInfo: {
        fullDescription: 'Keyar Surface Cleaner is perfect for all surfaces including kitchen counters, tables, and appliances. Kills 99% germs while leaving a fresh, clean scent.',
        specifications: ['500ml spray bottle', 'Multi-surface formula', 'Alcohol-based sanitizer', 'Various fragrances available'],
        benefits: ['Works on multiple surfaces', 'Kills 99% of germs', 'No sticky residue', 'Fresh, clean fragrance'],
        usage: ['Spray on surface', 'Wipe with clean cloth', 'No rinsing required', 'Safe for food contact surfaces'],
        price: '₹99 - ₹999',
        rating: 4.7
      }
    },
    {
      id: 'dish-cleaner',
      name: 'Dish Cleaner',
      description: 'Professional dish and utensil cleaner for tough stains and grease removal',
      image: '/gallery-images/1.png',
      features: ['Heavy Duty Cleaning', 'Grease Removal', 'Utensil Safe', 'Concentrated Formula'],
      color: 'from-yellow-500 to-orange-600',
      detailedInfo: {
        fullDescription: 'Keyar Dish Cleaner is a powerful concentrated formula designed specifically for cleaning dishes, utensils, and cookware. It effectively removes tough grease, oil stains, and food residues while being gentle on your hands and safe for all types of utensils.',
        specifications: ['Available in 250ml, 500ml, 1L bottles', 'Concentrated liquid formula', 'Biodegradable ingredients', 'Pleasant lemon fragrance', 'Non-toxic formula', 'Suitable for all utensil types'],
        benefits: ['Removes tough grease and oil stains', 'Gentle on hands with moisturizing agents', 'Concentrated formula - little goes a long way', 'Safe for all cookware including non-stick', 'Antibacterial properties for hygiene', 'Pleasant fragrance leaves dishes fresh', 'Economical and long-lasting'],
        usage: ['Add 5ml to sink full of water', 'Soak dishes for 2-3 minutes for tough stains', 'Scrub gently with sponge or brush', 'Rinse thoroughly with clean water', 'For heavy grease, apply directly and scrub'],
        price: '₹129 - ₹999',
        rating: 4.8
      }
    }
  ];

  // Auto-slide effect
  React.useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, products.length]);

  // Debug effect to monitor selectedProduct changes
  React.useEffect(() => {
    console.log('=== SELECTED PRODUCT CHANGED ===');
    console.log('selectedProduct:', selectedProduct);
    console.log('selectedProduct type:', typeof selectedProduct);
    console.log('selectedProduct null check:', selectedProduct === null);
    console.log('selectedProduct truthy check:', !!selectedProduct);
    if (selectedProduct) {
      console.log('Modal should be visible now for product:', selectedProduct.name);
      console.log('Product details:', selectedProduct.detailedInfo);
    } else {
      console.log('Modal should be hidden now');
    }
  }, [selectedProduct]);

  // Force re-render when selectedProduct changes
  const [modalKey, setModalKey] = React.useState(0);
  React.useEffect(() => {
    if (selectedProduct) {
      setModalKey(prev => prev + 1);
    }
  }, [selectedProduct]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% { transform: scale(0.9); }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slide-up-fade {
          from {
            opacity: 0;
            transform: translateY(100px) rotateX(90deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        
        .animate-slide-up-fade {
          animation: slide-up-fade 0.8s ease-out;
        }
        
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }
        
        .glass-morphism {
          backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, #10b981, #14b8a6, #3b82f6);
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .text-shimmer {
          background: linear-gradient(
            45deg,
            #10b981,
            #14b8a6,
            #3b82f6,
            #10b981
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
        
        @media (max-width: 768px) {
          .animate-fade-in-up {
            animation-duration: 0.8s;
          }
          
          .hover-lift:hover {
            transform: translateY(-4px) scale(1.01);
          }
        }
      `}</style>
      
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
              {t('products.title')}
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-green-100 max-w-4xl mx-auto leading-relaxed font-light">
              {t('products.subtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              {[
                { icon: Shield, text: "99.9% Germ Protection", delay: "0ms" },
                { icon: Award, text: "ISO Certified", delay: "200ms" },
                { icon: Sparkles, text: "Premium Quality", delay: "400ms" }
              ].map((badge, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: badge.delay }}
                >
                  <badge.icon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-12">
              <div className="animate-bounce">
                <svg className="h-6 w-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Our Products
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            <p className={`text-xl mt-6 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Discover our premium range of cleaning solutions designed for modern Indian households
            </p>
          </div>

          {/* Enhanced Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800 shadow-xl border border-gray-700' : 'bg-white border border-gray-100 shadow-lg'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 p-4"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-gray-900">Premium</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-xs font-bold">{product.detailedInfo.rating}</span>
                    </div>
                  </div>

                  {/* Interactive Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-bold mb-2">Click to Learn More</p>
                      <div className="flex justify-center space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className={`w-2 h-2 bg-white rounded-full animate-pulse`} style={{ animationDelay: `${i * 200}ms` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {product.name}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`text-xs px-3 py-1 rounded-full transition-all duration-300 hover:scale-110 ${
                            isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-green-600">{product.detailedInfo.price}</span>
                    <span className={`ml-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Starting from</span>
                  </div>

                  {/* CTA Button */}
                  <button 
                    type="button"
                    onClick={() => {
                      console.log('=== LEARN MORE BUTTON CLICKED ===');
                      console.log('Product:', product.name);
                      console.log('Product ID:', product.id);
                      console.log('Current selectedProduct:', selectedProduct);
                      
                      // Force update by setting to null first, then to product
                      setSelectedProduct(null);
                      setTimeout(() => {
                        setSelectedProduct(product);
                        console.log('Modal should open now for:', product.name);
                      }, 10);
                    }}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 bg-gradient-to-r ${product.color} hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-blue-300/50 flex items-center justify-center space-x-3 cursor-pointer`}
                  >
                    <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    <span>Learn More</span>
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${product.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center">
            <div className={`inline-block p-8 rounded-3xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-xl`}>
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Our experts are here to help you find the perfect cleaning solution for your needs.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Contact Our Experts</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Debug Modal State */}
      {selectedProduct && (
        <div className="fixed top-4 left-4 bg-red-500 text-white p-2 rounded z-[10000] text-sm">
          Modal Active: {selectedProduct.name}
        </div>
      )}

      {/* Enhanced Product Detail Modal */}
      {selectedProduct && (
        <div key={modalKey} className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
          <div 
            className="fixed inset-0"
            onClick={() => setSelectedProduct(null)}
          />
          <div className={`relative max-w-6xl w-full max-h-[95vh] overflow-y-auto rounded-3xl ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-2xl animate-bounce-in`}>
            {/* Enhanced Close Button */}
            <button
              onClick={() => {
                console.log('Close button clicked');
                setSelectedProduct(null);
              }}
              className={`absolute top-6 right-6 z-20 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 ${
                isDark ? 'bg-gray-700 hover:bg-red-600 text-white' : 'bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600'
              } shadow-lg backdrop-blur-sm`}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 shimmer-effect rounded-3xl pointer-events-none"></div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header with Image and Basic Info */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-64 object-contain rounded-xl"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(selectedProduct.detailedInfo.rating) ? 'fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {selectedProduct.detailedInfo.rating} out of 5
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {selectedProduct.detailedInfo.price}
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.features.map((feature: string, index: number) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Product Description</h3>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedProduct.detailedInfo.fullDescription}
                </p>
              </div>

              {/* Specifications, Benefits, Usage in Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Specifications */}
                <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    Specifications
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.detailedInfo.specifications.map((spec: string, index: number) => (
                      <li key={index} className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} flex items-start`}>
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.detailedInfo.benefits.map((benefit: string, index: number) => (
                      <li key={index} className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} flex items-start`}>
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage Instructions */}
                <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 text-orange-600 mr-2" />
                    How to Use
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.detailedInfo.usage.map((step: string, index: number) => (
                      <li key={index} className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} flex items-start`}>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'} mb-6`}>
                  <h4 className="text-lg font-semibold mb-2">Ready to Experience Keyar Quality?</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Contact us for bulk orders, distribution opportunities, or product inquiries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => {
                        setSelectedProduct(null);
                        navigate('/contact');
                      }}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r ${selectedProduct.color} text-white hover:shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2`}
                    >
                      <span>Contact for Orders</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => {
                        // Create product-specific brochure content
                        const brochureContent = `
KEYAR HYGIENE PRODUCTS
${selectedProduct.name} - Product Brochure

Product Description:
${selectedProduct.detailedInfo.fullDescription}

Key Features:
${selectedProduct.features.map((feature: string) => `• ${feature}`).join('\n')}

Specifications:
${selectedProduct.detailedInfo.specifications.map((spec: string) => `• ${spec}`).join('\n')}

Benefits:
${selectedProduct.detailedInfo.benefits.map((benefit: string) => `• ${benefit}`).join('\n')}

Usage Instructions:
${selectedProduct.detailedInfo.usage.map((step: string, index: number) => `${index + 1}. ${step}`).join('\n')}

Price Range: ${selectedProduct.detailedInfo.price}
Customer Rating: ${selectedProduct.detailedInfo.rating}/5.0

Contact Information:
Company: Namaste SS International Pvt. Ltd.
Email: info@keyarhygiene.com
Phone: +91-XXXXXXXXXX

Visit us at: www.keyarhygiene.com

© 2024 Keyar Hygiene Products. All rights reserved.
                        `;

                        // Create and download the brochure
                        const blob = new Blob([brochureContent], { type: 'text/plain' });
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `Keyar-${selectedProduct.name.replace(/\s+/g, '-')}-Brochure.txt`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                        
                        console.log('Brochure downloaded for:', selectedProduct.name);
                      }}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        isDark 
                          ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                      } flex items-center justify-center space-x-2 hover:scale-105 active:scale-95`}
                    >
                      <span>Download Brochure</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Info Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/gallery-images/keyar.jpeg"
            alt="Keyar Products Range"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-8"
          />
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Namaste SS International Pvt. Ltd.</h2>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Your trusted partner for comprehensive hygiene solutions. We manufacture and distribute 
              high-quality cleaning products that meet international standards while remaining affordable 
              for every Indian household.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  All products undergo rigorous quality testing
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Certified Products</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  ISO certified manufacturing processes
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
                <Sparkles className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Premium Formula</h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Advanced formulations for better results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Products;