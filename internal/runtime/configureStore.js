import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore } from 'redux-bits';
import { bits, reducers, middlewares, enhancers } from 'store';
import defaultBits from 'runtime/bits';

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
    ],
    enhancers,
    initialState,
  };

  const store = createStore(config);

  if (module.hot) {
    module.hot.accept(['../../src/store.js', './bits/index.js'], () => {
      const nextBits = [
        ...bits,
        ...defaultBits,
      ];
      store.replaceBits(nextBits, reducers);
    });
  }

  return store;
};

export default configureStore;
