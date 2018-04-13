import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
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
