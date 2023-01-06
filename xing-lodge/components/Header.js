import React, { useState } from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon, GlobeAltIcon,UsersIcon,UserCircleIcon,Bars3Icon} from "@heroicons/react/24/outline"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from "react-date-range"


function Header() {
const [searchInput, setSearchInput]=useState("")
const [endDate,setEndDate]=useState(new Date()) 
const [startDate,setStartDate]=useState(new Date())
const selectionRange ={
  startDate:startDate,
  endDate:endDate,
  key:"selection"
}
const handleSelect=(ranges)=>{
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate)
}

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10' > 
    <div className=' relative flex items-center h-10 cursor-pointer my-auto'>
        <Image src="https://seeklogo.com/images/A/airbnb-logo-7F4086530F-seeklogo.com.png" alt="Header"
        width="50"
        height="50"
        objectFit='contain'
         objectPosition='left'
        />
    </div>
    <div className="flex items-center md:border-2 rounded-full pl-1 py-2 pr-3 md:shadow-sm">
        <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className="text-sm text-gray-400 pl-5 bg-transparent outline-none flex-grow" type="text" placeholder='Start your search here'/>
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
      <div>
        <DateRangePicker ranges={[selectionRange ]} minDate={new Date()} rangeColors={["#fd5b61"]}
        onChange={handleSelect}
        />

      </div>
    )}
     



    </header>
    
  )
}

export default Header