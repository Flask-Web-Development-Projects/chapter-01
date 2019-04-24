import React, { FormEvent, useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './index.css';

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

    return <Form id="enter-task" onSubmit={ submitted }>
        <Form.Row>
            <Form.Group as={ Col } id="task-field-container">
                <Form.Control
                    as="textarea"
                    placeholder="What do you want to do?"
                    value={taskBody}
                    onChange={ (event: ChangeEvent<HTMLTextAreaElement>) => {
                        setBody(event.target.value);
                    } }
                    required
                />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group id="add-task-container" as={ Col }>
                <Button
                    variant="primary"
                    type="submit"
                    id="add-task"
                >Add Task</Button>
            </Form.Group>
        </Form.Row>
    </Form>;
}