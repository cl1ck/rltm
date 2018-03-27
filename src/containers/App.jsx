import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { hot } from 'react-hot-loader';
import { APP_TITLE } from 'config';
import { selectLocale } from 'modules/language';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export const App = ({ locale }) => (
  <StyledContainer>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{APP_TITLE}</title>
      <html lang={locale} />
    </Helmet>
    <h1><FormattedMessage id="containers.App.hello" /></h1>
  </StyledContainer>
);

App.propTypes = {
  locale: PropTypes.string.isRequired,
};

const mapStateToProps = createSelector(
  selectLocale,
  locale => ({ locale }),
);

const connectedApp = connect(mapStateToProps)(App);
export default hot(module)(connectedApp);
