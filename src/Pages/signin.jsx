import React from 'react'
import lottie from 'lottie-web'
import Doctor from '../assets/images/doclottie.json'
import SignInContent from '../components/SignInContent'
import Navbar from '../components/Navbar'

export default function Signin() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#docLottie'),
      animationData: Doctor,
      loop: true, // boolean
      autoplay: true, // boolean
    })
  }, [])

  return (
    <>
      <Navbar />
      <section className="box-border grid place-content-center min-h-[93.5vh] min-w-full bg-[#FEF8ED]">
        <div className="container flex w-screen">
          <SignInContent />
          <div className="basis-[50%] overflow-hidden">
            <div
              id="docLottie"
              style={{ width: 750, height: 750 }}
              className="pt-8 pr-12"
            ></div>
          </div>
        </div>
      </section>
    </>
  )
}
