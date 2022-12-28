import React, { useState, useRef } from 'react'
import ListComponent from './ListComponent'


function Sheet() {

        const dates = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const [date, setDate] = useState("Jan")
        const [pointer, setPointer] = useState(0)

        const [inputName, setInputName] = useState("")
        const [items, setItems] = useState([])
        const itemNameRef = useRef()


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
                                        <input value={inputName} type="text" className='todo-input' 
                                        onChange={handleInputName} ref={itemNameRef}/>
                                        
                                </div>
                                <div className="form2">
                                        <h4>Price:</h4>
                                        <input value={inputName} type="text" className='todo-input' 
                                        onChange={handleInputName} ref={itemNameRef}/>
                                </div>
                                <button className="category" type="submit" onClick={handleSubmit}>Add
                                        </button>
                                <h4>Total amount: $$$</h4>
                        </div>
                        <ListComponent items = {items} key = {items.name}/>
                </div>)

        function handleInputName(e) {
                setInputName(e.target.value)
        }
        
        function handleSubmit(e) {
                const name = itemNameRef.current.value
                if (name === '') return

                setItems(prevItems => {
                return [...prevItems, {id: Math.random(), name: name, number: 0}]
                })

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