import React from 'react';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { selectLocale } from 'logic/language';

export class LanguageProvider extends React.PureComponent {
  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createSelector(
  selectLocale,
  (locale) => ({ locale })
);

export default connect(mapStateToProps)(LanguageProvider);