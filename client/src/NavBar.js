import { Link } from "react-router-dom"
import { useState } from 'react'
import { useHistory } from 'react-router'
import Logout from './Logout'

function NavBar({ setCurrentUser }) {
  const [buttonPopUp, setButtonPopUp] = useState(false)
  const history = useHistory()

  const handleLogout = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => {
        if (resp.ok) {
            setCurrentUser({})
            history.push("/")
        }
    })
}  

  return (
  <div className="navbar">
    <h1 className="navbar-title">Nicolas Cage Movies</h1>
    <Link to="/all-movies"><p className="navbar-link">All Movies</p></Link>
    <Link to="/1980s"><p className="navbar-link">1980s</p></Link>
    <Link to="/1990s"><p className="navbar-link">1990s</p></Link>
    <Link to="/2000s"><p className="navbar-link">2000s</p></Link>
    <Link to="/2010s"><p className="navbar-link">2010s</p></Link>
    <Link to="/2020s"><p className="navbar-link">2020s</p></Link>
    <button className="navbar-btn" onClick={() => setButtonPopUp(true)}>Logout</button>
    <Logout trigger={buttonPopUp} setTrigger={setButtonPopUp} handleLogout={handleLogout}></Logout>
  </div>
  )
}

export default NavBar