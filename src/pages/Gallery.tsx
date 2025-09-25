import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ZoomIn } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.12.11.jpeg',
      alt: 'Keyar Product Range - Complete cleaning solutions',
      category: 'Products'
    },
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.10.32.jpeg',
      alt: 'Keyar Cleaning Products - Quality assured solutions',
      category: 'Products'
    },
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.49.jpeg',
      alt: 'Keyar Handwash - Premium antibacterial protection',
      category: 'Handwash'
    },
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.50.jpeg',
      alt: 'Keyar Cleaning Solutions - Professional grade cleaners',
      category: 'Cleaners'
    },
    {
      src: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.55.jpeg',
      alt: 'Keyar Surface Cleaner - Multi-surface cleaning solution',
      category: 'Surface Cleaners'
    }
  ];

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('gallery.title')}</h1>
          <p className="text-xl md:text-2xl mb-8">{t('gallery.subtitle')}</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  isDark ? 'bg-gray-800' : 'bg-white border border-gray-200'
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <ZoomIn className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-semibold">View Image</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
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
  );
};

export default Gallery;