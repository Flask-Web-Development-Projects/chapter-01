import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import { Task } from '../types';

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
    return <div className="task-buttons">
        <button onClick={() => deleteTask(task._id)}>
            <FontAwesomeIcon icon="times" />
        </button>
        <button onClick={() => completeTask(task)}>
            <FontAwesomeIcon icon="check" />
        </button>
        {
        task._id === isEditing ? 
        <button onClick={() => {
            saveBody();
        }}> <FontAwesomeIcon icon="save" /> </button> :
        <button onClick={() => toBeEdited(task._id)}>
            <FontAwesomeIcon icon="pencil-alt" />
        </button> 
        }
    </div>;
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