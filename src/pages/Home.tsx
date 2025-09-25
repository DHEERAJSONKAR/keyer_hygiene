import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Shield, Award, Users, MapPin } from 'lucide-react';
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
              {t('home.cta')}
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
    </div>
  );
};

export default Home;