import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { styles } from 'layouts/media';
import FullPageLayout from 'layouts/FullPageLayout';
import Navbar from 'components/Page/Navbar';

const Main = styled.main`
  flex: 1;
`;

const Nav = styled.nav`
  order: -1;
  width: 100%;

  ${styles.desktop`
    width: auto;
  `}
`;

const NavbarLayout = ({ children }) => (
  <FullPageLayout>
    <Main>
      {children}
    </Main>
    <Nav><Navbar /></Nav>
  </FullPageLayout>
);

NavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarLayout;
