import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faTimes, faCheck, faPencilAlt, faSave
} from '@fortawesome/free-solid-svg-icons';
import './index.css';

import { Task } from '../types';
import { CreateTask } from '../CreateTask';
import { TaskList } from '../TaskList';

library.add(...[faTimes, faCheck, faPencilAlt, faSave]);

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

  async function completeTask(task: Task) {
    const url: string = `${API_BASE_URL}/tasks/${task._id}`;
    const updatedTask = Object.assign({}, task, {complete: true});
    const result = await axios
      .put(url, updatedTask);
    
    setTasks(tasks.filter(task => task._id !== updatedTask._id));
  }

  async function updateTask(task: Task, newBody: string) {
    const url: string = `${API_BASE_URL}/tasks/${task._id}`;
    const updatedTask = Object.assign({}, task, {body: newBody});
    await axios.put(url, updatedTask);

    setTasks(
      tasks
        .filter(task => task._id !== updatedTask._id)
        .concat(updatedTask)
    )
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return <Container>
    <Row>
      <Col id="app-container">
        <CreateTask submitTask={submitTask} />
        <TaskList {...{ tasks, deleteTask, completeTask, updateTask }} />
      </Col>
    </Row>
  </Container>  
};

export default App;
