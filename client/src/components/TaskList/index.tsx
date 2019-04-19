import React from 'react';
import {Task} from '../types';

interface Props {
    tasks: Task[];
}

export const TaskList = ({ tasks }: Props) => {
    return <div>
        {tasks.map(task => <div key={task._id}>{task.body}</div>)}
    </div>;
}