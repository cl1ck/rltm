import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { styles } from 'layouts/media';
import PageHeader from 'components/Page/Header';
import PageFooter from 'components/Page/Footer';

const Root = styled('div')`
  display: flex;
  height: 100%;

  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.backgroundText};
`;

const Body = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${styles.desktop`
    flex-direction: row;
  `}
`;

const Header = styled('header')`
  flex: none;
`;

const Footer = styled('footer')`
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
