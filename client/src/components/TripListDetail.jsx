import React, { useState } from 'react';
import { ImageUpload } from 'cloudinary-react';

function TripListDetail(props) {
//   const [imageUrl, setImageUrl] = useState('');
const [date,setDate]=useState("")
const [price,setPrice]=useState(0)
const [duration,setDuration]=useState(0)

  return (
    <div className='detailss'>
      <div><h2>{props.item.name}</h2></div>
      <br />
      {/* <ImageUpload
        cloudName="dtponhclz"
        apiKey="379695718148518"
        uploaded={(data) => setImageUrl(data.secure_url)}
        preset="thumbnail"
        multiple={false}
        showPreloader={true}
        maxImageWidth={500}
        maxImageHeight={500}
        maxFileSize={5000000}
      /> */}
      <br />
      <img src={props.item.image} width="400" length="300" />
      <br />
      <div>{props.item.description}</div>
      <br />
      <div>date: {props.item.date}</div>
      <br/>
      <div>Location: {props.item.place}</div>
      <br />
      <div>Cost :{props.item.price}</div>
      <br />
      <div>Time: {props.item.duration}</div>
      <br />
      <br/>
      <button className='btn2' onClick={() => props.del(props.item.idTrip)}>Delete</button><br/>
  <br/>
   <input className='input' placeholder='set the date' onChange={(e)=>(setDate(e.target.value))}></input><br/>
      <input className='input' placeholder='set the price' onChange={(e)=>(setPrice(e.target.value))}></input><br/>
      <input className='input' placeholder='set the duration' onChange={(e)=>(setDuration(e.target.value))}></input><br/>
      <button className='btn2' onClick={() => props.up(props.item.idTrip,date,price,duration)}>Modify</button>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"/> 
      </div>
  );
}

export default TripListDetail;
