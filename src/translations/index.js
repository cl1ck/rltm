import { addLocaleData } from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import deLocale from 'react-intl/locale-data/de';
import en from './en.json';
import de from './de.json';

addLocaleData(enLocale);
addLocaleData(deLocale);

export default {
  en,
  de,
};
