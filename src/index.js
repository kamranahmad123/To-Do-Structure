import './style.css';
import {
  getData, executeData, getStorage, updateDescription,
} from './newFunctionalities.js';
import deleteMultiple from './deleteSelected.js';

const listEntry = document.querySelector('.list-entry');
const addButton = document.querySelector('.addButton');

const inputTask = document.getElementById('input-area');

const clearButton = document.querySelector('.clear');

const refreshButton = document.querySelector('.refreshButton');

refreshButton.addEventListener('click', () => window.location.reload());

listEntry.addEventListener('keypress', (e) => {
  if (e.target.tagName === 'INPUT') {
    if (e.key === 'Enter') {
      const { id } = e.target;
      const description = e.target.value;
      updateDescription(description, id);
    }
  }
});

addButton.addEventListener('click', () => {
  getData(inputTask.value);
  window.location.reload();
});

clearButton.addEventListener('click', () => {
  deleteMultiple();
  window.location.reload();
});
executeData(getStorage());
