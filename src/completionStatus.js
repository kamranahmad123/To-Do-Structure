export default function checkDelete(id, tasksData) {
  tasksData = tasksData.map((task) => {
    if (task.index === Number(id)) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  localStorage.setItem('task', JSON.stringify(tasksData));
}
