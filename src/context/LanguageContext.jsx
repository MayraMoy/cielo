import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  isSupportedLanguage,
  translate,
} from '../data/i18n';
import { buildContent } from '../data/i18n/buildContent';

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
  t: (path) => path,
  content: null,
  languages: SUPPORTED_LANGUAGES,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return isSupportedLanguage(stored) ? stored : DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch (error) {
      console.error('Error al guardar el idioma seleccionado:', error);
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((code) => {
    if (isSupportedLanguage(code)) {
      setLangState(code);
    }
  }, []);

  const t = useCallback(
    (path, vars, fallback) => translate(lang, path, vars, fallback),
    [lang]
  );

  const content = useMemo(() => buildContent(lang), [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t, content, languages: SUPPORTED_LANGUAGES }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
