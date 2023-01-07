import { useRouter } from 'next/router'
import { format } from 'date-fns';
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard';
import Mapper from '../components/Map';

function Search({searchResults}) {
const router = useRouter();
const {location,startDate,endDate,numGuest}=router.query;
const formatStartDate = format(new Date(startDate),"dd MMMM yy")
const formatEndDate = format(new Date(endDate),"dd MMMM yy")
const range =`${formatStartDate} - ${formatEndDate}`



  return (
    <div>
    <Header placeholder={`${location} | ${range} | ${numGuest}`}/>
<main className='flex'>
<section className='flex-grow pt-14 px-6'>
    <p className="text-sm">300+ Stays {range} for {numGuest} guests</p>
    <h1 className='text-3xl font-semibold mt-6'>Stays in {location}</h1>
    <div className='flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
        <p className="button flex-grow">Cancellation Flexibility</p>
        <p className="button flex-grow ">Type of Place</p>
       <p className="button flex-grow">Price</p>
        <p className="button flex-grow">Rooms and Beds</p>
        <p className="button flex-grow">More filters</p>
    </div>
   <div className="flex flex-col">
     {searchResults?.map(({img,title,location,description,star,price,total})=>(
        <InfoCard key={img} title={title} img={img} location={location} description={description} star={star} price={price} total={total}/>
    )

    )}
   </div>
</section>
<section className='hidden xl:inline-flex xl:min-w-[600px]'>
    <Mapper/>
</section>
</main>
    <Footer/>
    </div>
  )
}

export default Search

export async function getServerSideProps(){
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res=>res.json()); 
    return{
        props:{
            searchResults,
        }
    }
}