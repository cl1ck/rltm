import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router';
import { styles } from 'layouts/media';
import FullPageLayout from 'layouts/FullPageLayout';

const FullPageLayoutRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={matchProps => (
      <FullPageLayout>
        <Component {...matchProps} />
      </FullPageLayout>
    )}
  />
);

FullPageLayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default FullPageLayoutRoute;
