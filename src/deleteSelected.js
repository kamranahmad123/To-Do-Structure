import { tasksData, storage } from './newFunctionalities.js';

let filterData2 = [];
export default function deleteMultiple() {
  filterData2 = tasksData.filter((dailyTasks) => dailyTasks.completed !== true) || [];
  // changes
  storage(filterData2);
  window.location.reload();
}