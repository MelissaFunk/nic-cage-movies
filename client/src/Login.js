import { useState} from "react"
import { useHistory } from "react-router-dom"

function Login({ setCurrentUser }) {
  const [userLog, setUserLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [userSign, setUserSign] = useState('')
  const [passSign, setPassSign] = useState('')
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function onSignupSubmit(e) {
    e.preventDefault()
    const user = { username: userSign, password: passSign}
  
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          history.push('/all-movies')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }

  function onLoginSubmit(e) {
    e.preventDefault()
    const user = { username: userLog, password: passLog}

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          setCurrentUser(user)
          history.push('/all-movies')
        })
      } else {
        res.json().then(errorData => setErrors(errorData.errors))
      } 
    })
  }
 
  return (
    <div className="login">
      <h1 className="login-title">Nicolas Cage Movies</h1>
      <img className="login-img" src="https://i.imgur.com/3VWqfkL.png" alt="nic-cage"></img>

      <form className="login-form" onSubmit={onLoginSubmit}>
        <input className="login-input" placeholder=" Username" type="text" value={userLog} onChange={e => setUserLog(e.target.value)}></input>
        <input className="login-input" placeholder=" Password" type="password" value={passLog} onChange={e => setPassLog(e.target.value)}></input>
        <button className="login-btn" type="submit">Login</button>
      </form>

      <form onSubmit={onSignupSubmit}>
        <input className="login-input" placeholder=" Username" type="text" value={userSign} 
        onChange={e => setUserSign(e.target.value)}></input>
        <input className="login-input" placeholder=" Password" type="password" value={passSign} 
        onChange={e => setPassSign(e.target.value)}></input>
        <button className="login-btn" type="submit">Sign Up</button>
      </form>

      {errors ? errors.map(error => (<p key={error}>{error}</p>)) : null}
    </div>
  )
}

export default Login