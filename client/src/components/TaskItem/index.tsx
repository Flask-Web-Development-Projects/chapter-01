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
    isEditing: string;
}

interface BodyProps {
    task: Task;
    toBeEdited: (taskId: string) => void;
    isEditing: string;
}

const TaskButtons = ({ task, deleteTask, completeTask, toBeEdited, isEditing }: ButtonProps) => {
    return <div className="task-buttons">
        <button onClick={() => deleteTask(task._id)}>
            Delete
        </button>
        <button onClick={() => completeTask(task)}>
            Complete
        </button>
        {
            task._id === isEditing ? 
            <button onClick={() => toBeEdited('')}> Save </button> :
            <button onClick={() => toBeEdited(task._id)}>
                Edit
            </button> 
        }
    </div>;
};

const TaskBody = ({ task, toBeEdited, isEditing }: BodyProps) => {
    return task._id === isEditing ? 
        <textarea /> :
        <div className="task-body">
            {task.body}
        </div>;
};

export const TaskItem = ({ task, deleteTask, completeTask, toBeEdited, isEditing }: TaskProps) => {
    return <div key={task._id}>
        <TaskButtons
            {...{ task, deleteTask, completeTask, toBeEdited, isEditing }}
        />
        <TaskBody {...{ task, toBeEdited, isEditing }} />
    </div>;
};