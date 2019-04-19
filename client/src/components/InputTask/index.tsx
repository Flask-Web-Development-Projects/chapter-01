import React, { FormEvent } from 'react';

export const InputTask = () => {
    const submitted = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return <form onSubmit={ submitted }>

    </form>;
}