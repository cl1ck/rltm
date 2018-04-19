import React from 'react';
import styled from 'react-emotion';
import { APP_TITLE } from 'config';
import MenuStateProvider from 'bits/menu';
import { MdMenu } from 'react-icons/lib/md';
import MenuButton from 'components/Page/Navbar/MenuButton';

const Header = styled('div')`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  padding: 4px 0;
  vertical-align: middle;
`;

export default () => (
  <MenuStateProvider>
    {({ isOpen, showMenu }) => (
      <Header>
        <MenuButton onClick={showMenu} visible={!isOpen}>
          <MdMenu />
        </MenuButton>
        {APP_TITLE}
      </Header>
    )}
  </MenuStateProvider>
);
