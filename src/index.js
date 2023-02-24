import './style.css';
import './Add.png';
import './delete.png';
import './Refresh.png';

import {
  addButton, getData, inputTask, tasksData, executeData,
} from './newFunctionalities.js';

addButton.addEventListener('click', () => {
  getData(inputTask, tasksData.length);
});

executeData(tasksData);
