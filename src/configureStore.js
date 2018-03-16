import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux';

export default function configureStore(initialState = {}, history) {
  const composeEnhancers = composeWithDevTools();
  const middlewares = [
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    composeWithDevTools(...enhancers),
  );

  if (module.hot) {
    module.hot.accept('./redux', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
