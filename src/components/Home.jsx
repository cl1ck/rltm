import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Home = () => (
  <FormattedMessage id="components.Home.helloWorld" />
);

export default Home;
