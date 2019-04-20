import React, { useState, useEffect } from 'react';
import { Task } from '../types';
import { CreateTask } from '../CreateTask';
import axios from 'axios';
import './index.css';
import { TaskList } from '../TaskList';

const API_BASE_URL = 'http://localhost:5000/api/v1'

const App = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  
  async function fetchTasks() {
    const url: string = `${API_BASE_URL}/tasks`;
    const result = await axios(url);

    setTasks(result.data);
  };

  async function submitTask(body: string) {
    const url: string = `${API_BASE_URL}/tasks`;
    const result = await axios
      .post(url, {
        body,
        complete: false
      });

    setTasks(tasks.concat(result.data));
  };

  async function deleteTask(taskId: string) {
    const url: string = `${API_BASE_URL}/tasks/${taskId}`;
    const result = await axios
      .delete(url);
    
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return <div>
    <CreateTask submitTask={submitTask} />
    <TaskList {...{ tasks, deleteTask }} />
  </div>
  
};

export default App;
