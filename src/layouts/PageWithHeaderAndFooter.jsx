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

const Footer = styled.footer`
  background-color: ${({theme}) => theme.colors.primary};
`;

const PageWithHeaderAndFooter = ({ component: Component, ...rest }) => (
  <PageEmpty
    {...rest}
    component={matchProps => (
      <Fragment>
        <Header>Header</Header>
        <Container>
          <Component {...matchProps} />
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
