import React from 'react'
import lottie from 'lottie-web'
import Doctor from '../assets/images/doclottie.json'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUpContent from '../components/SignUpContent'
import SignInContent from '../components/SignInContent'

export default function Signup() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#docLottie'),
      animationData: Doctor,
      loop: true, // boolean
      autoplay: true, // boolean
    })
  }, [])

  return (
    <Router>
      <section className="box-border grid place-content-center min-h-screen min-w-full bg-[#FEF8ED]">
        <div className="container flex w-screen">
          <Switch>
            <Route path="/">
              <SignUpContent />
            </Route>
            <Route path="/signin">
              <SignInContent />
            </Route>
          </Switch>
          <div className="basis-[50%] overflow-x-visible">
            <div id="docLottie" style={{ width: 700, height: 700 }}></div>
          </div>
        </div>
      </section>
    </Router>
  )
}
