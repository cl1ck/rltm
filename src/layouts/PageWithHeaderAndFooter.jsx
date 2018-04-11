import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router';
import { styles } from 'layouts/media';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.backgroundText};

  ${styles.tablet`
    flex-direction: column;
    width: 100%;
  `}
`;

const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
`;

const Header = styled.header`
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
`;


const PageWithHeaderAndFooter = ({
  header: HeaderContent,
  component: Component,
  footer: FooterContent,
  ...rest
}) => (
  <Route
    {...rest}
    component={matchProps => (
      <Body>
        <Header><HeaderContent {...matchProps} /></Header>
        <Main>
          <Component {...matchProps} />
        </Main>
        <Footer><FooterContent {...matchProps} /></Footer>
      </Body>
    )}
  />
);

PageWithHeaderAndFooter.propTypes = {
  header: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  footer: PropTypes.func.isRequired,
};

export default PageWithHeaderAndFooter;
