const validateBlock = (block) => {
  if (process.env.NODE_ENV === 'production') {
    return true;
  }

  // required properties
  const properties = [
    'name',
    'state',
    'actions',
    'reducers',
  ];
  properties.forEach((property) => {
    if (!Object.keys(block).includes(property)) {
      throw new Error(`Block is missing the ${property} property.`);
    }
  });

  // there must be a reducer for each action
  Object.keys(block.actions).forEach((actionName) => {
    if (!Object.keys(block.reducers).includes(actionName)) {
      throw new Error(`Block is missing a reducer for action ${actionName}`);
    }
  });

  // block name must be a string
  if (typeof block.name !== 'string') {
    throw new Error(`Block name must be a valid string`);
  }

  return true;
};

export default validateBlock;
