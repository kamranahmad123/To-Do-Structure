/**
 * @jest-environment jsdom
 */
import {
  getData, getStorage,
} from './newFunctionalities.js';

describe('Add-to-do method', () => {
  it('add task to-do', () => {
    // act
    getData('Reading');
    getData('Swimming');
    getData('Assingment');
    // assert
    expect(getStorage()).toHaveLength(3);
  });
});

describe('Remove Method', () => {
  it('remove task to-do', () => {
    // act
    taskRemover(1);
    // assert
    expect(getStorage()).toHaveLength(2);
  });
});
