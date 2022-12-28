import React from 'react'

export default function Item(props) {
  
  return (
    <div className='item-container'>
        <li className='item'>{props.items.name}</li>
        <li className='price'>Price: {props.items.price}</li>
        <button className="edit-button">Edit</button>
        <button className="trash-button" onClick={props.handleDelete(props.items.id)}>Delete</button>
    </div>
  )

}
