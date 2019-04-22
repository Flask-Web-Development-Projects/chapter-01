import React, { useState } from 'react';
import { TaskItem } from '../TaskItem';
import {Task} from '../types';


interface ListProps {
    tasks: Task[];
    deleteTask: (taskId: string) => void;
    completeTask: (task: Task) => void;
};

export const TaskList = ({ tasks, deleteTask, completeTask }: ListProps) => {
    const [isEditing, setEditedTask] = useState('');
    const toBeEdited = (taskId: string) => {
        setEditedTask(taskId);
    };
    let taskProps = { deleteTask, completeTask, toBeEdited, isEditing };
    return <div>
        {tasks
            .map(task => 
                <TaskItem 
                    {...{task, ...taskProps}}
                />
            )
        }
    </div>;
};