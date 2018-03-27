import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { produceReducer } from './produceReducer';

let STORE;

export const combineModulesAndReducers = (blox = {}, reducers = {}) => {
  const bloxReducers = Object.entries(modules).reduce((acc, module) => Object.assign(acc, {
    [blox.name]: produceReducer(blox),
  }), {});

  return combineReducers({
    ...reducers, // todo: force immer usage (add custom produce)
    ...bloxReducers,
  });
}

export default function configureStore(blox = {}, reducers = {}, middlewares = [], enhancers = [], initialState = {}) {
  const reducer = combineModulesAndReducers(blox, reducers);

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools([
      applyMiddleware(...middlewares),
      ...enhancers,
    ]),
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducer);
    });
  }

  STORE = store;
  return store;
}

export const replaceReducers = (modules = {}, reducers = {}) => {


  store.replaceReducers(modules, reducers);
}