import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { isDark } = useTheme();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isDark
          ? 'text-gray-300 hover:text-white hover:bg-gray-800'
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
      }`}
      title="Switch Language"
    >
      <Globe className="h-4 w-4" />
      <span className="font-semibold">
        {i18n.language === 'en' ? 'हिंदी' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;