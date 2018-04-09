import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100%;
  width: 100%;
`;

const Home = () => (
  <Content>
    <FormattedMessage id="components.Home.helloWorld" />
  </Content>
);

export default Home;
