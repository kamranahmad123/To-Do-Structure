import { tasksData } from './newFunctionalities.js';

let filterData2 = [];
export default function deleteMultiple() {
  filterData2 = tasksData.filter((dailyTasks) => dailyTasks.completed !== true) || [];
  localStorage.setItem('task', JSON.stringify(filterData2));
  window.location.reload();
}