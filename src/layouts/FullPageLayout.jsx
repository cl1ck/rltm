import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { styles } from 'layouts/media';
import PageHeader from 'components/Page/Header';
import PageFooter from 'components/Page/Footer';

const Root = styled.div`
  display: flex;
  height: 100%;

  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.backgroundText};
`;

const Body = styled.div`
  flex: 1 0 auto;
  width: 100%;

  display: flex;
  flex-direction: row;

  ${styles.tablet`
    flex-direction: column;
  `}
`;

const Header = styled.header`
  flex: none;
`;

const Footer = styled.footer`
  flex: none;
`;

const FullPageLayout = ({ children }) => (
  <Root>
    <Header><PageHeader /></Header>
    <Body>{children}</Body>
    <Footer><PageFooter /></Footer>
  </Root>
);

FullPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullPageLayout;
