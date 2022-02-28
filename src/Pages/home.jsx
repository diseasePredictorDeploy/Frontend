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
    <div className="bg-[#FEF8ED] h-screen overflow-x-hidden px-6">
      <Navbar />
      <div className="flex flex-row w-screen ">
        <div className="w-[50vw] text-4xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('You have the symptoms,... We have the solution')
                .start()
            }}
          />
          <div className="px-20 py-10 rounded-3xl border-2 border-[#C996CC] w-[70%] text-[20px] mt-32 mx-auto">
          Virtual Vitals provide an easy way to assess your body. Simply enter in your symptoms and we will will find out whats wrong.
          </div>
          <div className='w-44 h-20 mx-auto bg-[#30194F] rounded-2xl mt-20 text-[#C996CC]'>
            <button>Diagnose</button>
          </div>
        </div>
        <div className=" overflow-hidden w-[50vw] ">
          <div
            id="homeLottie"
            style={{ width: 740, height: 610 }}
            className="px-auto py-auto"
          ></div>
        </div>
      </div>
    </div>
  )
}
