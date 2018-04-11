import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router';
import { styles } from 'layouts/media';
import HolyGrailLayout from 'layouts/HolyGrailLayout';

const HolyGrailLayoutRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={matchProps => (
      <HolyGrailLayout>
        <Component {...matchProps} />
      </HolyGrailLayout>
    )}
  />
);

HolyGrailLayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default HolyGrailLayoutRoute;
