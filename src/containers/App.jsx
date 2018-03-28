import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { hot } from 'react-hot-loader';
import { APP_TITLE } from 'config';
import LanguageProvider from 'blocks/language';

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export const App = () => (
  <StyledContainer>
      <LanguageProvider>
        {({ locale }) => (
          <Helmet>
            <meta charSet="utf-8" />
            <title>{APP_TITLE}</title>
            <html lang={locale} />
          </Helmet>
        )}
      </LanguageProvider>
    <h1><FormattedMessage id="containers.App.hello" /></h1>
  </StyledContainer>
);

export default hot(module)(App);
