import React, { FormEvent, useState } from 'react';

export const CreateTask = () => {
    const [taskBody, setBody] = useState('');

    const submitted = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return <form onSubmit={ submitted }>
        <textarea
            name="task-body"
            value={taskBody}
            onChange={ e => setBody(e.target.value)}
            placeholder="What do you want to do?"
            required
        />
        <button type="submit">Add Task</button>
    </form>;
}