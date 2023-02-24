import React from 'react';

function Item(props) {
    const deleteHandler = () => {

    }
    return (
        <li>{props.children}
            <button onClick={deleteHandler}>{"\u274C"}</button>
        </li>
    )
};

export default Item;