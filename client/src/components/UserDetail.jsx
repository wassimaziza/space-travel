import React, { useState } from "react";
import $ from "jquery"
function UserDetail(props) {
  const [form1, setForm1] = useState({
    name:"",
    lastName:"",
    adress:"",
    password:"",
    seatNumber:"",
  })
  const addU=(name,lastName,adress,password,seatNumber)=>{
    $.post("/api/userInfo",{name:name,lastName:lastName,adress:adress,password:password,seatNumber:seatNumber}).then(()=>{
      setUpdate(!update)
    }).catch((err)=>{console.log(err)})
  }
  const handleChange = (e)=>{
    setForm1({
      ...form1,[e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    addU(form1.name,form1.lastName,form1.adress,form1.password,form1.seatNumber )
  }
 
 
  return (
    <div >
      <br/>
      <h3> <div className="name">{props.item.name}</div> </h3>
       <br/>
        <div>
        <img src={props.item.image} width="500" length="300" /> 
      </div>
      <br/>
      <div>
      <h4>{props.item.description}</h4>
      </div>
      <div>
      <h4>The trip is scheduled at : {props.item.date} </h4>
      </div>
      <div>
      <h4>Will take  {props.item.place} as the launch position . </h4>
      </div>
      <div>
      <h4> Trip duration : {props.item.duration} hours.</h4>
      </div>
      <div>
      <h4> Only At : ${props.item.price}  ( PRICE IN THOUSANDS) </h4>
      </div>
   <div>
     <form onSubmit={handleSubmit}>
      <label>Your Name:</label>
      <input type="text" 
      name="name" required 
      value={form1.name}
       onChange={handleChange}/>
      <br/>
      <label>Last Name:</label> 
      <input type="text" 
      name="lastName" required
       value={form1.lastName} 
       onChange={handleChange}/>
      <br/>
      <label>Your Adress :</label>
      <input type="text"
       name="adress" required 
       value={form1.adress} 
       onChange={handleChange}/>
      <br/>
      <label>Choose you nickname :</label>
      <input type="text"
       name="password" required
        value={form1.password} 
        onChange={handleChange}/>
      <br/>
      <label>Choose your Seat place : </label>
      <input type="text" 
      name="seatNumber" 
      placeholder="WARNING! SEATS CAN BE CHANGED ACCORDING TO OTHER PASSENGERS RESERVATION" required 
      value={form1.seatNumber} 
      onChange={handleChange}/>
      <br/>
       <button type='submit'> BOOK!</button> 
       <br/>
      </form>
   </div>
   </div>
    
  );
}

export default UserDetail;
