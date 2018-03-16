import produce from 'immer';
import { createSelector } from 'reselect';
import { DEFAULT_LOCALE } from 'config';

// actions
export const CHANGE_LOCALE = 'i18n/CHANGE_LOCALE';

// selectors
export const selectLanguage = state => state.language;
export const selectLocale = createSelector(
  selectLanguage,
  languageState => languageState.locale,
);

// reducers
const initialState = {
  locale: DEFAULT_LOCALE,
};

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      draft.locale = action.locale;
      break;
    default:
      break;
  }
});

// action creators
export const changeLocale = languageLocale => ({
  type: CHANGE_LOCALE,
  locale: languageLocale,
});

