import { addLocaleData } from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import deLocale from 'react-intl/locale-data/de';
import en from 'translations/en.json';
import de from 'translations/de.json';

addLocaleData(enLocale);
addLocaleData(deLocale);

export const translations = {
  en,
  de,
};

export const loadLocales = () => Promise.all([
  import('intl/locale-data/jsonp/en.js'),
  import('intl/locale-data/jsonp/de.js'),
]);
