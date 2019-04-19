import React, { useState, useEffect } from 'react';
import { Task } from '../types';
import { CreateTask } from '../CreateTask';
import axios from 'axios';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  
  async function fetchTasks() {
    const apiUrl: string = 'http://localhost:5000/api/v1/tasks';
    const result = await axios(apiUrl);

    setTasks(result.data);
  };

  async function submitTask(body: string) {

  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return <div>
    <CreateTask 
      submitTask={submitTask}
    />
    <div>
      { tasks.map( task => <div key={ task._id }>{ task.body }</div>) }
    </div>
  </div>
  
};

export default App;
