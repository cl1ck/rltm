import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router';
import { styles } from 'layouts/media';
import FullPageLayout from 'layouts/FullPageLayout';
import Sidebar from 'components/Page/Sidebar';
import Navbar from 'components/Page/Navbar';

const Main = styled.main`
  flex-grow: 1;
  padding: 4px;
`;

const Nav = styled.nav`
  flex-grow: 0;
  flex-shrink: 0;
  order: -1;

  ${styles.tablet`
    width: 100%;
  `}
`;

const ASide = styled.aside`
  flex-grow: 0;
  flex-shrink: 0;

  ${styles.tablet`
    width: 100%;
  `}
`;

const HolyGrailLayout = ({ children }) => (
  <FullPageLayout>
    <Main>{children}</Main>
    <Nav><Navbar /></Nav>
    <ASide><Sidebar /></ASide>
  </FullPageLayout>
);

HolyGrailLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HolyGrailLayout;
