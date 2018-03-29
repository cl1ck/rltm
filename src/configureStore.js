import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore } from 'redux-bits';
import bits from 'bits';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    routerMiddleware(history),
  ];
  const enhancers = [];
  const reducers = {
    routing: routerReducer,
  };

  const store = createStore({
    bits,
    reducers,
    middlewares,
    enhancers,
    initialState,
  });

  if (module.hot) {
    module.hot.accept(['./bits/index'], () => {
      store.replaceReducer(bits, reducers);
    });
  }

  return store;
}
