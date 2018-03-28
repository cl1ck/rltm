import { routerMiddleware } from 'react-router-redux';
import { createStore } from 'redux-blocks';
import reducers from 'reducers';
import blocks from 'blocks';

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    routerMiddleware(history),
  ];
  const enhancers = [];

  const store = createStore({ blocks, reducers, middlewares, enhancers, initialState });

  if (module.hot) {
    module.hot.accept(['./reducers/index', './blocks/index'], () => {
      store.replaceReducer(blocks, reducers);
    });
  }

  return store;
}
