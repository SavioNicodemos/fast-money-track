import { useTranslation } from 'react-i18next';

const LOCALE_DEFAULTS: Record<string, string> = {
  pt: 'pt-BR',
  en: 'en-US',
};

const EUROZONE = new Set([
  'AT',
  'BE',
  'CY',
  'DE',
  'EE',
  'ES',
  'FI',
  'FR',
  'GR',
  'HR',
  'IE',
  'IT',
  'LT',
  'LU',
  'LV',
  'MT',
  'NL',
  'PT',
  'SI',
  'SK',
]);

const CURRENCY_BY_COUNTRY: Record<string, string> = {
  AU: 'AUD',
  BR: 'BRL',
  CA: 'CAD',
  CH: 'CHF',
  CN: 'CNY',
  GB: 'GBP',
  IN: 'INR',
  JP: 'JPY',
  MX: 'MXN',
  NO: 'NOK',
  NZ: 'NZD',
  RU: 'RUB',
  SE: 'SEK',
  SG: 'SGD',
  US: 'USD',
  ZA: 'ZAR',
};

function resolveCurrency(locale: string): string {
  const country = locale.split('-')[1]?.toUpperCase();
  if (!country) return 'BRL';
  if (EUROZONE.has(country)) return 'EUR';
  return CURRENCY_BY_COUNTRY[country] ?? 'BRL';
}

interface IntlConfig {
  locale: string;
  currency: string;
}

export function useIntlLocale(): IntlConfig {
  const { i18n } = useTranslation();
  const browserLocale = navigator.language;
  const browserLang = browserLocale.split('-')[0];

  const locale =
    browserLang === i18n.language
      ? browserLocale
      : (LOCALE_DEFAULTS[i18n.language] ?? i18n.language);

  return { locale, currency: resolveCurrency(locale) };
}
