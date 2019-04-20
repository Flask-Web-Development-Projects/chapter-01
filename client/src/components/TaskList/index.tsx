import React from 'react';
import {Task} from '../types';


interface TaskProps {
    task: Task;
};

interface Props {
    tasks: Task[];
};

const Task = ({ task }: TaskProps) => {
    return <div key={task._id}>
        <div className="task-buttons">
            <button>Delete</button>
        </div>
        <div className="task-body">
            {task.body}
        </div>
    </div>;
};

export const TaskList = ({ tasks }: Props) => {
    return <div>
        {tasks.map(task => <Task task={task} />)}
    </div>;
};