import React from 'react';
import { MdMenu } from 'react-icons/lib/md';
import MenuStateProvider from 'bits/menu';
import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;

  &:focus {
    outline:0;
  }
`;

export default () => (
  <MenuStateProvider>
    {({ isOpen, showMenu }) => (isOpen ? '' : (
      <Button onClick={showMenu}>
        <MdMenu />
      </Button>
    ))}
  </MenuStateProvider>
);
