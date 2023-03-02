import React from 'react';
import './Item.css'

function Item(props) {


    return (
        <li className='item' >
            {props.children}
        </li>
    )
};

export default Item;