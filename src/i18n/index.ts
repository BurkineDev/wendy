import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

// Fonction pour détecter la langue du navigateur
const getDefaultLocale = () => {
  const savedLocale = localStorage.getItem('wendy-locale')
  if (savedLocale) return savedLocale
  
  const browserLocale = navigator.language.split('-')[0]
  return ['fr', 'en'].includes(browserLocale) ? browserLocale : 'fr'
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