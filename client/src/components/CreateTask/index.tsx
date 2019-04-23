import React, { FormEvent, useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ReplaceProps } from 'react-bootstrap/helpers';

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
        <Form.Control
            as="textarea"
            placeholder="What do you want to do?"
            value={taskBody}
            onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => {
                setBody(event.target.value);
            } }
            required
        />
        <Button variant="primary" type="submit">Add Task</Button>
    </Form>;
}