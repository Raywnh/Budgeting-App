import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Item from './Item'

function Sheet() {

        const dates = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const [date, setDate] = useState("Jan")
        const [pointer, setPointer] = useState(0)

        const [inputName, setInputName] = useState("")
        const [items, setItems] = useState([])
        const itemNameRef = useRef()

        const[inputPrice, setInputPrice] = useState("")
        const itemPriceRef = useRef()

        return (
                <div className="sheet">
                        <div className='headerBar'>
                                <nav className="taskBar">
                                        <button onClick={handleClickBackwards}>Back</button> 
                                        <h3 className="date">{date}</h3>
                                        <button onClick={handleClickForwards}>Next</button>
                                </nav>
                                <div className="form1">
                                        <h4>Name:</h4>
                                        <input value={inputName} type="text" className='todo-input1' 
                                        onChange={handleInputName} ref={itemNameRef}/>
                                        
                                </div>
                                <div className="form2">
                                        <h4>Price:</h4>
                                        <input value={inputPrice} type="text" className='todo-input2' 
                                        onChange={handleInputPrice} ref={itemPriceRef}/>
                                </div>
                                <button className="category" type="submit" onClick={handleSubmit}>Add
                                        </button>
                                <h4>Total amount: $$$</h4>
                        </div>
                        <div className="list-container">
                                {items.map(items =>{return <Item key ={items.id} items={items}/>})}
                        </div>
                </div>)

        function handleInputName(e) {
                setInputName(e.target.value)
        }

        function handleInputPrice(e) {
                setInputPrice(e.target.value)
        }

        function handleSubmit(e) {
                if (itemNameRef.current.value === '' || itemPriceRef.current.value === '') return

                const name = itemNameRef.current.value
                const price = itemPriceRef.current.value

                setItems(prevItems => {
                return [...prevItems, {id: uuidv4(), name: name, price: price}]
                })
                itemPriceRef.current.value = null
                itemNameRef.current.value = null

        }         
        function handleClickBackwards() {
                setPointer((((pointer - 1) % dates.length) + dates.length) % dates.length)   
                setDate(dates[(((pointer - 1) % dates.length) + dates.length) % dates.length])
        }    

        function handleClickForwards() {  
                setPointer((((pointer + 1) % dates.length) + dates.length) % dates.length)    
                setDate(dates[(((pointer + 1) % dates.length) + dates.length) % dates.length]) 
        }
}
 
export default Sheet;