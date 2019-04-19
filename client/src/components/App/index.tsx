import React, { useState, useEffect } from 'react';
import { Task } from '../types';
import axios from 'axios';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  
  async function fetchTasks() {
    const apiUrl: string = 'http://localhost:5000/api/v1/tasks';
    const result = await axios(apiUrl);

    setTasks(result.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return <div>
    { tasks.map( task => <div key={ task._id }>{ task.body }</div>) }
  </div>
};

export default App;
