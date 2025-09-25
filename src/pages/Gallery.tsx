import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryImages = [
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.12.11.jpeg',
      alt: 'Keyar Product Range - Complete cleaning solutions',
      category: 'Products',
      title: 'Complete Product Range'
    },
    {
      src: '/gallery-images/Untitled-1.png',
      alt: 'Keyar Cleaning Products - Quality assured solutions',
      category: 'Bathroom Cleaners',
      title: 'Quality Cleaning Products'
    },
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.49.jpeg',
      alt: 'Keyar Handwash - Premium antibacterial protection',
      category: 'Handwash',
      title: 'Premium Handwash'
    },
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.50.jpeg',
      alt: 'Keyar Toilet Cleaner - Deep cleaning formula',
      category: 'Toilet Cleaners',
      title: 'Toilet Cleaning Solutions'
    },
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.55.jpeg',
      alt: 'Keyar Surface Cleaner - Multi-surface cleaning solution',
      category: 'Surface Cleaners',
      title: 'Surface Cleaning Products'
    },
    {
      src: '/gallery-images/2.png',
      alt: 'Keyar Phenyl - Powerful floor disinfectant',
      category: 'Floor Cleaners',
      title: 'Floor Disinfectant'
    },
    {
      src: '/gallery-images/3.png',
      alt: 'Keyar Glass Cleaner - Streak-free cleaning',
      category: 'Glass Cleaners',
      title: 'Glass Cleaning Solutions'
    },
    {
      src: '/gallery-images/4.png',
      alt: 'Keyar Dish Cleaner - Effective grease removal',
      category: 'Dish Cleaners',
      title: 'Dishwashing Solutions'
    },
    {
      src: '/gallery-images/5.png',
      alt: 'Keyar Hygiene Product Showcase',
      category: 'Showcase',
      title: 'Product Showcase'
    },
    {
      src: '/gallery-images/7.png',
      alt: 'Keyar Brand Display',
      category: 'Showcase',
      title: 'Brand Display'
    },
    {
      src: '/gallery-images/8.png',
      alt: 'Keyar Products in Action',
      category: 'White Phenyle',
      title: 'Products'
    },
    {
      src: '/gallery-images/9.png',
      alt: 'Effective Cleaning Solutions',
      category: 'Handwash',
      title: 'Cleaning Demonstration'
    }
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isDark ? 'bg-gray-800 shadow-xl' : 'bg-white border border-gray-100 shadow-lg'
                }`}
                onClick={() => setSelectedImage(image)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/api/placeholder/400/400';
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8" />
                    </div>
                    <p className="font-bold text-lg">View Details</p>
                    <p className="text-sm opacity-90">Click to explore</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {image.category}
                  </span>
                </div>

                {/* Premium Badge */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></span>
                    <span>Premium</span>
                  </div>
                </div>

                {/* Image Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <h3 className="text-white font-bold text-lg mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.alt.substring(0, 50)}...
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

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full flex flex-col lg:flex-row gap-6">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110"
              title="Close"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Image Container */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Description Panel */}
            <div className={`lg:w-96 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } rounded-lg p-6 lg:max-h-[80vh] lg:overflow-y-auto`}>
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
              </div>
              
              {/* Title */}
              <h2 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {selectedImage.title}
              </h2>
              
              {/* Description */}
              <div className={`text-sm leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p className="mb-4">{selectedImage.alt}</p>
                
                {/* Additional Details based on category */}
                {selectedImage.category === 'Products' && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Complete Product Range Overview</p>
                    <p className="mb-3">Keyar offers a comprehensive range of cleaning solutions designed to meet every hygiene need of Indian households. Our product portfolio includes premium handwash, powerful toilet cleaners, effective floor disinfectants, streak-free glass cleaners, and multi-purpose surface cleaners.</p>
                    <div className="space-y-2">
                      <p>✓ 50+ different product variants available</p>
                      <p>✓ ISO certified manufacturing processes</p>
                      <p>✓ Affordable pricing for every household</p>
                      <p>✓ Supporting Swachh Bharat Mission initiative</p>
                      <p>✓ Made with international quality standards</p>
                      <p>✓ Available across 15+ states in India</p>
                    </div>
                  </div>
                )}
                
                {selectedImage.category === 'Handwash' && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Premium Antibacterial Handwash</p>
                    <p className="mb-3">Keyar Handwash provides superior protection against germs and bacteria while keeping your hands soft and moisturized. Our advanced formula kills 99.9% of germs without drying out your skin, making it perfect for frequent daily use by the entire family.</p>
                    <div className="space-y-2">
                      <p>✓ Advanced antibacterial formula with 99.9% germ protection</p>
                      <p>✓ Enriched with moisturizing agents to prevent dryness</p>
                      <p>✓ pH balanced formula suitable for all skin types</p>
                      <p>✓ Pleasant fragrance that lasts throughout the day</p>
                      <p>✓ Available in 250ml, 500ml, 1L, and 5L bottles</p>
                      <p>✓ Dermatologically tested and clinically proven</p>
                      <p>✓ Safe for children and sensitive skin</p>
                    </div>
                  </div>
                )}
                
                {selectedImage.category === 'Toilet Cleaners' && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Deep Cleaning Toilet Solutions</p>
                    <p className="mb-3">Keyar Toilet Cleaner features an extra-power thick formula that clings to surfaces for deeper cleaning. It effectively removes tough stains, eliminates bad odors, and kills 99.9% of harmful bacteria and viruses, ensuring your toilet remains hygienic and fresh.</p>
                    <div className="space-y-2">
                      <p>✓ Extra-power thick gel formula for better adherence</p>
                      <p>✓ Removes tough stains, limescale, and mineral deposits</p>
                      <p>✓ Eliminates bad odors with long-lasting fresh fragrance</p>
                      <p>✓ Kills 99.9% of harmful bacteria, viruses, and germs</p>
                      <p>✓ Suitable for all types of toilet bowls and surfaces</p>
                      <p>✓ Easy-to-use angled nozzle for under-rim cleaning</p>
                      <p>✓ Child-resistant safety cap for added protection</p>
                    </div>
                  </div>
                )}
                
                {(selectedImage.category === 'Floor Cleaners' || selectedImage.category === 'White Phenyle') && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Powerful Floor Disinfectant</p>
                    <p className="mb-3">Keyar Phenyl is a concentrated floor cleaning solution that provides deep cleaning and disinfection. Our formula effectively removes dirt, grime, and stains while leaving floors spotless with a fresh, long-lasting fragrance that creates a pleasant indoor environment.</p>
                    <div className="space-y-2">
                      <p>✓ Powerful disinfectant action kills disease-causing germs</p>
                      <p>✓ Concentrated formula - a little goes a long way</p>
                      <p>✓ Safe for all floor types including marble, tiles, and wood</p>
                      <p>✓ Long-lasting fresh fragrance in multiple variants</p>
                      <p>✓ Biodegradable ingredients, environmentally friendly</p>
                      <p>✓ Available in 1L, 5L containers for all needs</p>
                      <p>✓ Easy mixing ratio: 50ml per bucket of water</p>
                    </div>
                  </div>
                )}
                
                {selectedImage.category === 'Surface Cleaners' && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Multi-Surface Cleaning Solution</p>
                    <p className="mb-3">Keyar Surface Cleaner is perfect for cleaning kitchen counters, dining tables, appliances, and other surfaces. Our alcohol-based formula kills 99% of germs while leaving no sticky residue, making it ideal for food contact surfaces and daily cleaning routines.</p>
                    <div className="space-y-2">
                      <p>✓ Works effectively on multiple surface types</p>
                      <p>✓ Alcohol-based sanitizer kills 99% of germs instantly</p>
                      <p>✓ No sticky residue, dries quickly without streaks</p>
                      <p>✓ Safe for food contact surfaces and appliances</p>
                      <p>✓ Fresh, clean fragrance that doesn't overpower</p>
                      <p>✓ Convenient 500ml spray bottle for easy application</p>
                      <p>✓ Perfect for daily cleaning and sanitization</p>
                    </div>
                  </div>
                )}
                
                {selectedImage.category === 'Glass Cleaners' && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Streak-Free Glass Cleaning</p>
                    <p className="mb-3">Keyar Glass Cleaner delivers professional-quality results for all glass surfaces including windows, mirrors, and glass doors. Our ammonia-based formula cuts through dirt and grime while providing crystal-clear, streak-free results that last longer.</p>
                    <div className="space-y-2">
                      <p>✓ Professional streak-free cleaning formula</p>
                      <p>✓ Crystal clear shine on all glass surfaces</p>
                      <p>✓ Quick-drying formula saves time and effort</p>
                      <p>✓ Safe for tinted glass and delicate surfaces</p>
                      <p>✓ Anti-static properties repel dust longer</p>
                      <p>✓ Pleasant blue color indicates proper application</p>
                      <p>✓ Works on mirrors, windows, car glass, and more</p>
                    </div>
                  </div>
                )}
                
                {selectedImage.category === 'Dish Cleaners' && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Effective Dishwashing Solution</p>
                    <p className="mb-3">Keyar Dishwash liquid cuts through the toughest grease and food residues while being gentle on your hands. Our concentrated formula creates rich, long-lasting suds that make dishwashing easier and more efficient, with a refreshing lemon fragrance.</p>
                    <div className="space-y-2">
                      <p>✓ Superior grease-cutting action removes tough stains</p>
                      <p>✓ Gentle on hands with moisturizing properties</p>
                      <p>✓ Concentrated formula creates long-lasting rich suds</p>
                      <p>✓ Refreshing lemon fragrance for pleasant washing</p>
                      <p>✓ Biodegradable surfactants, eco-friendly formulation</p>
                      <p>✓ Available in 250ml, 500ml, 1L bottles</p>
                      <p>✓ Effective in both hard and soft water conditions</p>
                    </div>
                  </div>
                )}
                
                {selectedImage.category === 'Bathroom Cleaners' && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Complete Bathroom Cleaning Solutions</p>
                    <p className="mb-3">Our specialized bathroom cleaners are formulated to tackle the unique challenges of bathroom hygiene. From soap scum to hard water stains, mildew to bacteria, our products ensure your bathroom remains spotless, fresh, and hygienically clean.</p>
                    <div className="space-y-2">
                      <p>✓ Specialized formula for bathroom-specific cleaning challenges</p>
                      <p>✓ Removes soap scum, hard water stains, and mineral deposits</p>
                      <p>✓ Anti-bacterial action prevents mold and mildew growth</p>
                      <p>✓ Safe for all bathroom surfaces including tiles and fixtures</p>
                      <p>✓ Fresh fragrance eliminates bathroom odors effectively</p>
                      <p>✓ Easy spray application for convenient cleaning</p>
                      <p>✓ Regular use maintains long-term bathroom hygiene</p>
                    </div>
                  </div>
                )}
                
                {(selectedImage.category === 'Showcase' || selectedImage.category === 'Demo') && (
                  <div className="space-y-3">
                    <p className="text-base font-medium mb-3">Quality Excellence & Innovation</p>
                    <p className="mb-3">Keyar represents the pinnacle of cleaning product innovation in India. Our commitment to quality, affordability, and effectiveness has made us a trusted name in households across the nation. Every product undergoes rigorous testing to ensure it meets international quality standards.</p>
                    <div className="space-y-2">
                      <p>✓ Premium quality products with international standards</p>
                      <p>✓ Trusted by over 10,000+ satisfied customers nationwide</p>
                      <p>✓ ISO certified manufacturing with strict quality control</p>
                      <p>✓ Pan-India availability through extensive distribution network</p>
                      <p>✓ Continuous research and development for product improvement</p>
                      <p>✓ Affordable pricing without compromising on quality</p>
                      <p>✓ Supporting India's cleanliness mission with innovative solutions</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Company Info */}
              <div className={`pt-4 border-t ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Manufactured by Namaste SS International Pvt. Ltd.
                </p>
                <p className={`text-xs mt-1 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Quality assured • ISO certified • Made in India
                </p>
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