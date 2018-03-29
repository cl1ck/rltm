import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { hot } from 'react-hot-loader';

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export const App = () => (
  <StyledContainer>
    <h1><FormattedMessage id="containers.App.hello" /></h1>
  </StyledContainer>
);

export default hot(module)(App);
