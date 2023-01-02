export default function Login(props) {

  return (
    <div className="login">
      <div className="form">
        <h1>LOGIN</h1>
        <div className='user-div'>
        <h2>Email: </h2>
          <input onChange={(event) => props.setLoginEmail(event.target.value)}/>
        </div>
        <div className='pass-div'>
          <h2>Password: </h2> 
          <input onChange={(event) => props.setLoginPassword(event.target.value)}/>
        </div>
        <button onClick={props.login}>Login</button>
      </div>
    </div>
  )
}
