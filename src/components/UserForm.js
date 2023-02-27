import React, { useState } from 'react';
import './UserForm.css'

function UserForm(props) {

    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const inputHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);

        }
        setInput(event.target.value);
    }

    const submitHandler = (event) => {

        event.preventDefault();
        const ListElement = {};

        ListElement.value = input;
        ListElement.id = Math.random();
        if (input.trim().length === 0) {
            setIsValid(false);
            return;
        }

        props.onSubmitHandler(ListElement);
        setInput("");

    }

    /*                  style={{
                            borderColor: !isValid ? 'red' : 'white',
                            background: !isValid ? 'salmon' : 'white'
                        }}*/

    return (
        <form onSubmit={submitHandler} className={`form-container ${!isValid ? 'invalid' : ''}`} >
            <div className='form-control'>
                <label> Daily Goal</label>
                <div>
                    <input
                        type='text'
                        className='input-box'
                        value={input}
                        onChange={inputHandler}

                    />
                    <button type='submit' className='submit-btn'>Add</button>
                </div>
            </div>
        </form>
    )
}

export default UserForm;