import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Shield, Sparkles, Award, X, CheckCircle, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      id: 'handwash',
      name: t('products.handwash.name'),
      description: t('products.handwash.description'),
      image: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.49.jpeg',
      features: ['Antibacterial', '99.9% Germ Protection', 'Moisturizing Formula'],
      color: 'from-green-500 to-green-600',
      detailedInfo: {
        fullDescription: 'Keyar Handwash provides superior antibacterial protection with a moisturizing formula that keeps your hands soft and germ-free. Perfect for daily use by the entire family.',
        specifications: ['500ml, 1L, 5L bottles available', 'pH balanced formula', 'Dermatologically tested', 'Pleasant fragrance'],
        benefits: ['Kills 99.9% of germs and bacteria', 'Moisturizes while cleaning', 'Safe for frequent use', 'Suitable for all skin types'],
        usage: ['Apply 2-3 drops on wet hands', 'Rub for 20 seconds', 'Rinse thoroughly with water', 'Use regularly for best results'],
        price: '₹85 - ₹450',
        rating: 4.8
      }
    },
    {
      id: 'phenyl',
      name: t('products.phenyl.name'),
      description: t('products.phenyl.description'),
      image: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.50.jpeg',
      features: ['Disinfectant', 'Floor Cleaner', 'Fresh Fragrance'],
      color: 'from-blue-500 to-blue-600',
      detailedInfo: {
        fullDescription: 'Keyar Phenyl is a powerful disinfectant floor cleaner that eliminates germs while leaving your floors spotless and fresh. Ideal for homes, offices, and commercial spaces.',
        specifications: ['1L, 5L containers available', 'Concentrated formula', 'Multiple fragrance options', 'Biodegradable ingredients'],
        benefits: ['Deep cleaning action', 'Long-lasting fresh fragrance', 'Kills disease-causing germs', 'Safe for all floor types'],
        usage: ['Mix 50ml in 1 bucket of water', 'Mop floors thoroughly', 'No need to rinse', 'Use daily for best hygiene'],
        price: '₹120 - ₹580',
        rating: 4.7
      }
    },
    {
      id: 'toilet',
      name: t('products.toilet.name'),
      description: t('products.toilet.description'),
      image: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.50.jpeg',
      features: ['Extra Power', 'Thick Formula', 'Stain Removal'],
      color: 'from-purple-500 to-purple-600',
      detailedInfo: {
        fullDescription: 'Keyar Toilet Cleaner with extra power formula removes tough stains, eliminates odors, and kills 99.9% germs. The thick formula clings to surfaces for deeper cleaning.',
        specifications: ['500ml, 1L bottles available', 'Thick gel formula', 'Hydrochloric acid based', 'Child-resistant cap'],
        benefits: ['Removes tough stains and limescale', 'Eliminates bad odors', 'Kills harmful bacteria and viruses', 'Fresh toilet fragrance'],
        usage: ['Apply under rim and bowl', 'Let sit for 10 minutes', 'Scrub with brush', 'Flush to rinse'],
        price: '₹95 - ₹180',
        rating: 4.9
      }
    },
    {
      id: 'glass',
      name: t('products.glass.name'),
      description: t('products.glass.description'),
      image: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.50.jpeg',
      features: ['Streak-Free', 'Crystal Clear', 'Quick Action'],
      color: 'from-cyan-500 to-cyan-600',
      detailedInfo: {
        fullDescription: 'Keyar Glass Cleaner provides streak-free, crystal-clear results on glass surfaces, mirrors, and windows. Quick-drying formula for professional results.',
        specifications: ['500ml spray bottle', 'Ammonia-based formula', 'Anti-static properties', 'Pleasant blue color'],
        benefits: ['No streaks or residue', 'Crystal clear shine', 'Quick drying formula', 'Safe for tinted glass'],
        usage: ['Spray directly on surface', 'Wipe with clean cloth', 'Buff for extra shine', 'Works on mirrors too'],
        price: '₹75 - ₹140',
        rating: 4.6
      }
    },
    {
      id: 'dish',
      name: t('products.dish.name'),
      description: t('products.dish.description'),
      image: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.50.jpeg',
      features: ['Grease Cutting', 'Gentle on Hands', 'Concentrated Formula'],
      color: 'from-yellow-500 to-yellow-600',
      detailedInfo: {
        fullDescription: 'Keyar Dishwash liquid cuts through grease and grime while being gentle on your hands. Concentrated formula means a little goes a long way.',
        specifications: ['250ml, 500ml, 1L bottles', 'Concentrated formula', 'Lemon fresh fragrance', 'Biodegradable surfactants'],
        benefits: ['Cuts grease effectively', 'Gentle on hands', 'Long-lasting suds', 'Pleasant lemon fragrance'],
        usage: ['Add few drops to sponge', 'Create rich lather', 'Wash dishes thoroughly', 'Rinse with clean water'],
        price: '₹45 - ₹165',
        rating: 4.5
      }
    },
    {
      id: 'surface',
      name: t('products.surface.name'),
      description: t('products.surface.description'),
      image: '/gallery-images/WhatsApp Image 2025-09-24 at 12.11.55.jpeg',
      features: ['Multi-Surface', '99% Germ Kill', 'Fresh Scent'],
      color: 'from-orange-500 to-orange-600',
      detailedInfo: {
        fullDescription: 'Keyar Surface Cleaner is perfect for all surfaces including kitchen counters, tables, and appliances. Kills 99% germs while leaving a fresh, clean scent.',
        specifications: ['500ml spray bottle', 'Multi-surface formula', 'Alcohol-based sanitizer', 'Various fragrances available'],
        benefits: ['Works on multiple surfaces', 'Kills 99% of germs', 'No sticky residue', 'Fresh, clean fragrance'],
        usage: ['Spray on surface', 'Wipe with clean cloth', 'No rinsing required', 'Safe for food contact surfaces'],
        price: '₹85 - ₹160',
        rating: 4.7
      }
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('products.title')}</h1>
          <p className="text-xl md:text-2xl mb-8">{t('products.subtitle')}</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4" />
              <span>99.9% Germ Protection</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <Award className="h-4 w-4" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white border border-gray-200 hover:shadow-2xl'
                }`}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`}></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r ${product.color} text-white hover:shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Learn More</span>
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-white text-center">
                    <p className="text-sm font-medium">Premium Quality Assured</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className={`relative max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } shadow-2xl`}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header with Image and Basic Info */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
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
                      {selectedProduct.features.map((feature, index) => (
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
                    {selectedProduct.detailedInfo.specifications.map((spec, index) => (
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
                    {selectedProduct.detailedInfo.benefits.map((benefit, index) => (
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
                    {selectedProduct.detailedInfo.usage.map((step, index) => (
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
                    <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r ${selectedProduct.color} text-white hover:shadow-lg transform hover:scale-105`}>
                      Contact for Orders
                    </button>
                    <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isDark 
                        ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}>
                      Download Brochure
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
            src="/gallery-images/WhatsApp Image 2025-09-24 at 12.12.11.jpeg"
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
  );
};

export default Products;