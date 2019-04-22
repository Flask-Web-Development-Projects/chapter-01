import React from 'react';
import {Task} from '../types';


interface TaskProps {
    task: Task;
    deleteTask: (taskId: string) => {};
};

interface ListProps {
    tasks: Task[];
    deleteTask: (taskId: string) => {};
};

const TaskItem = ({ task, deleteTask }: TaskProps) => {
    return <div key={task._id}>
        <div className="task-buttons">
            <button onClick={() => deleteTask(task._id)}>
                Delete
            </button>
            <button>
                Complete
            </button>
        </div>
        <div className="task-body">
            {task.body}
        </div>
    </div>;
};

export const TaskList = ({ tasks, deleteTask }: ListProps) => {
    return <div>
        {tasks.map(task => <TaskItem {...{task, deleteTask}} />)}
    </div>;
};