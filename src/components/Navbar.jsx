import React from 'react'

export default function Navbar() {
  return (
    <div className=" p-3 w-screen bg-[#FEF8ED] text-[#30194F] font-[head-medium] font-bold">
      <ul className="flex text-lg space-x-10 justify-end uppercase">
        <li className="px-5 ">
          <a className="" href="/">
            Home
          </a>
        </li>
        <li className="px-5">
          <a href="/about">About Us</a>
        </li>
        <li className="px-5">
          <a href="/signup">Sign Up</a>
        </li>
        <li className="px-5 pr-10">
          <a href="/signin">Sign In</a>
        </li>
      </ul>
    </div>
  )
}
