import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import NavbarLayout from 'layouts/NavbarLayout';

const NavbarLayoutRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={matchProps => (
      <NavbarLayout>
        <Component {...matchProps} />
      </NavbarLayout>
    )}
  />
);

NavbarLayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default NavbarLayoutRoute;
