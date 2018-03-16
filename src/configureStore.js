import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'logic';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeWithDevTools(...enhancers),
  );

  if (module.hot) {
    module.hot.accept('./logic', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
