import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Task } from '../types';
import './index.css';

interface TaskProps {
    task: Task;
    deleteTask: (taskId: string) => void;
    toBeEdited: (taskId: string) => void;
    completeTask: (task: Task) => void;
    updateTask: (task: Task, newBody: string) => void;
    isEditing: string;
};

interface ButtonProps {
    task: Task;
    deleteTask: (taskId: string) => void;
    toBeEdited: (taskId: string) => void;
    completeTask: (task: Task) => void;
    saveBody: () => void;
    isEditing: string;
}

interface BodyProps {
    taskId: string;
    isEditing: string;
    taskBody: string;
    updateBody: (newText: string) => void;
}

const TaskButtons = ({ task, deleteTask, completeTask, toBeEdited, isEditing, saveBody }: ButtonProps) => {
    return <Row className="task-buttons">
        <div>
            <Button 
                variant="danger"
                onClick={() => deleteTask(task._id)}
            >
                <FontAwesomeIcon icon="times" />
            </Button>
            <Button
                variant="success"
                onClick={() => completeTask(task)}
            >
                <FontAwesomeIcon icon="check" />
            </Button>
            {
            task._id === isEditing ? 
            <Button
                variant="success"
                onClick={() => {
                saveBody();
            }}>
                <FontAwesomeIcon icon="save" /> </Button> :
            <Button variant="warning" onClick={() => toBeEdited(task._id)}>
                <FontAwesomeIcon icon="pencil-alt" />
            </Button> 
            }
        </div>
    </Row>;
};

const TaskBody = ({ taskId, isEditing, taskBody, updateBody }: BodyProps) => {
    return taskId === isEditing ?
        <Form.Control
            as="textarea"
            value={taskBody}
            onChange={ (event: ChangeEvent<HTMLTextAreaElement> )=> {
                updateBody(event.target.value);
            } }
        /> :
        <div className="task-body">
            {taskBody}
        </div>;
};

export const TaskItem = ({ task, deleteTask, completeTask, toBeEdited, isEditing, updateTask }: TaskProps) => {
    const [bodyText, setBodyText] = useState(task.body);
    const saveBody = () => {
        setBodyText(bodyText);
        updateTask(task, bodyText);
        toBeEdited('');
    }
    const updateBody = (newText: string) => {
        setBodyText(newText);
    }

    return <div>
        <TaskButtons
            {...{
                task,
                deleteTask,
                completeTask,
                toBeEdited,
                isEditing,
                saveBody
            }}
        />
        <TaskBody 
            {...{
                taskId: task._id,
                isEditing,
                taskBody: bodyText,
                updateBody
            }}
        />
    </div>;
};