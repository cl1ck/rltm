import snakeCase from 'snake-case';
import camelCase from 'camelcase';

export const buildActionCreators = (actions, types) => Object.keys(actions)
  .map(actionName => ({
    actionName,
    creator: (...params) => ({
      type: types[actionName],
      payload: actions[actionName](...params),
    }),
  }))
  .reduce((acc, actionList) => Object.assign(acc, {
    [actionList.actionName]: actionList.creator,
  }), {});

export const getTypeFromAction =
  (blockName, action) => `${blockName}/${snakeCase(action).toUpperCase()}`

export const buildActionTypes = (blockName, actions) => Object.keys(actions)
  .reduce((acc, actionName) => Object.assign(acc, {
    [actionName]: getTypeFromAction(blockName, actionName),
  }), {});

export const buildActions = (blockName, actions) => {
  const types = buildActionTypes(blockName, actions);
  const actionCreators = buildActionCreators(actions, types);
  return {
    actions: actionCreators,
    types,
  };
};

export default buildActions;
