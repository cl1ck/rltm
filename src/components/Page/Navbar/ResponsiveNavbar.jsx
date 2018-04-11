import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { styles } from 'layouts/media';
import MenuStateProvider from 'bits/menu';
import { MdClose } from 'react-icons/lib/md';

const transitionTime = '0.5s';

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  width: 200px;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: visibility ${transitionTime}, opacity ${transitionTime} 0s, left ${transitionTime};

  ${styles.tablet`
    position: fixed;
    left: ${({ visible }) => (visible ? 0 : '-200px')};
    top: 0;
    z-index: ${props => props.theme.layers.foreground};
    overflow-x: hidden;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    opacity: ${({ visible }) => (visible ? 80 : 0)};
    transition: visibility ${transitionTime}, opacity ${transitionTime} 0s, left ${transitionTime};
  `}
`;

const CloseButton = styled.button`
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

const Title = styled.div`
  font-weight: bold;
  padding: 4px;

  ${styles.tablet`
    padding-left: 24px;
  `}
`;

const List = styled.ul`
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const SwipeArea = styled.div`
  width: 30px;
  background-color: transparent;
  z-index: ${props => props.theme.layers.touch}
`;

const ResponsiveNavbar = ({ title, children }) => (
  <MenuStateProvider>
    {({ isOpen, hideMenu }) => (
      <React.Fragment>
        <NavbarContainer visible={isOpen}>
          <Title>
            <CloseButton onClick={hideMenu} visible={isOpen}>
              <MdClose />
            </CloseButton>
            {title}
          </Title>
          <List>{children}</List>
        </NavbarContainer>
      </React.Fragment>
    )}
  </MenuStateProvider>
);

ResponsiveNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ResponsiveNavbar;
