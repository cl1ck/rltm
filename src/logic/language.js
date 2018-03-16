import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
import { DEFAULT_LOCALE } from 'config';

// actions
export const CHANGE_LOCALE = 'i18n/CHANGE_LOCALE';

// selectors
export const selectLanguage = state => state.get('language');
export const selectLocale = createSelector(
  selectLanguage,
  languageState => languageState.get('locale'),
);

// reducers
const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
};

// action creators
export const changeLocale = languageLocale => ({
  type: CHANGE_LOCALE,
  locale: languageLocale,
});

