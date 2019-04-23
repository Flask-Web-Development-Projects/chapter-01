import React, { FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Props {
    submitTask: (body: string) => {};
}

export const CreateTask = ({ submitTask }: Props) => {
    const [taskBody, setBody] = useState('');

    const submitted = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitTask(taskBody);
        setBody('');
    };

    return <Form onSubmit={ submitted }>
        <textarea
            name="task-body"
            value={taskBody}
            onChange={ e => setBody(e.target.value) }
            placeholder="What do you want to do?"
            required
        />
        <Button variant="primary" type="submit">Add Task</Button>
    </Form>;
}