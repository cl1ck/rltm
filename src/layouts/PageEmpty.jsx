import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const EmptyLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Body>
        <Component {...matchProps} />
      </Body>
    )}
  />
);

EmptyLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default EmptyLayout;
