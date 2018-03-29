import { routerMiddleware } from 'react-router-redux';
import { createStore } from 'redux-bits';
import reducers from 'reducers';
import bits from 'bits';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    routerMiddleware(history),
  ];
  const enhancers = [];

  const store = createStore({
    bits,
    reducers,
    middlewares,
    enhancers,
    initialState,
  });

  if (module.hot) {
    module.hot.accept(['./reducers/index', './bits/index'], () => {
      store.replaceReducer(bits, reducers);
    });
  }

  return store;
}
