import React, { useState } from 'react'
import MapGl from "react-map-gl"

function Mapper() {
    const[viewport, setViewport]=useState({
        width:"100%",
        height:"100%",
        latitude:37.7577,
        longitude:-122.4376,
        zoom:11,
    })
  return (
    <MapGl
    mapStyle='mapbox://styles/0xnunana/clcly3ir0003g14lcag360fgk'
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove={nextViewport=>setViewport(nextViewport.viewport)}
    />
  )
}

export default Mapper