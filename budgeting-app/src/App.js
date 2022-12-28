import './menu.css';
import './sheet.css';
import './items.css'
import React, { useState, useRef, useEffect } from 'react'
import MenuBar from './components/MenuBar'
import Sheet from './components/Sheet'


function App() {
  
  const dates = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const [date, setDate] = useState("Jan")
  const [pointer, setPointer] = useState(0)

  const [inputName, setInputName] = useState("")
  const [items, setItems] = useState([])
  const itemNameRef = useRef()

  const[inputPrice, setInputPrice] = useState("")
  const itemPriceRef = useRef()

  return (
    <div className="app">
      <MenuBar/>

      <Sheet dates ={dates} date = {date} setDate= {setDate} pointer={pointer} setPointer={setPointer}
                  inputName={inputName} setInputName={setInputName} items={items} setItems={setItems}
                  itemNameRef={itemNameRef} inputPrice={inputPrice} setInputPrice={setInputPrice}
                  itemPriceRef={itemPriceRef}
      />
    </div>
  )
  
}

 
export default App;
