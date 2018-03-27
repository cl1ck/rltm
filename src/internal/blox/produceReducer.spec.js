import produceReducer from './produceReducer';
import * as testBlock from './__test__/testBlock';

const targetState = {
  success: true,
  list: [
    { value: 'someChangedValue' },
    { value: 'someOtherValue' },
    { value: 'someNewValue' },
  ],
  staticValue: 'static',
  text: 'test',
};
const action = {
  type: 'test/ACTION2',
  payload: true,
};

let reducer;

describe('produceReducer', () => {
  beforeEach(() => {
    reducer = produceReducer(testBlock);
  });

  test('returns a function', () => {
    expect(reducer).toBeInstanceOf(Function);
  });

  test('works correctly with mapped actions', () => {
    const reducedState = reducer(testBlock.state, action);
    expect(reducedState).toEqual(targetState);
  });

  test('does not modify given state', () => {
    expect(() => reducer(testBlock.state, action)).not.toThrow();
  });

  test('uses "immer" immutable state as expected', () => {
    const reducedState = reducer(testBlock.state, action);
    expect(testBlock.state.list).toHaveLength(2);
    expect(reducedState.list).toHaveLength(3);
    expect(testBlock.state.list[0].value).toBe('someValue');
    expect(reducedState.list[0].value).toBe('someChangedValue');
    expect(testBlock.state.success).toBe(false);
    expect(reducedState.success).toBe(true);
    expect(reducedState.list[1]).toBe(testBlock.state.list[1]);
    expect(reducedState.list[0]).not.toBe(testBlock.state.list[0]);
  });

  test('reduced state is immutable', () => {
    const reducedState = reducer(testBlock.state, action);
    expect(() => {
      reducedState.success = false;
    }).toThrow();
    expect(() => {
      reducedState.list.push({ value: 'error' });
    }).toThrow();
    expect(() => {
      reducedState.list[0].value = 'error';
    }).toThrow();
  });

  test('unmapped actions are ignored', () => {
    const invalidAction = {
      type: 'someOtherType',
      payload: true,
    };
    const reducedState = reducer(testBlock.state, invalidAction);
    expect(reducedState).toBe(testBlock.state);
  });
});
