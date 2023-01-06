import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700]'>
        <Image src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='banner' fill/>
    <div className="absolute top-1/2 w-full text-center">
        <p className='text-sm sm:text-lg'>
            Not Sure where to go?
        </p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full dont-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'm Flexible</button>
    </div>
    
    </div>
  )
}

export default Banner