import React from 'react'
import SignInForm from './signInForm'
import Google from '../assets/images/google.svg'
import Facebook from '../assets/images/facebook.svg'

export default function Signin() {
  let options = [
    {
      icon: Google,
      name: 'Sign in with Google',
      dim: 'w-7',
      width: 'w-fit',
    },
    {
      icon: Facebook,
      name: 'Sign up with Facebook',
      dim: 'w-6',
      width: 'w-fit',
    },
  ]

  return (
    <div className="flex flex-col basis-[50%]  text-xl">
      <div className="flex flex-col basis-[95%] relative">
        <div className="absolute top-[10%] space-y-2 text-center w-full">
          <h1 className="text-[#30194F] font-bold font-[head-medium] text-7xl ">
            Login
          </h1>
          <p className="text-[#C996CC] ">
            Hey there, welcome to Virtual Vitals!
          </p>
        </div>
        <div className="absolute top-[29%] w-full">
          <div className="space-y-4">
            <div className="flex justify-center gap-6 ">
              {options.map((props) => (
                <div
                  className={`cursor-pointer border-2 border-[#C996CC] hover:border-[#cc6fce]  flex px-8 py-4 items-center gap-3 ${props.width} rounded-full`}
                >
                  <img src={props.icon} className={props.dim} alt="logo"></img>
                  <p className="text-base">{props.name}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-5 items-center justify-center">
              <hr className="w-1/5 pt-1/2" />
              <p className="text-[#C996CC] text-base ">or Sign in with Email</p>
              <hr className="w-1/5 pt-1/2" />
            </div>
          </div>
        </div>
        <div className="absolute top-[47%] left-1/2 -translate-x-1/2 w-full">
          <SignInForm />
        </div>

        <div className="absolute top-[79%] text-center w-full ">
          <span className="text-[#C996CC]">New to Virtual Vitals? </span>
          <a href="/signup" className="text-[#8946A6] font-semibold">
            Signup!
          </a>
        </div>
      </div>
    </div>
  )
}
