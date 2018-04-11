import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { styles, queries } from 'layouts/media';
import MenuStateProvider from 'bits/menu';
import MenuButton from 'components/Page/Navbar/MenuButton';
import { MdClose } from 'react-icons/lib/md';
import Swipeable from 'react-swipeable';
import MediaQuery from 'react-responsive';

const transitionTime = '0.5s';

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  width: 200px;
  margin: 0;
  padding: 0;
  transition: visibility ${transitionTime}, opacity ${transitionTime} 0s, left ${transitionTime};
  min-height: 100%;

  ${styles.tablet`
    height: 100vh;
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
  width: 5px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: transparent;
  z-index: ${props => props.theme.layers.touch};
`;

const Swipe = styled(Swipeable)`
  min-height: 100%;
  height: 100%;
`;

const ResponsiveNavbar = ({ title, children }) => (
  <MenuStateProvider>
    {({ isOpen, hideMenu, showMenu }) => (
      <React.Fragment>
        <Swipeable onSwipingRight={showMenu}>
          <SwipeArea/>
        </Swipeable>
        <Swipe onSwipingLeft={hideMenu}>
          <NavbarContainer visible={isOpen}>
            <Title>
              <MenuButton onClick={hideMenu} visible={isOpen}>
                <MdClose />
              </MenuButton>
              {title}
            </Title>
            <List>{children}</List>
          </NavbarContainer>
        </Swipe>
      </React.Fragment>
    )}
  </MenuStateProvider>
);

ResponsiveNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ResponsiveNavbar;
