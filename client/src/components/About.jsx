import React from 'react'

function About(props) {
  return (
    
        <div class="about-container">
  <h1 className='ab'>Our Mission</h1>
  <p>Our mission is to provide safe and affordable space travel experiences to people around the world. We do aim for a new way of transportation that generates a hole futuristic world . </p>

  <h1 className='ab'>Our Vision</h1>
  <p>Our vision is to make space travel accessible to everyone and inspire a new generation of space explorers to know more about what they dreamed about when they were young .</p>

  <h1 className='ab'>Our Values</h1>
  <ul>
    <li>* Safety *</li>
    <li>* Affordability *</li>
    <li>* Innovation *</li>
    <li>* Sustainability *</li>
    <li>* Making dreams comes to reality *</li>
  </ul>
  <br/>
  <br/>
  <img src='https://t4.ftcdn.net/jpg/05/61/19/79/360_F_561197960_7qgHpUYkUQqpqeyWK77cz4rdoHctxflW.jpg' width='1200' length='600'/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"/> 
  <button class="return-home" onClick={()=>{props.changeView("user")}}>Return to Home</button>
</div>



  )
}

export default About