/**
 * @jest-environment jsdom
 */
import {
  getData, getStorage, taskRemover,
} from './newFunctionalities.js';

describe('Add-to-do method', () => {
  it('add task to-do', () => {
    // act
    getData('Reading');
    getData('Swimming');
    getData('Assingment');
    getData('Cycling');
    // assert
    expect(getStorage()).toHaveLength(4);
  });
});

describe('Remove Method', () => {
  it('remove task to-do', () => {
    // act
    taskRemover(1);
    // assert
    expect(getStorage()).toHaveLength(3);
  });
});