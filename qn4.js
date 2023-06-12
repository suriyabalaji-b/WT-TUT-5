import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    if (task) {
      setTasks([...tasks, { name: task, completed: false }]);
      event.target.task.value = '';
    }
  };

  const markAsCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const markAsIncomplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = false;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="Enter task" required />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ color: task.completed ? 'red' : 'blue' }}
          >
            {task.name}
            {task.completed ? (
              <button onClick={() => markAsIncomplete(index)}>
                Yet to complete
              </button>
            ) : (
              <button onClick={() => markAsCompleted(index)}>
                Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
