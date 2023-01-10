import React, { useState } from 'react'
import Map from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css";

import * as geolib from "geolib"
import { Marker,Popup } from 'react-map-gl';

function Mapper({searchResults}) {
  const [selectedPin,setSelectedPin]=useState("");
  
  const coordinates = searchResults.map((res)=>({
        latitude:res.lat,
        longitude:res.long,
    }));
 
    const center = geolib.getCenter(coordinates)


    const [viewport, setViewport]=useState({
        width:"100%",
        height:"100%",
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:11,
    })

  return (
    <Map
    mapStyle='mapbox://styles/0xnunana/clcly3ir0003g14lcag360fgk'
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove={(nextViewport)=>setViewport(nextViewport.viewport)}
    >
     {searchResults.map((results)=>(
       
         <div key={results.long}>
         <Marker
                 longitude={results.long}
                 latitude={results.lat}
                 offsetLeft={-20}
                 offsetTop={-10}
                    >
                     <p onClick={()=>setSelectedPin(results)} className="cursor-pointer text-2xl animate-bounce">🍍</p>
                     </Marker>
                     {selectedPin.long == results.long ? (
                      <div className="border rounded-full"><Popup className="text-red-500 text-semibold"
                      onClose={()=>setSelectedPin({})}
                      closeOnClick={false}
                      latitude={results.lat} 
                      longitude={results.long}>
                        {results.title}
                      </Popup></div>
                     ):(false)}
            
         </div>
     ))}
    </Map> 
  );
}

export default Mapper;