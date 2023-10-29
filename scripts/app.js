
const tasks = [
    { name: 'Tarea 1', completed: false },
    { name: 'Tarea 2', completed: true },
  ];
  

  function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
        ${task.name}
      `;
      taskList.appendChild(listItem);
    });
  }
  

  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTaskName = taskInput.value;
    if (newTaskName) {
      tasks.push({ name: newTaskName, completed: false });
      taskInput.value = '';
      loadTasks();
    }
  }
  

  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    loadTasks();
  }
  

  function clearCompletedTasks() {
    for (let i = tasks.length - 1; i >= 0; i--) {
      if (tasks[i].completed) {
        tasks.splice(i, 1);
      }
    }
    loadTasks();
  }
  
  document.getElementById('addTaskButton').addEventListener('click', addTask);
  document.getElementById('clearCompletedButton').addEventListener('click', clearCompletedTasks);
  document.getElementById('taskList').addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
      const index = event.target.getAttribute('data-index');
      toggleTask(index);
    }
  });
  
  loadTasks();
  