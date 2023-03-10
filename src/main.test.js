/**
 * @jest-environment jsdom
 */
import {
  getData, getStorage,
} from './newFunctionalities.js';

describe('Add-to-do method', () => {
  it('test the out of the task', () => {
    // act
    getData('Reading');
    getData('Swimming');
    getData('Assingment');
    // assert
    expect(getStorage()).toHaveLength(3);
  });
});