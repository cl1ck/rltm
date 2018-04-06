import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PageEmpty from 'layouts/PageEmpty';

const Header = styled.header`
`;

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Content = styled.main`
  flex: 1;
`;

const Navigation = styled.nav`
  flex: 0 0 12em;
  order: -1;
`;

const ASide = styled.aside`
  flex: 0 0 12em;
`;

const Footer = styled.footer`
`;

const PageWithHeaderAndFooter = ({ component: Component, ...rest }) => (
  <PageEmpty
    {...rest}
    component={matchProps => (
      <Fragment>
        <Header>Header</Header>
        <Container>
          <Content>
            <Component {...matchProps} />
          </Content>
          <Navigation>Navigation</Navigation>
          <ASide>Ads</ASide>
        </Container>
        <Footer>Footer</Footer>
      </Fragment>
    )}
  />
);

PageWithHeaderAndFooter.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PageWithHeaderAndFooter;
