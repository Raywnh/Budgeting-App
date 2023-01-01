export default function login(props) {

  return (
    <div className="login">
      <form>
        <div class='user-div'>
        <h2>Username: </h2>
          <input/>
        </div>
        <div class='pass-div'>
          <h2>Password: </h2> 
          <input/>
        </div>
        <button>Enter</button>
        </form>
    </div>
  )
}
