import validateBlock from './validateBlock';
import produce from 'immer';

describe('validateBlock', () => {
  it('validates valid blocks', () => {
    const block = require('./__test__/testBlock');
    expect(() => validateBlock(block)).not.toThrow();
  });

  it('does no validate invalid blocks', () => {
    const invalid1 = require('./__test__/testBlock');
    delete invalid1.state;
    expect(() => validateBlock(invalid1)).toThrow();

    const invalid2 = require('./__test__/testBlock');
    invalid2.name = ['test'];
    expect(() => validateBlock(invalid2)).toThrow();

    const invalid3 = require('./__test__/testBlock');
    invalid3.reducers = {};
    expect(() => validateBlock(invalid3)).toThrow();
  });
});
