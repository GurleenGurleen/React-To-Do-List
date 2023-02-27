import React from 'react';
import './Item.css'

function Item(props) {
    const deleteHandler = () => {

    }
    return (
        <li className='item'>{props.children}
            <button className='cross_btn' onClick={deleteHandler}>{"\u274C"}</button>
        </li>
    )
};

export default Item;