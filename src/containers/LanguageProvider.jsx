import React from 'react';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { selectLocale } from 'ducks/language';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from 'config';

export class LanguageProvider extends React.PureComponent {
  render() {
    const locale = SUPPORTED_LOCALES.includes(this.props.locale) ?
      this.props.locale : DEFAULT_LOCALE;
    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={this.props.messages[locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

LanguageProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createSelector(
  selectLocale,
  locale => ({ locale }),
);

export default connect(mapStateToProps)(LanguageProvider);
