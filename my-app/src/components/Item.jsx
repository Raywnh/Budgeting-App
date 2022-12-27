import React from 'react'

export default function Item() {
  return (
    <div className='item-container'>
        <li className='item'>Item</li>
        <button className="complete-button"><i className="fas fa-check"></i>Complete</button>
        <button className="trash-button"><i className="fas fa-trash"></i> Delete</button>
    </div>
  )
}
