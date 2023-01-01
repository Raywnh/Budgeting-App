export default function Login() {

  return (
    <div className="login">
      <form>
        <div className='user-div'>
        <h2>Username: </h2>
          <input/>
        </div>
        <div className='pass-div'>
          <h2>Password: </h2> 
          <input/>
        </div>
        <button>Enter</button>
        </form>
    </div>
  )
}
