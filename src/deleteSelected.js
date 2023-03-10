import { getStorage, storage } from './newFunctionalities.js';

export default function deleteMultiple() {
  let filterData = getStorage().filter((dailyTasks) => dailyTasks.completed !== true) || [];
  filterData = filterData.map((dailyTask, i) => ({ ...dailyTask, index: i + 1 }));
  storage(filterData);
}