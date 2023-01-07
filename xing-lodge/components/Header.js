import React, { useState } from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon, GlobeAltIcon,UsersIcon,UserCircleIcon,Bars3Icon} from "@heroicons/react/24/outline"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from "react-date-range"
import { useRouter } from 'next/router';


function Header({placeholder}) {
const [searchInput, setSearchInput]=useState("")
const [endDate,setEndDate]=useState(new Date()) 
const [startDate,setStartDate]=useState(new Date())
const router=useRouter()

const search=()=>{
  router.push({
    pathname:"/search" ,
    query:{
      location:searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      numGuest,

    }
  })
}
const selectionRange ={
  startDate:startDate,
  endDate:endDate,
  key:"selection"
}
const handleSelect=(ranges)=>{
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate)
}
const resetInput =()=>{
  setSearchInput("")
}
const [numGuest, setNumGuest]=useState(1)


  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10' > 
    <div className=' relative flex items-center h-10 cursor-pointer my-auto'>
        <Image onClick={()=>router.push("/")}src="https://seeklogo.com/images/A/airbnb-logo-7F4086530F-seeklogo.com.png" alt="Header"
        width="50"
        height="50"
        objectFit='contain'
         objectPosition='left'
        />
    </div>
    <div className="flex items-center md:border-2 rounded-full pl-1 py-2 pr-3 md:shadow-sm">
        <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput}  className="text-sm text-gray-400 pl-5 bg-transparent outline-none flex-grow" type="text" placeholder={placeholder ||'Start your search here'}/>
    
        <MagnifyingGlassIcon className="h-8 bg-red-400 rounded-full p-2  cursor-pointer hidden md:inline-flex md:mx-2"/>
        
    </div>
    <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline'>Become a host</p>
        < GlobeAltIcon className='h-6'/>
        <div className='flex items-center space-x-3 border-2 p-2 rounded-full'>
            <Bars3Icon className='h-6 cursor-pointer'/>
            <UserCircleIcon className='h-6 cursor-pointer'/>
        </div>
    </div>
    {searchInput && (
      <div className='flex flex-col col-span-3 mx-auto'>
        <DateRangePicker ranges={[selectionRange ]} minDate={new Date()} rangeColors={["#fd5b61"]}
        onChange={handleSelect}
        />
        <div className='flex items-center border-b mb-4'>
          <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
          <UsersIcon className='h-5'/>
          <input onChange={(e)=>setNumGuest(e.target.value)}min={1}value= {numGuest} type='number' className="w-12 pl-2 text-lg outline-none text-red-400
          "/>
        </div>
         
    <div className='flex '>
      <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
      <button onClick={search} className='flex-grow text-red-400'>Search</button>
    </div>
      </div>
    )}
     



    </header>
    
  )
}

export default Header