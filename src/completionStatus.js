export default function checkDelete(checkEntry, tasksData) {
  tasksData.forEach((y) => {
    if (y.index === checkEntry.index && checkEntry.completed === true) {
      y.completed = false;
      localStorage.setItem('task', JSON.stringify(tasksData));
    } else if (y.index === checkEntry.index && checkEntry.completed === false) {
      y.completed = true;
      localStorage.setItem('task', JSON.stringify(tasksData));
    }
  });
  window.location.reload();
}