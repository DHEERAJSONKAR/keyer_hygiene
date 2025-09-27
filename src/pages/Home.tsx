import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Award, Users, MapPin, Droplets, Sparkles, Heart, Star, CheckCircle, Leaf, Target, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const stats = [
    { icon: Award, value: '50+', key: 'products' },
    { icon: Users, value: '10k+', key: 'customers' },
    { icon: MapPin, value: '15+', key: 'states' },
    { icon: Shield, value: '5+', key: 'experience' },
  ];

  return (
    <div className={`transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-blue-600">{t('home.welcome').split(' ')[0]} </span>
              <span className="text-green-600">{t('home.welcome').split(' ')[1]} </span>
              <span>{t('home.welcome').split(' ').slice(2).join(' ')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-4">
              {t('home.slogan')}
            </p>
            
            <p className={`text-lg mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('home.subSlogan')}
            </p>
            
            <p className={`text-base mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('home.mission')}
            </p>
            
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {t('home.exploreProducts')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t(`home.stats.${stat.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-blue-600">Quality</span> Products for{' '}
                <span className="text-green-600">Every</span> Need
              </h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                From handwash to toilet cleaners, our comprehensive range of hygiene products 
                ensures complete cleanliness for homes and commercial spaces.
              </p>
              <Link
                to="/awareness"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Learn about hygiene importance
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'} hover:shadow-lg transition-shadow`}>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Antibacterial Protection</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  99.9% germ protection
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-green-50'} hover:shadow-lg transition-shadow`}>
                <Award className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  ISO certified products
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-orange-50'} hover:shadow-lg transition-shadow`}>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="font-semibold mb-2">Trusted by Thousands</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Happy customers nationwide
                </p>
              </div>
              
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-purple-50'} hover:shadow-lg transition-shadow`}>
                <MapPin className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Pan India Presence</h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Available across states
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-blue-600">Hygiene</span> Solutions
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive range of cleaning products designed for every space and need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow group`}>
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hand Hygiene</h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Premium handwash with antibacterial protection for daily use
              </p>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Kills 99.9% germs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Gentle on skin
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow group`}>
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6 group-hover:bg-green-200 transition-colors">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Surface Cleaning</h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Multi-surface cleaners for comprehensive home and office cleaning
              </p>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  All surface compatible
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Long-lasting freshness
                </li>
              </ul>
            </div>

            <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow group`}>
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-6 group-hover:bg-purple-200 transition-colors">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Specialized Solutions</h3>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Toilet cleaners, glass cleaners and specialized products for tough stains
              </p>
              <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Deep cleaning power
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Stain removal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-green-600">Keyar Hygiene</span>?
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              We are committed to providing the highest quality hygiene products for a cleaner India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Environmentally safe formulations that protect both your family and nature
              </p>
            </div>

            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                isDark ? 'bg-green-900/20 text-green-400' : 'bg-green-100 text-green-600'
              }`}>
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Family Safe</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Gentle formulations safe for families, including children and elderly
              </p>
            </div>

            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                isDark ? 'bg-orange-900/20 text-orange-400' : 'bg-orange-100 text-orange-600'
              }`}>
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Superior quality products manufactured with international standards
              </p>
            </div>

            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                isDark ? 'bg-purple-900/20 text-purple-400' : 'bg-purple-100 text-purple-600'
              }`}>
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Round the clock customer support for all your queries and concerns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`py-20 ${
        isDark ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-green-50'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our <span className="text-blue-600">Mission</span> & <span className="text-green-600">Vision</span>
              </h2>
              
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg mb-6`}>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Mission</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  To provide innovative, high-quality hygiene solutions that contribute to building a cleaner, 
                  healthier India while supporting the Swachh Bharat Mission.
                </p>
              </div>

              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3 text-green-600">Vision</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  To become India's most trusted hygiene brand, making quality cleaning products 
                  accessible to every household and contributing to a disease-free society.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`p-6 border-l-4 border-blue-500 ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-r-lg shadow-md`}>
                <h4 className="font-semibold mb-2">Quality Commitment</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Every product undergoes rigorous quality testing to ensure maximum effectiveness and safety
                </p>
              </div>

              <div className={`p-6 border-l-4 border-green-500 ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-r-lg shadow-md`}>
                <h4 className="font-semibold mb-2">Innovation Focus</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Continuous research and development to bring the latest hygiene technologies to India
                </p>
              </div>

              <div className={`p-6 border-l-4 border-orange-500 ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-r-lg shadow-md`}>
                <h4 className="font-semibold mb-2">Social Responsibility</h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Contributing to community health through awareness programs and affordable hygiene solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Space <span className="text-blue-600">Cleaner</span> & <span className="text-green-600">Safer</span>?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Join thousands of satisfied customers who trust Keyar Hygiene for their cleaning needs. 
            Experience the difference quality makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/contact"
              className={`inline-flex items-center px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' 
                  : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              Contact Us
              <Phone className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;