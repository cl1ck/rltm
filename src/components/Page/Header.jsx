import React from 'react';
import styled from 'styled-components';
import { APP_TITLE } from 'config';
import MenuStateProvider from 'bits/menu';
import { MdMenu } from 'react-icons/lib/md';
import { styles } from 'layouts/media';

const transitionTime = '0.5s';
const OpenButton = styled.button`
  position: absolute;
  left: 0;
  top: 2px;
  cursor: pointer;
  visibility: hidden;
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};
  transition: opacity ${transitionTime};

  &:focus {
    outline:0;
  }

  ${styles.tablet`
    opacity: ${({ visible }) => (visible ? 100 : 0)};
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  `}
`;

const Header = styled.div`
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
        <OpenButton onClick={showMenu} visible={!isOpen}>
          <MdMenu />
        </OpenButton>
        {APP_TITLE}
      </Header>
    )}
  </MenuStateProvider>
);
