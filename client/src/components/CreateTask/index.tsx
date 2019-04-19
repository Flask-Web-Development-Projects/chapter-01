import React, { FormEvent } from 'react';

export const CreateTask = () => {
    const submitted = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
    };

    return <form onSubmit={ submitted }>
        <label htmlFor="task-body">What do you want to do?</label>
        <textarea name="task-body" />
        <button type="submit">Add Task</button>
    </form>;
}