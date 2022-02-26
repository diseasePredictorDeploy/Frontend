import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Signup from './Pages/signup'
import About from './Pages/about'
import Home from './Pages/home'

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route path="/about">
            <About />
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
