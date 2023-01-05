import React from 'react'
import Image from "next/image"

function MediumCards({img,title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition furation-300 ease out'>
      <div className=" relative h-60 w-60">
        <Image src={img} fill className='rounded-xl'/>
        </div>
        <div><h3 className='text-2xl mt-3'>{title}</h3></div>
       
      
    </div>
  )
}

export default MediumCards