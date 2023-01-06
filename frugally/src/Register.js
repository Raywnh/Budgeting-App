import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {
    const navigate = useNavigate()

    return (
        <div className="login">
            <div className="form">
                <h1>REGISTER</h1>
                <div className='user-div'>
                    <h2>Email: </h2>
                    <input onChange={(event) => props.setRegisterEmail(event.target.value)}/>
                    </div>
                <div className='pass-div'>
                    <h2>Password: </h2> 
                    <input onChange={(event) => props.setRegisterPassword(event.target.value)}/>
                </div>
                <button onClick={() => props.register(navigate)}>Register</button>
            </div>
        </div>
    )


   
}
