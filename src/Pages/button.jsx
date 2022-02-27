import React from 'react'

function Button() {
  return (
    <div className="flex justify-center items-center button w-fit mx-auto">
      <svg className="button-btn absolute">
        <rect
          x="0"
          y="0"
          fill="none"
          width="100%"
          rx="40"
          ry="40"
          height="100%"
        />
      </svg>
      <p className="relative top-0 left-0 text-[#30194F]">SUBMIT</p>
    </div>
  )
}

export default Button
