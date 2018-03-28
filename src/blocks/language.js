import { createContainer } from 'redux-blocks';
import { createSelector } from 'reselect';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from 'config';

export const name = 'language';

export const state = {
  locale: DEFAULT_LOCALE,
};

// action creators
export const actions = {
  changeLocale: languageLocale => languageLocale,
};

export const reducers = {
  changeLocale: (draft, locale) => {
    draft.locale = locale;
  },
};

const selectLanguage = state => state.language;
const selectLocale = createSelector(
  selectLanguage,
  (state) => {
    if (SUPPORTED_LOCALES.includes(state.locale)) {
      return state.locale;
    }
    return DEFAULT_LOCALE;
  },
);
export const selectors = {
  language: selectLanguage,
  locale: selectLocale,
};

export default createContainer(name, actions, selectors);
