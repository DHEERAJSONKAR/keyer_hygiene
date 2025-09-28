import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title: string;
  productName?: string;
  price?: string;
  rating?: number;
  features?: string[];
  description?: string;
  specifications?: string[];
  usage?: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);


  const galleryImages: GalleryImage[] = [
    {
      src: '/gallery-images/keyar.jpeg',
      alt: 'Keyar Product Range - Complete cleaning solutions for every need',
      category: 'Complete Range',
      title: 'Complete Product Range',
      productName: 'Keyar Complete Range',
      price: '₹45 - ₹1099',
      rating: 4.8,
      features: ['50+ Product Variants', 'ISO Certified', 'Made in India', 'Pan-India Availability'],
      description: 'Comprehensive range of cleaning solutions designed to meet every hygiene need of Indian households.',
      specifications: ['Available across 15+ states', '50+ different product variants', 'ISO certified manufacturing', 'International quality standards'],
      usage: 'Choose the right product for each cleaning task for optimal results'
    },
    {
      src: '/gallery-images/Untitled-1.png',
      alt: 'Keyar Bathroom & Tiles Cleaner - Specialized bathroom cleaning solution',
      category: 'Bathroom Cleaners',
      title: 'Bathroom & Tiles Cleaner',
      productName: 'Keyar Bathroom Cleaner',
      price: '₹89 - ₹299',
      rating: 4.6,
      features: ['Anti-Bacterial Action', 'Removes Soap Scum', 'Tiles & Surfaces', 'Fresh Fragrance'],
      description: 'Specialized bathroom cleaner formulated to tackle soap scum, hard water stains, and bacterial growth.',
      specifications: ['500ml bottles available', 'pH balanced formula', 'Safe for tiles and ceramics', 'Anti-bacterial properties'],
      usage: 'Spray on surfaces, let sit 3-5 minutes, scrub if needed, rinse thoroughly'
    },
    {
      src: '/gallery-images/2.png',
      alt: 'Keyar Surface Cleaner - Powerful multi-surface disinfectant',
      category: 'Surface Cleaners',
      title: 'Surface Disinfectant',
      productName: 'Keyar Surface Cleaner',
      price: '₹99 - ₹999',
      rating: 4.7,
      features: ['Multi-Surface', 'Instant Action', 'Safe Formula', 'Pleasant Fragrance'],
      description: 'Effective surface cleaner for counters, appliances, and daily cleaning needs.',
      specifications: ['500ml capacity', 'Alcohol-based sanitizer', 'Quick-dry formula', 'Multiple surface compatibility'],
      usage: 'Spray directly, wipe clean, safe for food contact surfaces'
    },
    {
      src: '/gallery-images/3.png',
      alt: 'Keyar Toilet Cleaner - Professional strength cleaning formula',
      category: 'Toilet Cleaners',
      title: 'Professional Toilet Cleaner',
      productName: 'Keyar Toilet Cleaner',
      price: '₹99 - ₹799',
      rating: 4.9,
      features: ['Professional Strength', 'Thick Formula', 'Under-rim Action', 'Fresh Fragrance'],
      description: 'Professional-grade toilet cleaner with thick formula for superior cleaning power.',
      specifications: ['Extra thick gel', 'Under-rim cleaning nozzle', 'Stain removal technology', 'Fresh toilet fragrance'],
      usage: 'Apply around bowl and under rim, wait 10 minutes, brush and flush'
    },
    {
      src: '/gallery-images/4.png',
      alt: 'Keyar Glass Cleaner - Crystal clear streak-free cleaning',
      category: 'Glass Cleaners',
      title: 'Crystal Clear Glass Cleaner',
      productName: 'Keyar Glass Cleaner',
      price: '₹99 - ₹999',
      rating: 4.6,
      features: ['Streak-Free Formula', 'Crystal Clear Results', 'Anti-Static', 'Quick Drying'],
      description: 'Professional streak-free glass cleaner for windows, mirrors, and glass surfaces.',
      specifications: ['500ml spray bottle', 'Ammonia-based formula', 'Blue indicator color', 'Anti-static properties'],
      usage: 'Spray on glass surface, wipe with clean cloth, buff for extra shine'
    },
    {
      src: '/gallery-images/5.png',
      alt: 'Keyar Liquid Detergent Gel - Premium concentrated cleaning power',
      category: 'Laundry Care',
      title: 'Liquid Detergent Gel',
      productName: 'Keyar Liquid Detergent Gel',
      price: '₹45 - ₹165',
      rating: 4.5,
      features: ['Ultra Concentrated', 'Advanced Stain Removal', 'Fabric Care', 'Long Lasting Fragrance'],
      description: 'Premium concentrated liquid detergent gel with advanced stain removal technology.',
      specifications: ['500ml, 1L, 2L, 5L containers', '4x concentrated formula', 'Enzyme technology', 'Biodegradable ingredients'],
      usage: 'Machine wash: 30ml per full load, Hand wash: 10ml per bucket'
    },
    {
      src: '/gallery-images/7.png',
      alt: 'Keyar Brand Product Display - Quality cleaning solutions showcase',
      category: 'Brand Showcase',
      title: 'Brand Product Display',
      productName: 'Keyar Brand Range',
      price: '₹45 - ₹1099',
      rating: 4.7,
      features: ['Premium Quality', 'Wide Range', 'Trusted Brand', 'Value for Money'],
      description: 'Keyar brand showcase displaying our commitment to quality and comprehensive cleaning solutions.',
      specifications: ['Complete product portfolio', 'Quality assured products', 'Competitive pricing', 'Wide availability'],
      usage: 'Choose appropriate products based on your specific cleaning needs'
    },
    {
      src: '/gallery-images/8.png',
      alt: 'Keyar White Phenyle - Powerful floor disinfectant with fresh fragrance',
      category: 'Floor Cleaners',
      title: 'White Phenyle Disinfectant',
      productName: 'Keyar White Phenyle',
      price: '₹69 - ₹329',
      rating: 4.7,
      features: ['Powerful Disinfectant', 'Floor Cleaner', 'Fresh Fragrance', 'Multi-Surface'],
      description: 'Concentrated white phenyle floor cleaner that eliminates germs and leaves floors spotless.',
      specifications: ['1L, 5L containers', 'Concentrated formula', 'Multiple fragrances', 'Biodegradable ingredients'],
      usage: 'Mix 50ml in 1 bucket water, mop floors thoroughly, no rinsing needed'
    },
    {
      src: '/gallery-images/9.png',
      alt: 'Keyar Handwash - Advanced antibacterial protection for daily use',
      category: 'Handwash',
      title: 'Advanced Handwash Formula',
      productName: 'Keyar Advanced Handwash',
      price: '₹149 - ₹1099',
      rating: 4.8,
      features: ['Advanced Formula', 'Antibacterial Action', 'Moisturizing', 'Family Safe'],
      description: 'Advanced antibacterial handwash formula perfect for frequent daily use by the entire family.',
      specifications: ['Multiple size options', 'Advanced antibacterial technology', 'Skin-friendly pH', 'Clinically proven'],
      usage: 'Use regularly throughout the day, especially before meals and after activities'
    },
    {
      src: '/gallery-images/1.png',
      alt: 'Keyar Dish Cleaner - Professional utensil cleaner for tough grease removal',
      category: 'Dish Cleaners',
      title: 'Professional Dish Cleaner',
      productName: 'Keyar Dish Cleaner',
      price: '₹129 - ₹999',
      rating: 4.8,
      features: ['Heavy Duty Cleaning', 'Grease Removal', 'Utensil Safe', 'Concentrated Formula'],
      description: 'Powerful concentrated formula designed specifically for cleaning dishes, utensils, and cookware. Removes tough grease and oil stains while being gentle on hands.',
      specifications: ['Available in 250ml, 500ml, 1L bottles', 'Concentrated liquid formula', 'Biodegradable ingredients', 'Pleasant lemon fragrance', 'Non-toxic formula', 'Suitable for all utensil types'],
      usage: 'Add 5ml to sink full of water, soak dishes for 2-3 minutes for tough stains, scrub gently with sponge, rinse thoroughly with clean water'
    }
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/api/placeholder/400/400';
    target.alt = 'Image temporarily unavailable';
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
              {t('gallery.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              {t('gallery.subtitle')}
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping delay-500"></div>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
                <span>Made in India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className={`py-12 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-r from-green-50 to-blue-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Explore Our Products
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Filter by category to discover our range of cleaning solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-xl scale-105'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100 shadow-lg border border-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className={`pb-16 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800 shadow-xl' : 'bg-white border border-gray-100 shadow-lg'
                }`}
                onClick={() => setSelectedImage(image)}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="aspect-square overflow-hidden relative bg-white">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 p-3"
                    loading="lazy"
                    onError={handleImageError}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 via-teal-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8" />
                    </div>
                    <p className="font-bold text-lg mb-1">View Product Details</p>
                    <p className="text-sm opacity-90">Full specifications & pricing</p>
                    {image.rating && (
                      <div className="flex items-center justify-center space-x-1 mt-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-semibold">{image.rating}/5 Rating</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                    {image.category}
                  </span>
                </div>

                {/* Premium Badge */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></span>
                    <span className="hidden sm:inline">Premium</span>
                    <span className="sm:hidden">★</span>
                  </div>
                </div>

                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 sm:p-4">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1">
                      {image.productName || image.title}
                    </h3>
                    {image.price && (
                      <p className="text-green-400 text-xs sm:text-sm font-semibold mb-1">
                        {image.price}
                      </p>
                    )}
                    {image.rating && (
                      <div className="flex items-center space-x-1 mb-1">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-white text-xs">{image.rating}/5</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                    {image.description || image.alt}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
          
          {/* Show message when no images */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className={`text-6xl mb-4 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>📸</div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                No images found
              </h3>
              <p className={`${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-0 sm:p-4 overflow-auto">
          <div className="relative w-full h-full sm:w-auto sm:h-auto sm:max-w-7xl mx-auto flex flex-col lg:flex-row gap-0 sm:gap-6 sm:max-h-[95vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110"
              title="Close"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center min-h-0 lg:max-w-[60%] bg-white sm:bg-transparent p-4 sm:p-0">
              <div className="relative w-full sm:bg-white sm:rounded-xl sm:p-4 sm:shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[40vh] sm:max-h-[70vh] object-contain sm:rounded-lg"
                  onError={handleImageError}
                />
                {/* Image Quality Badge */}
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  HD Quality
                </div>
              </div>
            </div>
            
            {/* Enhanced Product Details Panel */}
            <div className={`flex-1 sm:flex-none lg:w-[500px] lg:max-w-[40%] ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } sm:rounded-xl p-4 sm:p-6 lg:max-h-[90vh] overflow-y-auto sm:shadow-2xl`}>
              
              {/* Header Section */}
              <div className="mb-6">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                  {selectedImage.rating && (
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {selectedImage.rating}/5
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Product Name & Price */}
                <h2 className={`text-xl sm:text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedImage.productName || selectedImage.title}
                </h2>
                
                {selectedImage.price && (
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {selectedImage.price}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      MRP (Inclusive of all taxes)
                    </span>
                  </div>
                )}
              </div>

              {/* Product Description */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Product Description
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedImage.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedImage.features && (
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedImage.features.map((feature: string, index: number) => (
                      <div key={index} className={`flex items-center space-x-2 p-2 rounded-lg ${
                        isDark ? 'bg-gray-700' : 'bg-gray-50'
                      }`}>
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications */}
              {selectedImage.specifications && (
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Product Specifications
                  </h3>
                  <ul className="space-y-2">
                    {selectedImage.specifications.map((spec: string, index: number) => (
                      <li key={index} className={`flex items-start space-x-2 text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Usage Instructions */}
              {selectedImage.usage && (
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    How to Use
                  </h3>
                  <div className={`p-4 rounded-lg border-l-4 border-blue-500 ${
                    isDark ? 'bg-gray-700' : 'bg-blue-50'
                  }`}>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedImage.usage}
                    </p>
                  </div>
                </div>
              )}

              {/* Company Information */}
              <div className={`pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="text-center">
                  <p className={`text-sm font-semibold mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Manufactured by
                  </p>
                  <p className={`text-lg font-bold text-blue-600 mb-2`}>
                    Namaste SS International Pvt. Ltd.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className={`px-2 py-1 rounded-full ${isDark ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-700'}`}>
                      ISO Certified
                    </span>
                    <span className={`px-2 py-1 rounded-full ${isDark ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-700'}`}>
                      Made in India
                    </span>
                    <span className={`px-2 py-1 rounded-full ${isDark ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-700'}`}>
                      Quality Assured
                    </span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Available at your nearest store or contact us for bulk orders
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-sm">
                      Contact for Orders
                    </button>
                    <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm">
                      Find Store
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Visual Story</h2>
          <p className={`text-lg max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Through our gallery, witness the journey of Keyar Hygiene products that are making 
            Indian households cleaner and healthier. Each image tells a story of quality, 
            innovation, and our commitment to the Swachh Bharat mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-lg font-semibold mb-2">Product Variants</div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive cleaning solutions
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-lg font-semibold mb-2">States Coverage</div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Pan-India distribution network
              </p>
            </div>
            
            <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="text-4xl font-bold text-purple-600 mb-2">10k+</div>
              <div className="text-lg font-semibold mb-2">Happy Customers</div>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Trusted by families nationwide
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Gallery;