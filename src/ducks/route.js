import produce from 'immer';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
  location: null,
};

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      draft.location = action.payload;
      break;
    default:
  }
});
