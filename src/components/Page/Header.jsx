import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { APP_TITLE } from 'config';

const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 4px 0;
  vertical-align: middle;
`;

export default () => (
  <Header>
    <Link to="/nav">{APP_TITLE}</Link>
  </Header>
);
