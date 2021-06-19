// Modules
import React from "react"
import Image from "next/image"

export const Top = () => {
  // *************** JSX *************** //
  return (
    <div className="mx-auto">
      <div className="relative">
        <Image
          className="object-contain"
          src="/topImage.png"
          alt="test"
          width="1500"
          height="1000"
        />
      </div>
      <h1
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          font-bold text-5xl text-red-800
        "
      >
        KATSUYA ASAKURA
      </h1>
    </div>
  )
}