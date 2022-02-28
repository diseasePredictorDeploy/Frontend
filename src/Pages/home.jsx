import React, { useEffect } from 'react'
import lottie from 'lottie-web'
import Navbar from '../components/Navbar'
// import Wave from '../assets/images/wave.gif'
import Landing from '../assets/images/Landing.json'
import Typewriter from 'typewriter-effect'

export default function Home() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#homeLottie'),
      animationData: Landing,
      loop: true, // boolean
      autoplay: true, // boolean
    })
  }, [])

  // new Typewriter('#typewriter', {
  //   strings: ['Hello', 'World'],
  //   autoStart: true,
  //   loop: true,
  // })

  return (
    <div className="bg-[#FEF8ED] h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex flex-row w-screen">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('You have the symptoms,... We have the solution')
              .start()
          }}
        />

        <div className=" overflow-hidden">
          <div
            id="homeLottie"
            style={{ width: 740, height: 740 }}
            className="px-auto py-auto"
          ></div>
        </div>
      </div>
    </div>
  )
}
