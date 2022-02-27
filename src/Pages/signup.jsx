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
    <div className="bg-[#FEF8ED] max-h-screen overflow-hidden ">
      <Navbar />
      <section className="box-border  min-w-full bg-[#FEF8ED]">
        <div className="container flex mx-auto min-w-full">
          <SignUpContent />
          <div className="basis-[50%] overflow-hidden">
            <div
              id="docLottie"
              style={{ width: 740, height: 740 }}
              className="px-auto py-auto"
            ></div>
          </div>
        </div>
      </section>
    </div>
  )
}
