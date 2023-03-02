import React from 'react'
import Item from './Item';
import './ElementList.css'


function ElementList(props) {

    function deleteHandler(event) {
        props.deleteItems(event.target.value);
        console.log(event.target.value);

    }

    return (
        <ul className='item-list' >
            {props.items.map((item, index) => (
                <Item
                    key={item.id}
                    id={item.id}
                    index={index}
                >

                    <div>{item.value}</div>
                    <button className='cross_btn' onClick={deleteHandler} value={item.id}>{"\u274C"}</button>

                </Item>))}
        </ul>
    )
}

export default ElementList;