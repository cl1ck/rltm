/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { API_DEFAULT_METHOD, API_URL } from 'config';

const OUT_OF_SCOPE_STATUS = 'outOfScope';
const PENDING_STATUS = 'pending';
const FAILED_STATUS = 'failed';
const SUCCESS_STATUS = 'success';

const { Provider, Consumer } = React.createContext({
  status: OUT_OF_SCOPE_STATUS,
});

export class API extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: PENDING_STATUS,
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI = async () => {
    const { url, method, data } = this.props;
    try {
      const response = await axios({
        url,
        method,
        data,
      });
      setTimeout(() => this.setState({
        data: response.data,
        status: SUCCESS_STATUS,
      }), 5000);
    } catch (e) {
      let error;
      if (e.response) {
        error = e.response.data;
      } else {
        error = e.message;
      }
      this.setState({
        status: FAILED_STATUS,
        error,
      });
    }
  };

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

API.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  method: PropTypes.string,
  data: PropTypes.shape({}),
};

API.defaultProps = {
  url: API_URL,
  method: API_DEFAULT_METHOD,
  data: {},
};

export const Pending = ({ children }) => (
  <Consumer>
    {({ status }) => status === PENDING_STATUS && children}
  </Consumer>
);
Pending.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Failed = ({ children }) => (
  <Consumer>
    {result => result.status === FAILED_STATUS && children(result.error)}
  </Consumer>
);
Failed.propTypes = {
  children: PropTypes.func.isRequired,
};

export const Success = ({ children }) => (
  <Consumer>
    {result => result.status === SUCCESS_STATUS && children(result.data)}
  </Consumer>
);
Success.propTypes = {
  children: PropTypes.func.isRequired,
};
