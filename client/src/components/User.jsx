import React,{useState} from 'react'
import About from './About.jsx';
import Explore from './Explore.jsx';




function User(props) {
  
  return (
    <div>
       <nav >
        <img src='https://www.codester.com/static/uploads/items/000/015/15566/preview-xl.jpg' width='100' length='80'/>
        <div className='explore' onClick={()=>{props.changeView("explore")}} > Explore </div>
        <div className='About' onClick={() => {props.changeView("about")}}>  About Us  </div>
      </nav>
        <div className="home-container">
       <img  src='https://logopond.com/logos/205ed5f71e5c69a164db5780b3bcba41.png' width='600' height='200'/>
     <h1 className="home-title">Space Adventures agency</h1>
    <p className="home-quote">
      "Adventure awaits beyond the final frontier."
    </p> 
    <iframe width="1360" height="815" src="https://www.youtube.com/embed/sZlzYzyREAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>    {/* <img src="https://cdn.sanity.io/images/2yyup5mx/production/d5a915cd9db3444998926f61645b6f83a53aced0-5000x2813.jpg?rect=390,0,4220,2813&w=1200&h=800&auto=format" width="1000px"/> */}
  </div>
      
    </div>
  )
}

export default User;