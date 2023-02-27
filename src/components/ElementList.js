import React from 'react'
import Item from './Item';
import './ElementList.css'


function ElementList(props) {

    return (
        <ul className='item-list'>
            {props.items.map((item) => (<Item
                key={item.id}
                id={item.id}

            >{item.value}</Item>))}
        </ul>
    )
}

export default ElementList;