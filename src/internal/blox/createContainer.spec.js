import React from 'react';
import createContainer from './createContainer';
import { state, actions, reducers, selectors, name } from './__test__/testBlock';

const testState = {
  [name]: state,
};

describe('createContainer', () => {
  it('provides state to children', () => {
    const store = createMockStore(testState);
    const Container = createContainer(name, actions);
    const component = mountWithStore(
      <Container>
        {({ text }) => (
          <div id="test">{text}</div>
        )}
      </Container>,
      store,
    );
    expect(component.find('#test').text()).toBe('test');
  });

  it('provides action creators to children', () => {
    const store = createMockStore(testState);
    const Container = createContainer(name, actions);
    const component = mountWithStore(
      <Container>
        {({ testAction }) => (
          <button id="test" onClick={testAction(true)} />
        )}
      </Container>,
      store,
    );
    component.find('#test').simulate('click');
    const executedActions = store.getActions();
    expect(executedActions).toHaveLength(1);
    expect(executedActions[0]).toEqual(actions.testAction(true));
  });
});
