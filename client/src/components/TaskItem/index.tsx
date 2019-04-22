import React, { useState } from 'react';
import { Task } from '../types';

interface TaskProps {
    task: Task;
    deleteTask: (taskId: string) => void;
    toBeEdited: (taskId: string) => void;
    completeTask: (task: Task) => void;
    isEditing: string;
};

export const TaskItem = ({ task, deleteTask, completeTask, toBeEdited, isEditing }: TaskProps) => {
    return <div key={task._id}>
        <div className="task-buttons">
            <button onClick={() => deleteTask(task._id)}>
                Delete
            </button>
            <button onClick={() => completeTask(task)}>
                Complete
            </button>
            <button onClick={() => toBeEdited(task._id)}>
                Edit
            </button>
        </div>
        <div className="task-body">
            {task.body}
        </div>
    </div>;
};