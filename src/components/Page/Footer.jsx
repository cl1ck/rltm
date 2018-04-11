import React from 'react';
import styled from 'styled-components';
import ThemeProvider from 'runtime/bits/theme';

const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 2px;
`;

const ThemeLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryText};
  text-decoration: underline;
  cursor: pointer;
`;

export default () => (
  <ThemeProvider>
    {({ changeTheme }) => (
      <Footer>
        Theme: <ThemeLink onClick={() => changeTheme('dark')}>Dark</ThemeLink>
        &nbsp;|&nbsp;<ThemeLink onClick={() => changeTheme('main')}>Main</ThemeLink>
      </Footer>
    )}
  </ThemeProvider>
);
