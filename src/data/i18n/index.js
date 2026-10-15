import es from './es';
import en from './en';
import pt from './pt';

export const SUPPORTED_LANGUAGES = [
  { code: 'es', label: 'Español', short: 'ES', flag: '🇦🇷' },
  { code: 'en', label: 'English', short: 'EN', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', short: 'PT', flag: '🇧🇷' },
];

export const DEFAULT_LANGUAGE = 'es';
export const LANGUAGE_STORAGE_KEY = 'cielo_language';

export const TRANSLATIONS = { es, en, pt };

export function isSupportedLanguage(code) {
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === code);
}

export function getTranslations(lang) {
  return TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE];
}

function lookup(dict, path) {
  return path
    .split('.')
    .reduce((acc, key) => (acc == null ? acc : acc[key]), dict);
}

export function interpolate(template, vars) {
  if (typeof template !== 'string' || !vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match
  );
}

export function translate(lang, path, vars, fallback) {
  const dict = getTranslations(lang);
  const value = lookup(dict, path);
  if (value == null) {
    if (fallback != null) return interpolate(fallback, vars);
    return path;
  }
  return interpolate(value, vars);
}
