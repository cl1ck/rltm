import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { styles } from 'layouts/media';
import MenuStateProvider from 'bits/menu';

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: opacity 0.2s 0s, visibility 0s 0.2s;

  ${styles.tablet`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    overflow-x: hidden;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    opacity: 80;
    transition: opacity 0.2s 0s, visibility 0s 0.2s;
  `}
`;

const Title = styled.div`
  font-weight: bold;
  padding: 4px;
`;

const List = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const ResponsiveNavbar = ({ title, children }) => (
  <MenuStateProvider>
    {({ isOpen, toggleMenu }) => (
      <NavbarContainer visible={isOpen}>
        <Title onClick={toggleMenu}>{title}</Title>
        <List>
          {children}
        </List>
      </NavbarContainer>
    )}
  </MenuStateProvider>
);

ResponsiveNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ResponsiveNavbar;
