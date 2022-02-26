import React from 'react'

export default function Navbar() {
  return (
    <div className='h-20 bg-[#000000] text-[#C996CC]'>
        <ul className='flex flex-row text-[30px]'>
            <li className='m-5'><a href='/'>Home</a></li>
            <li className='m-5'><a href='/about'>AboutUs</a></li>
            <li className='m-5'><a href='/signup'>SingUp</a></li>
        </ul>
    </div>
  )
}
