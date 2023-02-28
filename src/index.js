import './style.css';
import {
  addButton, getData, inputTask, tasksData, executeData,
} from './newFunctionalities.js';
import deleteMultiple from './deleteSelected.js';

const clearButton = document.querySelector('.clear');

const refreshButton = document.querySelector('.refreshButton');

refreshButton.addEventListener('click', () => window.location.reload());

addButton.addEventListener('click', () => {
  getData(inputTask);
});

clearButton.addEventListener('click', deleteMultiple);
executeData(tasksData);
