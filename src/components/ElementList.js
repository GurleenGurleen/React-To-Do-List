import React from 'react'
import Item from './Item';


function ElementList(props) {

    return (
        <ul>
            {props.items.map((item) => (<Item
                key={item.id}
                id={item.id}

            >{item.value}</Item>))}
        </ul>
    )
}

export default ElementList;