import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { hot } from 'react-hot-loader';
import { APP_TITLE } from 'config';

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

const App = () => (
  <StyledContainer>
    <Helmet>
      <meta charset="utf-8" />
      <title>{APP_TITLE}</title>
      <html lang="en" />
    </Helmet>
    <h1><FormattedMessage id="containers.App.hello" /></h1>
  </StyledContainer>
);

export default hot(module)(App);
