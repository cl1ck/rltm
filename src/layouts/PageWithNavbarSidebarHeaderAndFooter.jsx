import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router';
import { styles } from 'layouts/media';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.backgroundText};
`;

const Header = styled.header`
  width: 100%;
`;

const Main = styled.main`
  flex: 1 0 auto;
  display: flex;

  ${styles.tablet`
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

  ${styles.tablet`
    width: 100%;
  `}
`;

const ASide = styled.aside`
  ${styles.tablet`
    width: 100%;
  `}
`;

const PageWithNavbarSidebarHeaderAndFooter = ({
  component: Component,
  navbar: Navigation,
  sidebar: Sidebar,
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
          <ASide>
            <Sidebar {...matchProps} />
          </ASide>
        </Main>
        <Footer><FooterContent {...matchProps} /></Footer>
      </Body>
    )}
  />
);

PageWithNavbarSidebarHeaderAndFooter.propTypes = {
  component: PropTypes.func.isRequired,
  navbar: PropTypes.func.isRequired,
  sidebar: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
  footer: PropTypes.func.isRequired,
};

export default PageWithNavbarSidebarHeaderAndFooter;
