import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Shield, Droplets, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Awareness: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const statisticsData = [
    { name: 'Disease Prevention', value: 95, color: '#3B82F6' },
    { name: 'Hygiene Awareness', value: 78, color: '#10B981' },
    { name: 'Cleanliness Index', value: 85, color: '#F59E0B' },
  ];

  const pieData = [
    { name: 'Prevented', value: 85, color: '#10B981' },
    { name: 'At Risk', value: 15, color: '#EF4444' },
  ];

  const tips = [
    { icon: Droplets, key: 'tip1' },
    { icon: Shield, key: 'tip2' },
    { icon: Heart, key: 'tip3' },
    { icon: Users, key: 'tip4' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('awareness.title')}</h1>
          <p className="text-xl md:text-2xl mb-8">{t('awareness.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Importance Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Hygiene Matters</h2>
              <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('awareness.importance')}
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Building Healthier Communities</span>
              </div>
            </div>
            
            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-blue-50'}`}>
              <div className="text-center">
                <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Health First</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Proper hygiene practices prevent 60% of preventable diseases
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Swachh Bharat Section */}
        <section className="mb-16">
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-r from-orange-900/20 to-green-900/20' : 'bg-gradient-to-r from-orange-100 to-green-100'}`}>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">{t('awareness.swachhBharat')}</h2>
              <p className={`text-lg max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('awareness.swachhDesc')}
              </p>
              <div className="mt-8 flex justify-center">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold">
                  🇮🇳 स्वच्छ भारत, स्वस्थ भारत
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Charts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">{t('awareness.statistics.title')}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
              <h3 className="text-xl font-semibold mb-6 text-center">Hygiene Impact Metrics</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={statisticsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: isDark ? '#D1D5DB' : '#374151', fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fill: isDark ? '#D1D5DB' : '#374151' }} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                      border: isDark ? '1px solid #374151' : '1px solid #E5E7EB',
                      borderRadius: '8px',
                      color: isDark ? '#FFFFFF' : '#000000'
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#3B82F6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
              <h3 className="text-xl font-semibold mb-6 text-center">Disease Prevention Rate</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                      border: isDark ? '1px solid #374151' : '1px solid #E5E7EB',
                      borderRadius: '8px',
                      color: isDark ? '#FFFFFF' : '#000000'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">{t('awareness.tips.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white border border-gray-200 hover:shadow-2xl'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  <tip.icon className="h-8 w-8" />
                </div>
                <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {t(`awareness.tips.${tip.key}`)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awareness;