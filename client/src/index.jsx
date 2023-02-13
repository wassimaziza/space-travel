import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import $ from 'jquery'
import Cover from './components/Cover.jsx'
import User from './components/User.jsx'
import Explore from './components/Explore.jsx'
import About from './components/About.jsx'
import AdminVerif from './components/AdminVerif.jsx'
import TripList from './components/TripList.jsx'
import Option from './components/Option.jsx'
import AddTrip from './components/AddTrip.jsx'


const App = () => {
  const [trip, setTrip] = useState([])
  const [update, setUpdate] = useState(false)
  const [view, setView]= useState("cover")
 const fetch = () => {
  $.ajax({
    url: '/api/trip',
    success: (data) => {
      console.log(data)
      setTrip(data)
    },
    error: (err) => {
      console.log('err', err)
    },
  })
}
 
  useEffect(()=>(fetch()), [update])

const add=(name,date,description,price,place,duration,image)=>{
  $.post("/api/trip",{name:name,date:date,description:description,price:price,place:place,duration:duration,image:image}).then(()=>{
    setUpdate(!update)
  }).catch((err)=>{console.log(err)})
}
const del =(id)=>{
  $.ajax({
    url: `/api/trip/${id}`,
    type: "DELETE",
    data:{id:id},
    success: function(result) {
      setUpdate(!update)
    },
    error: function(err) {
      console.log(err);
    }
  })}
  const up=(id,date,price,duration)=>{
    axios.put(`/api/trip/:${id}`,{date:date,price:price,duration:duration}).then((res)=>{
      setUpdate(!update)
    }).catch((err)=>{console.log(err)})
  }
  const addU=(name,lastName,adress,password,seatNumber)=>{
    $.post("/api/userInfo",{name:name,lastName:lastName,adress:adress,password:password,seatNumber:seatNumber}).then(()=>{
      setUpdate(!update)
    }).catch((err)=>{console.log(err)})
  }
 
  const changeView=(view)=>{
    setView(view)
  }

  const renderView =()=>{
    if(view==="cover"){
      return <Cover changeView={changeView}/>
    } else if (view ==="user" ) {
     return  <User   changeView={changeView}/>
    }  else if (view ==="admin" ) {
      return  <Admin />
     }
     else if (view ==="explore" ) {
      return  <Explore trip={trip}   />
     }else if (view ==="about" ) {
      return  <About  changeView={changeView} />
     }else if (view ==="AdminVerif" ) {
      return  <AdminVerif  changeView={changeView}/>
     }else if (view ==="tripList" ) {
      return  <TripList trip={trip} changeView={changeView} del={del} up={up}/>
     }else if (view ==="option" ) {
      return  <Option changeView={changeView}/>
     }else if (view ==="addTrip" ) {
      return  <AddTrip add={add}/>
     }

  }

  return (
    <div>
    {renderView()}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
// {renderView()} 