import React from 'react'
import SignUpForm from '../components/signUpForm'
import Google from '../assets/images/google.svg'

export default function Signup() {
  let options = [
    {
      icon: Google,
      name: 'Sign up with Google',
      dim: 'w-7',
      width: 'w-fit',
    },
  ]

  return (
    <div className="flex flex-col basis-[50%] text-xl">
      <div className="flex flex-col basis-[95%] relative">
        <div className="absolute top-[5%] space-y-2 text-center w-full">
          <h1 className="text-[#30194F] font-bold text-7xl font-[head-medium]">
            Create Account
          </h1>
          <p className="text-[#C996CC] ">
            Share your thoughts with the world from today.
          </p>
        </div>
        <div className="absolute top-[24%] w-full">
          <div className="space-y-4">
            <div className="flex gap-3 ">
              {options.map((props) => (
                <div
                  className={`border-2 border-[#C996CC] hover:border-[#cc6fce] mx-auto flex px-8 py-4 items-center gap-2 ${props.width} rounded-full`}
                >
                  <img src={props.icon} className={props.dim} alt="logo"></img>
                  <p className="text-base">{props.name}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-5 items-center justify-center">
              <hr className="w-1/5 pt-1/2" />
              <p className="text-[#C996CC] text-base ">or Sign up with Email</p>
              <hr className="w-1/5 pt-1/2" />
            </div>
          </div>
        </div>
        <div className="absolute top-[43%] left-1/2 -translate-x-1/2">
          <SignUpForm />
        </div>

        <div className="absolute top-[96%]  text-center w-full">
          <span className="text-[#C996CC]">Already have an account </span>
          <span className="text-[#8946A6] font-semibold">Login!</span>
        </div>
      </div>
    </div>
  )
}
// {
// 	/*IMPORT SIGNUPFORM*/
// }

// {
// 	/*LEFT PART KA JSX*/
// }

// {
// 	/*EXPORT THIS FILE TO SIGNU.JSX*/
// }

// //ALL DONE IG
