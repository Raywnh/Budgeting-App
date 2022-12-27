import React, { useState } from 'react'
import ListComponent from './ListComponent'

function Sheet() {

        const dates = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const[date, setDate] = useState("Jan")
        const[pointer, setPointer] = useState(0)
        


        return (<div className='sheet'>
                        <nav className="taskBar">
                                <button onClick={handleClickBackwards}>Back</button> 
                                <h3 className="date">{date}</h3>
                                <button onClick={handleClickForwards}>Next</button>
                        </nav>
                        <ListComponent>
                        </ListComponent>
                        
                </div>)

      


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