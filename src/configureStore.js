import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducer';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(...enhancers),
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
}
