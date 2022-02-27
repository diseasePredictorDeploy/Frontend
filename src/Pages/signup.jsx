import React from 'react'
import lottie from 'lottie-web'
import Doctor from '../assets/images/doclottie.json'
import SignUpContent from '../components/SignUpContent'

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
    <section className="box-border grid place-content-center min-h-screen min-w-full bg-[#FEF8ED]">
      <div className="container flex w-screen">
        <SignUpContent />
        <div className="basis-[50%] overflow-x-visible">
          <div
            id="docLottie"
            style={{ width: 700, height: 700 }}
            className="my-auto"
          ></div>
        </div>
      </div>
    </section>
  )
}
