import React from 'react'
import Github from '../assets/images/github.svg'
import Linkedin from '../assets/images/linkedin.svg'
function Team(props) {
  return (
    <div className=" my-10 flex flex-col w-[22rem]  p-6 rounded-xl shadow-2xl gap-2">
      <div className="flex flex-col pt-5 pb-10 items-center">
        <img
          className="w-40 h-40 object-cover  border-[0.5rem] border-[#8946A6] rounded-full"
          src={props.imgURL}
          alt={props.key}
        />
      </div>
      <p className="my-auto mr-16 text-center w-full font-[body-bold] text-3xl">
        {props.name}
      </p>
      <p className="text-center w-full font-[head-light]  text-sm py-1">
        {props.email}
      </p>
      <div className="text-center font-[body-regular]">{props.about}</div>

      <div className="flex justify-center">
        <a href={props.github}>
          <img src={Github} alt="github logo" className="p-4"></img>
        </a>
        <a href={props.linkedin}>
          <img src={Linkedin} alt="linkedin logo" className="p-4"></img>
        </a>
      </div>
    </div>
  )
}

export default Team
