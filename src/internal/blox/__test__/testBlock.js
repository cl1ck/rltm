export const name = 'test';

export const state = {
  success: false,
  list: [
    { value: 'someValue' },
    { value: 'someOtherValue' },
  ],
  staticValue: 'static',
  text: 'test',
};

export const types = {
  testAction: 'test/TEST_ACTION',
  action2: 'test/ACTION2',
};

export const actions = {
  testAction: success => success,
  action2: success => !success,
};

export const reducers = {
  testAction: (draft, action) => {
    draft.success = action.payload;
  },
  action2: (draft, action) => {
    draft.success = action.payload;
    draft.list.push({ value: 'someNewValue' });
    draft.list[0].value = 'someChangedValue';
  },
};

export const selectors = {
  successSelector: state => state.success,
};
