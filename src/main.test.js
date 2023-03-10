/**
 * @jest-environment jsdom
 */
import checkDelete from './completionStatus.js';
import deleteMultiple from './deleteSelected.js';
import {
  getData, getStorage, taskRemover, updateDescription,
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
  it('remove task from to-do list', () => {
    // act
    taskRemover(1);
    // assert
    expect(getStorage()).toHaveLength(3);
  });
});
describe('Update description Method', () => {
  it('update tasks', () => {
    // act
    updateDescription('Swim', '1');
    // assert
    expect(getStorage()[0].description).toBe('Swim');
  });
});

describe('Update status Method', () => {
  it('update tasks status', () => {
    // act
    checkDelete(1, getStorage());
    // assert
    expect(getStorage()[0].completed).toBe(true);
  });
});

describe('clear completed tasks Method', () => {
  it('Select task to remove', () => {
    // act
    deleteMultiple();
    // assert
    expect(getStorage()).toHaveLength(2);
  });
});
