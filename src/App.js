import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

import Signup from './Pages/signup'
import About from './Pages/about'
import Home from './Pages/home'
//import Navbar from './components/Navbar'
import Signin from './Pages/signin'

function App() {
  return (
    <Router>
      <div className="relative">
        {/* <Navbar/> */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
