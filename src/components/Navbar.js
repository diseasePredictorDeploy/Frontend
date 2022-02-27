import React from 'react'

export default function Navbar() {
  return (
    <div className="p-3 bg-[#000000] text-[#C996CC]">
      <ul className="flex text-2xl space-x-10 justify-end">
        <li className="px-5">
          <a href="/">Home</a>
        </li>
        <li className="px-5">
          <a href="/about">About Us</a>
        </li>
        <li className="px-5">
          <a href="/signup">Sign Up</a>
        </li>
        <li className="px-5">
          <a href="/signin">Sign In</a>
        </li>
      </ul>
    </div>
  )
}
