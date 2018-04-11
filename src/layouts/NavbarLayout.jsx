import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router';
import { styles } from 'layouts/media';
import FullPageLayout from 'layouts/FullPageLayout';
import Navbar from 'components/Page/Navbar';

const Article = styled.article`
  flex: 1 0 auto;
`;

const Nav = styled.nav`
  order: -1;

  ${styles.tablet`
    width: 100%;
  `}
`;

const NavbarLayout = ({ children }) => (
  <FullPageLayout>
    <Article>
      {children}
    </Article>
    <Nav><Navbar /></Nav>
  </FullPageLayout>
);

NavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarLayout;
