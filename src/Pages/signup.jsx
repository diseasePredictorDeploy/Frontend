import React from 'react'
import lottie from 'lottie-web'
import Doctor from '../assets/images/doclottie.json'
import SignUpContent from '../components/SignUpContent'
import Navbar from '../components/Navbar'

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
    <div className="bg-[#FEF8ED] h-screen">
      <Navbar />
      <section className="box-border grid place-content-center min-w-full pt-20">
        <div className="container flex w-screen">
          <SignUpContent />
          <div className="basis-[50%] overflow-hidden">
            <div
              id="docLottie"
              style={{ width: 740, height: 740 }}
              className="pt-8 pr-12"
            ></div>
          </div>
        </div>
      </section>
    </div>
  )
}
