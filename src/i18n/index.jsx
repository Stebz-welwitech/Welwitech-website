import { createContext, useContext, useState, useCallback } from 'react'
import fr from './fr.js'
import en from './en.js'

const translations = { fr, en }
const I18nContext = createContext()

export function I18nProvider({ children, defaultLocale = 'fr' }) {
  const [locale, setLocale] = useState(defaultLocale)
  const t = useCallback((key) => {
    const keys = key.split('.')
    let val = translations[locale]
    for (const k of keys) {
      val = val?.[k]
    }
    return val ?? key
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
