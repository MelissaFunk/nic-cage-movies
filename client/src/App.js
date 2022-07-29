import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Eighties from './1980s'
import Nineties from './1990s'
import TwoThousands from './2000s'
import TwentyTens from './2010s'
import TwentyTwenties from './2020s'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  return (
    <div>
      {currentUser.username ? <NavBar setCurrentUser={setCurrentUser}/> : null}
      <Switch>
      <Route exact path="/"><Login setCurrentUser={setCurrentUser}/></Route>
        <Route exact path="/movies"><Home currentUser={currentUser}/></Route>
        <Route exact path="/1980s"><Eighties currentUser={currentUser}/></Route>
        <Route exact path="/1990s"><Nineties currentUser={currentUser}/></Route>
        <Route exact path="/2000s"><TwoThousands currentUser={currentUser}/></Route>
        <Route exact path="/2010s"><TwentyTens currentUser={currentUser}/></Route>
        <Route exact path="/2020s"><TwentyTwenties currentUser={currentUser}/></Route>
        <Route exact path="/logout"><Logout setCurrentUser={setCurrentUser}/></Route>
      </Switch>
    </div>

  );
}

export default App;
