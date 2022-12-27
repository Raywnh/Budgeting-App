import React, { useState } from 'react';
import Item from './Item';

export default function ListComponent() {

  const[input, setInput] = useState("")
  const[items, setItems] = useState([])


  return (
    <div className="list-container">
      <div className="form">
        <input value={input} type="text" className='todo-input' onChange={handleInput}></input>
        <button class="category" type="submit" onClick={handleSubmit}>Add
          <i class="fas fa-plus-square"></i>
        </button>
        {items.map(items =>(<Item></Item>))}
      </div>
      <Item></Item>
    </div>
  )

  function handleInput(e) {
    setInput(e.target.value)
  }
  // TODO: make item appear
  function handleSubmit(e) {
    e.preventDefault()
    setItems(...items, {text: input, 
                        number: 0,
                        id: Math.random() * 10000}) // Note to install package for handling IDs
    setInput("")
  }
}
