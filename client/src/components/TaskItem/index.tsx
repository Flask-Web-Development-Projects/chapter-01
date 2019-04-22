import React, { useState } from 'react';
import { Task } from '../types';

interface TaskProps {
    task: Task;
    deleteTask: (taskId: string) => void;
    toBeEdited: (taskId: string) => void;
    completeTask: (task: Task) => void;
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
            Delete
        </button>
        <button onClick={() => completeTask(task)}>
            Complete
        </button>
        {
            task._id === isEditing ? 
            <button onClick={() => {
                saveBody();
            }}> Save </button> :
            <button onClick={() => toBeEdited(task._id)}>
                Edit
            </button> 
        }
    </div>;
};

const TaskBody = ({ taskId, isEditing, taskBody, updateBody }: BodyProps) => {
    return taskId === isEditing ? 
        <textarea
            value={taskBody}
            onChange={event => updateBody(event.target.value)}
        /> :
        <div className="task-body">
            {taskBody}
        </div>;
};

export const TaskItem = ({ task, deleteTask, completeTask, toBeEdited, isEditing }: TaskProps) => {
    const [bodyText, setBodyText] = useState(task.body);
    const saveBody = () => {
        setBodyText(bodyText);
        toBeEdited('');
    }
    const updateBody = (newText: string) => {
        setBodyText(newText);
    }

    return <div key={task._id}>
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