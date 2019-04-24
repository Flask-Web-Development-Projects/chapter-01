import React, { useState } from 'react';

import { TaskItem } from '../TaskItem';
import {Task} from '../types';

import './index.css';
import Card from 'react-bootstrap/Card';


interface ListProps {
    tasks: Task[];
    deleteTask: (taskId: string) => void;
    completeTask: (task: Task) => void;
    updateTask: (task: Task, newBody: string) => void;
};

export const TaskList = ({ tasks, deleteTask, completeTask, updateTask }: ListProps) => {
    const [isEditing, setEditedTask] = useState('');
    const toBeEdited = (taskId: string) => {
        setEditedTask(taskId);
    };
    let taskProps = { deleteTask, completeTask, toBeEdited, isEditing, updateTask };
    return <div id="task-container">
        {tasks.length ?
            tasks
                .map(task => 
                    <TaskItem
                        key={task._id}
                        {...{task, ...taskProps}}
                    />
                ) :
            <Card>
                <Card.Body>There aren't any tasks yet. Use the field above to add one!</Card.Body>
            </Card>
        }
    </div>;
};