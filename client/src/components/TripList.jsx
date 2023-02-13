import React from 'react'
import TripListDetail from './TripListDetail.jsx'

function TripList(props) {
  return (
    <div >
      <h2 className='a'>Trips </h2> 
        {
        props.trip.map((item, index) => (
          <TripListDetail key={index} item={item} add={props.add} del={props.del} up={props.up}/>
        ))} 
    </div>
  )
}

export default TripList
