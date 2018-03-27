import produce from 'immer';
import { buildActionTypes, getActionFromType } from './buildActions';

const produceReducer = (block) => {
  const actionTypes = buildActionTypes(block.name, block.reducers);
  const actions = Object.keys(actionTypes).reduce((acc, actionType) => Object.assign(acc, {
    [actionTypes[actionType]]: actionType,
  }), {});
  return (state = block.state, action) => produce(state, (draft) => {
    if (actions[action.type] && block.reducers[actions[action.type]]) {
      block.reducers[actions[action.type]](draft, action);
    }
  });
}
export default produceReducer;
