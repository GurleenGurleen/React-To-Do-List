import React, { useState } from 'react';

function UserForm(props) {

    const [input, setInput] = useState('');
    const inputHandler = (event) => {
        setInput(event.target.value);
    }

    const submitHandler = (event) => {

        event.preventDefault();
        const ListElement = {};

        ListElement.value = input;
        ListElement.id = Math.random();

        props.onSubmitHandler(ListElement);
        setInput("");

    }

    return (
        <form onSubmit={submitHandler} >
            <label>Daily Goal</label>
            <div>
                <input type='text' value={input} onChange={inputHandler} />
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export default UserForm;