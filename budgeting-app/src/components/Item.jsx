import React from 'react'

export default function Item(props) {
  return (
    <div className='item-container'>
        <li className='item'></li>
        <li className='price'>Price:</li>
        <button className="edit-button">Edit</button>
        <button className="trash-button">Delete</button>
    </div>
  )
}
