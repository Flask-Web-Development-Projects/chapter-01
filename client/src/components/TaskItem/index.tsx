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
}

const TaskButtons = ({ task, deleteTask, completeTask, toBeEdited }: ButtonProps) => {
    return <div className="task-buttons">
        <button onClick={() => deleteTask(task._id)}>
            Delete
            </button>
        <button onClick={() => completeTask(task)}>
            Complete
            </button>
        <button onClick={() => toBeEdited(task._id)}>
            Edit
            </button>
    </div>;
};

export const TaskItem = ({ task, deleteTask, completeTask, toBeEdited, isEditing }: TaskProps) => {
    return <div key={task._id}>
       <TaskButtons
            {...{ task, deleteTask, completeTask, toBeEdited }}
       />
        <div className="task-body">
            {task.body}
        </div>
    </div>;
};