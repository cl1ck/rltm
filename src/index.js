/* eslint-disable react/jsx-filename-extension */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'normalize.css';
import i18nMessages from 'i18n';
import configureStore from 'configureStore';
import { ROOT_NODE } from 'config';
import LanguageProvider from 'blocks/language';
import { IntlProvider } from 'react-intl';

import AppContainer from 'containers/App';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const render = async (messages) => {
  if (!window.Intl) {
    await import('intl');
    await Promise.all([
      // add required languages here
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/de.js'),
    ]);
  }
  ReactDOM.render(
    (
      <Provider store={store}>
        <LanguageProvider>
          {({ locale }) => (
            <IntlProvider
              locale={locale}
              key={locale}
              messages={messages[locale]}
            >
              <ConnectedRouter history={history}>
                <AppContainer />
              </ConnectedRouter>
            </IntlProvider>
          )}
        </LanguageProvider>
      </Provider>
    ),
    document.getElementById(ROOT_NODE),
  );
};
render(i18nMessages);

if (module.hot) {
  module.hot.accept(['./i18n', './containers/App'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById(ROOT_NODE));
    // eslint-disable-next-line global-require
    render(require('./i18n').default);
  });
}

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  require('offline-plugin/runtime').install();
}
