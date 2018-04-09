import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router';
import media from 'layouts/media';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
`;

const Header = styled.header`
  width: 100%;
`;

const Main = styled.main`
  flex: 1 0 auto;
  display: flex;

  ${media.tablet`
    flex-direction: column;
  `}
`;

const Footer = styled.footer`
  width: 100%;
`;

const Article = styled.article`
  flex: 1 0 auto;
`;

const Nav = styled.nav`
  order: -1;

  ${media.tablet`
    width: 100%;
  `}
`;

const ASide = styled.aside`
  ${media.tablet`
    width: 100%;
  `}
`;

const PageWithNavbarHeaderAndFooter = ({
  component: Component,
  navbar: Navigation,
  header: HeaderContent,
  footer: FooterContent,
  ...rest
}) => (
  <Route
    {...rest}
    component={matchProps => (
      <Body>
        <Header><HeaderContent {...matchProps} /></Header>
        <Main>
          <Article>
            <Component {...matchProps} />
          </Article>
          <Nav>
            <Navigation {...matchProps} />
          </Nav>
        </Main>
        <Footer><FooterContent {...matchProps} /></Footer>
      </Body>
    )}
  />
);

PageWithNavbarHeaderAndFooter.propTypes = {
  component: PropTypes.func.isRequired,
  navbar: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
  footer: PropTypes.func.isRequired,
};

export default PageWithNavbarHeaderAndFooter;
