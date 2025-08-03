import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

// Fonction pour détecter la langue du navigateur
const getDefaultLocale = () => {
  const savedLocale = localStorage.getItem('wendy-locale')
  if (savedLocale && ['fr', 'en'].includes(savedLocale)) return savedLocale
  
  // Forcer le français par défaut
  return 'fr'
}

export default createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'fr',
  messages: {
    fr,
    en
  }
})