import React from 'react';
import {Task} from '../types';


interface TaskProps {
    task: Task;
    deleteTask: (taskId: string) => {};
    completeTask: (task: Task) => {};
};

interface ListProps {
    tasks: Task[];
    deleteTask: (taskId: string) => {};
    completeTask: (task: Task) => {};
};

const TaskItem = ({ task, deleteTask, completeTask }: TaskProps) => {
    return <div key={task._id}>
        <div className="task-buttons">
            <button onClick={() => deleteTask(task._id)}>
                Delete
            </button>
            <button onClick={() => completeTask(task)}>
                Complete
            </button>
        </div>
        <div className="task-body">
            {task.body}
        </div>
    </div>;
};

export const TaskList = ({ tasks, deleteTask, completeTask }: ListProps) => {
    return <div>
        {tasks.map(task => <TaskItem {...{task, deleteTask, completeTask}} />)}
    </div>;
};