import React from 'react'

function Option(props) {
  return (
    <div>
        <form className="form-center">
      <button type="button" className="big-green-button" onClick={()=>{props.changeView("addTrip")}}>Add Trip</button>
      <button type="button" className="big-red-button" onClick={()=>{props.changeView("tripList")}}>Trip List</button>
    </form>
    </div>
  )
}

export default Option