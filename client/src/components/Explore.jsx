import React from 'react'
import UserDetail from "./UserDetail.jsx"
function Explore(props) {
  return (
    <div className='explore'  >
      <h1> This is our program </h1>
      <h3> " Never doubt something that goes beyond limits..." </h3>
         {
        props.trip.map((item, index) => (
          <UserDetail key={index} item={item} />
        ))}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"/> 
    </div>
  )
}

export default Explore