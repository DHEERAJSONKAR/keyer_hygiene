import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/gallery-images/logo.jpeg" 
                alt="Keyar Logo" 
                className="h-10 w-14 rounded-lg object-contain bg-white shadow-md border border-gray-200"
              />
              <span className="text-xl font-bold text-white">Keyar</span>
            </div>
            <p className="text-sm mb-4">{t('footer.tagline')}</p>
            <p className="text-xs">{t('contact.iInfo.company')}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('nav.contact')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>8354818383, 8429398383</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('home.slogan')}</h3>
            <p className="text-sm">{t('home.mission')}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} Keyar Hygiene. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;