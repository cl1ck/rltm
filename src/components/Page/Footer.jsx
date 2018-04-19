import React from 'react';
import styled from 'react-emotion';
import ThemeProvider from 'runtime/bits/theme';

const Footer = styled('div')`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 2px;
`;

const StyledLink = styled('a')`
  color: ${({ theme }) => theme.colors.secondaryText};
  text-decoration: underline;
  cursor: pointer;
`;

const ThemeLink = ({ theme, separator }) => (
  <ThemeProvider>
    {({ changeTheme }) => (
      <React.Fragment>
        {separator && ' | '}
        <StyledLink onClick={() => changeTheme(theme)}>{theme}</StyledLink>
      </React.Fragment>
    )}
  </ThemeProvider>
);

export default () => (
  <ThemeProvider selector="availableThemes">
    {({ availableThemes }) => (
      <Footer>
        {'Theme: '}
        {availableThemes.map((theme, index) => (
          <ThemeLink key={theme} theme={theme} separator={index !== 0}></ThemeLink>
        ))}
      </Footer>
    )}
  </ThemeProvider>
);
