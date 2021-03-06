import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore } from 'redux-bits';
import { bits, reducers, middlewares, enhancers } from 'store';
import thunk from 'redux-thunk';
import defaultBits from 'runtime/bits';

let STORE;

const configureStore = (initialState = {}, history) => {
  const config = {
    bits: [
      ...bits,
      ...defaultBits,
    ],
    reducers: {
      ...reducers,
      routing: routerReducer,
    },
    middlewares: [
      ...middlewares,
      routerMiddleware(history),
      thunk,
    ],
    enhancers,
    initialState,
  };

  STORE = createStore(config);
  return STORE;
};

export default configureStore;

if (module.hot) {
  module.hot.accept(['../../src/store.js', './bits/index.js'], () => {
    const nextBits = [
      ...bits,
      ...defaultBits,
    ];
    STORE.replaceBits(nextBits, reducers);
  });
}
