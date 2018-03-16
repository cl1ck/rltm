import mapReducer from './mapReducer';

const initialState = {
  success: false,
  staticValue: 'static',
};
const ACTION_TYPE = '@@@test/testAction';
const reducerMap = {
  [ACTION_TYPE]: (draft, action) => {
    draft.success = action.payload;
  },
};
const action = {
  type: ACTION_TYPE,
  payload: true,
};
const reducer = mapReducer(reducerMap);

test('returns a function', () => {
  expect(reducer).toBeInstanceOf(Function);
});

describe('returns a working reducer', () => {
  test('works correctly with mapped actions', () => {
    const reducedState = reducer(initialState, action);
    expect(reducedState).toEqual({
      success: true,
      staticValue: 'static',
    });
  });

  test('ignores unmapped actions', () => {
    const invalidAction = {
      type: 'someOtherType',
      payload: true,
    };
    const reducedState = reducer(initialState, invalidAction);
    expect(reducedState).toEqual(initialState);
  });
});
