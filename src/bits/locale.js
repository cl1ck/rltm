import { createContainer } from 'redux-bits';
import { createSelector } from 'reselect';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from 'config';

export const name = 'locale';

export const state = {
  locale: DEFAULT_LOCALE,
};

// action creators
export const actions = {
  changeLocale: newLocale => newLocale,
};

export const reducers = {
  changeLocale: (draft, locale) => {
    draft.locale = locale;
  },
};

export const selectors = {
  locale: createSelector((draft) => {
    if (SUPPORTED_LOCALES.includes(draft.locale)) {
      return draft.locale;
    }
    return DEFAULT_LOCALE;
  }),
};

export default createContainer(name, actions, selectors);
