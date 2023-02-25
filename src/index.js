import './style.css';
import {
  addButton, getData, inputTask, tasksData, executeData,
} from './newFunctionalities.js';

addButton.addEventListener('click', () => {
  getData(inputTask);
});

executeData(tasksData);
