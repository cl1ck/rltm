import produce from 'immer';

export default (reducerMap, initialState = {}) => (state = initialState, action) =>
  produce(state, (draft) => {
    if (reducerMap[action.type]) {
      reducerMap[action.type](draft, action);
    }
  });
