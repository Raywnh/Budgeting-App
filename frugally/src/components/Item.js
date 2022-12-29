import React from 'react'


export default function Item(props) {

  function callBackHandlerDelete() {
    props.deleteComponent(props.item.id, props.item.price)
  }
  function callBackHandlerEdit() {
    props.editComponent(props.item.id)
  }
  
  return (
    <div className='item-container'>
        <li className='item'>{props.item.name}</li>
        <li className='price'>Price: {props.item.price}</li>
        <button className="edit-button" onClick={callBackHandlerEdit}>Edit</button>
        <button className="trash-button" onClick={callBackHandlerDelete}>Delete</button>
    </div>
  )
 
}
