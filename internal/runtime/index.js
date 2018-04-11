/* eslint-disable react/jsx-filename-extension */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'normalize.css';
import { loadLocales, translations } from 'i18n';
import { ROOT_NODE, APP_TITLE } from 'config';
import LocaleProvider from 'runtime/bits/locale';
import { IntlProvider } from 'react-intl';
import { Helmet } from 'react-helmet';
import HotApp from 'runtime/HotApp';
import configureStore from 'runtime/configureStore';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const render = async (messages) => {
  if (!window.Intl) {
    await import('intl');
    await loadLocales;
  }
  ReactDOM.render(
    (
      <Provider store={store}>
        <LocaleProvider>
          {({ locale }) => (
            <React.Fragment>
              <Helmet>
                <meta charSet="utf-8" />
                <title>{APP_TITLE}</title>
                <html lang={locale} />
              </Helmet>
              <IntlProvider
                locale={locale}
                key={locale}
                messages={messages[locale]}
              >
                <ConnectedRouter history={history}>
                  <HotApp />
                </ConnectedRouter>
              </IntlProvider>
            </React.Fragment>
          )}
        </LocaleProvider>
      </Provider>
    ),
    document.getElementById(ROOT_NODE),
  );
};
render(translations);

if (module.hot) {
  module.hot.accept(['../../src/i18n', './HotApp'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById(ROOT_NODE));
    // eslint-disable-next-line global-require
    render(require('../../src/i18n').translations);
  });
}

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  require('offline-plugin/runtime').install();
}
