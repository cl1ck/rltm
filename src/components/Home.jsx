import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.backgroundText};
  min-height: 100%;
  width: 100%;
`;

const Home = () => (
  <Content>
    <FormattedMessage id="components.Home.helloWorld" /><br />
    <Link to="/nav">Page with Menu</Link>
  </Content>
);

export default Home;
