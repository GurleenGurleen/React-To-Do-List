import React from 'react'



function ElementList(props) {

    return (
        <ul>
            {props.items.map((item) => (<li
                key={item.id}
                id={item.id}

            >{item.value}</li>))}
        </ul>
    )
}

export default ElementList;