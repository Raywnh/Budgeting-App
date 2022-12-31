import './App.css';
import Menubar from './components/Menubar';
import Form from './components/Form';
import Login from './Login';
import { useState, useRef } from 'react';
import {v4 as uuidv4} from "uuid"
import React , {useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [totalBudget, setTotalBudget] = useState(0)
  const [items, setItems] = useState([])
  const inputRefName = useRef()
  const inputRefPrice = useRef()

  const [editItems, setEditItems] = useState(null)

  // TODO: LOGIN PAGE WITH ROUTERS
  // TODO: CREATE FIELD TO SET TOTAL BUDGET 
  // TODO: CONNECT DATA TO BACKEND --> EXPRESS.JS + MONGODOB + NODE.JS
    

  return (
    <Router>
      <div className="App">
      <Menubar/>
      <Routes>
          <Route path= "/" element={
            <Form items={items} setItems={setItems} onNameSubmit={onNameSubmit} inputRefPrice={inputRefPrice} inputRefName={inputRefName} 
                  deleteComponent={deleteComponent} totalBudget={totalBudget} editComponent={editComponent}
                  />}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      </div>
    </Router>
  )

  function onNameSubmit() {
    const name = inputRefName.current.value
    const price = inputRefPrice.current.value

    if (name === '' || isNaN(price) || price === '') return

    if(!editItems) {
      setItems(item => {return [...item, {id: uuidv4(), name: name, price: price}]})
      setTotalBudget(totalBudget + parseInt(price))
    } else {
      updateItems(name, editItems.id, price)
    }

    inputRefName.current.value = null
    inputRefPrice.current.value = null
  }

  function deleteComponent(id, price) {
    const newItems = items.filter((item) => item.id !== id)
   
    setTotalBudget(totalBudget - price)
    setItems(newItems)
  }

  function editComponent(id) {
    const componentToEdit = items.find((item) => item.id === id)
    setEditItems(componentToEdit)
  }

  function updateItems(name, id, price) {
    const newItems = items.map((item) => item.id === id ? {name, id, price} : item)
    setItems(newItems)
    setEditItems("")
  }
}

export default App;
