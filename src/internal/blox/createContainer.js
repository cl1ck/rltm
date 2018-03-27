// import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const createContainer = (name, actions) => {
  const Container = props => props.children(props);

  const defaultSelector = state => state[name];

  const mapStateToProps = (state, { selector = defaultSelector }) => selector(state);
  const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Container);
};

export default createContainer;
